package com.etransportation.service.impl;

import java.util.Calendar;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.etransportation.enums.BookStatus;
import com.etransportation.enums.CarStatus;
import com.etransportation.model.Address;
import com.etransportation.model.Car;
import com.etransportation.model.CarBrand;
import com.etransportation.model.Ward;
import com.etransportation.payload.dto.CarModelDTO;
import com.etransportation.payload.request.CarRegisterRequest;
import com.etransportation.payload.request.PagingRequest;
import com.etransportation.payload.response.CarBrandResponse;
import com.etransportation.payload.response.CarDetailInfoResponse;
import com.etransportation.payload.response.CarShortInfoResponse;
import com.etransportation.payload.response.PagingResponse;
import com.etransportation.repository.AccountRepository;
import com.etransportation.repository.CarBrandRepository;
import com.etransportation.repository.CarImageRepository;
import com.etransportation.repository.CarRepository;
import com.etransportation.repository.WardRepository;
import com.etransportation.service.CarService;

@Service
public class CarServiceImpl implements CarService {

        @Autowired
        private CarBrandRepository carBrandRepository;

        @Autowired
        private ModelMapper modelMapper;

        @Autowired
        private AccountRepository accountRepository;

        @Autowired
        private WardRepository wardRepository;

        @Autowired
        private CarRepository carRepository;

        @Autowired
        private CarImageRepository carImageRepository;

        @Override
        @Transactional
        public List<CarBrandResponse> findAllCarBrands() {
                List<CarBrand> carBrand = carBrandRepository.findAll();
                List<CarBrandResponse> carBrandResponse = carBrand.stream().map(cb -> {
                        CarBrandResponse response = new CarBrandResponse();
                        response.setId(cb.getId());
                        response.setName(cb.getName());
                        response.setCarModels(cb.getCarModels().stream().map(cm -> {
                                CarModelDTO carModelDTO = new CarModelDTO();
                                carModelDTO.setId(cm.getId());
                                carModelDTO.setName(cm.getName());
                                return carModelDTO;
                        }).collect(Collectors.toList()));
                        return response;
                }).collect(Collectors.toList());
                return carBrandResponse;
        }

        @Override
        @Transactional
        public void save(CarRegisterRequest carRegisterRequest) {
                Car car = modelMapper.map(carRegisterRequest, Car.class);
                // set address register to car
                Ward ward = wardRepository.findById(carRegisterRequest.getWard().getId())
                                .orElseThrow(() -> new IllegalArgumentException("Ward not found"));
                Address address = Address
                                .builder()
                                .ward(ward)
                                .district(ward.getDistrict())
                                .city(ward.getDistrict().getCity())
                                .street(carRegisterRequest.getStreet())
                                .build();
                car.setAddress(address);
                car.setStatus(CarStatus.PENDING_APPROVAL);
                carRepository.save(car);
                // set image register to car

                carImageRepository.saveAll(
                                car.getCarImages()
                                                .stream()
                                                .map(c -> {
                                                        c.setCar(car);
                                                        return c;
                                                })
                                                .collect(Collectors.toList()));
        }

        @Override
        @Transactional
        public CarDetailInfoResponse findCarDetailInfo(Long carId) {
                Calendar cal = Calendar.getInstance();
                cal.set(Calendar.DAY_OF_MONTH, cal.get(Calendar.DAY_OF_MONTH) - 1);
                Car car = carRepository.findById(carId)
                                .orElseThrow(() -> new IllegalArgumentException("Car not found"));
                CarDetailInfoResponse carDetailInfoResponse = modelMapper.map(car, CarDetailInfoResponse.class);

                carDetailInfoResponse.setName(car.getModel().getName());
                carDetailInfoResponse.setAddressInfo(
                                car.getAddress().getDistrict().getName() + ", " + car.getAddress().getCity().getName());
                carDetailInfoResponse.getBooks().removeIf(book -> book.getEndDate().before(cal.getTime())
                                || book.getStatus().equals(BookStatus.CANCEL));
                return carDetailInfoResponse;
        }

        @Override
        public List<CarShortInfoResponse> findAllCarByUserId(Long id) {
                List<Car> cars = carRepository.findAllByAccount_Id(id);
                List<CarShortInfoResponse> listCarInfoResponse = cars.stream().map(c -> {
                        CarShortInfoResponse carInfoResponse = modelMapper.map(c, CarShortInfoResponse.class);
                        carInfoResponse.setAddressInfo(c.getAddress().getDistrict().getName() + ", "
                                        + c.getAddress().getCity().getName());
                        carInfoResponse.setName(c.getModel().getName());
                        carInfoResponse.setCarImage(c.getCarImages()
                                        .get(new Random().nextInt(c.getCarImages().size()))
                                        .getImage());
                        return carInfoResponse;
                }).collect(Collectors.toList());

                return listCarInfoResponse;
        }

        @Override
        public Object findAllCar(PagingRequest pagingRequest) {

                Pageable pageable = PageRequest.of(pagingRequest.getPage() - 1, pagingRequest.getSize());
                Page<Car> car = carRepository.findAll(pageable);

                List<CarShortInfoResponse> listCarInfoResponse = car.getContent().stream().map(c -> {
                        CarShortInfoResponse carShortInfoResponse = modelMapper.map(c, CarShortInfoResponse.class);
                        carShortInfoResponse.setAddressInfo(c.getAddress().getDistrict().getName() + ", "
                                        + c.getAddress().getCity().getName());
                        carShortInfoResponse.setName(c.getModel().getName());
                        carShortInfoResponse.setCarImage(c.getCarImages()
                                        .get(new Random().nextInt(c.getCarImages().size()))
                                        .getImage());

                        return carShortInfoResponse;
                }).collect(Collectors.toList());

                PagingResponse<CarShortInfoResponse> pagingResponse = PagingResponse
                                .<CarShortInfoResponse>builder()
                                .page(car.getPageable().getPageNumber() + 1)
                                .size(car.getSize())
                                .totalPage(car.getTotalPages())
                                .totalItem(car.getTotalElements())
                                .contends(listCarInfoResponse)
                                .build();
                return pagingResponse;
        }

        @Override
        @Transactional
        public List<CarShortInfoResponse> findAllCarsByCity(String code, PagingRequest pagingRequest) {

                Pageable pageable = PageRequest.of(pagingRequest.getPage() - 1, pagingRequest.getSize());
                List<Car> listCar = carRepository.findAllByStatusAndAddress_City_Code(CarStatus.ACTIVE, code, pageable);
                List<CarShortInfoResponse> listCarInfoResponse = listCar.stream().map(c -> {
                        CarShortInfoResponse carInfoResponse = modelMapper.map(c, CarShortInfoResponse.class);
                        carInfoResponse.setName(c.getModel().getName());
                        carInfoResponse.setAddressInfo(c.getAddress().getDistrict().getName() + ", "
                                        + c.getAddress().getCity().getName());
                        carInfoResponse.setCarImage(c.getCarImages()
                                        .get(new Random().nextInt(c.getCarImages().size())).getImage());
                        return carInfoResponse;
                }).collect(Collectors.toList());

                return listCarInfoResponse;
        }

}
