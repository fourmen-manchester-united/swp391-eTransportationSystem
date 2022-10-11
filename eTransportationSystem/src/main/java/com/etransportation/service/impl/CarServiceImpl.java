package com.etransportation.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.etransportation.enums.CarStatus;
import com.etransportation.model.Account;
import com.etransportation.model.Address;
import com.etransportation.model.Car;
import com.etransportation.model.CarBrand;
import com.etransportation.model.CarImage;
import com.etransportation.model.CarModel;
import com.etransportation.model.Feature;
import com.etransportation.model.Ward;
import com.etransportation.payload.request.CarRegisterRequest;
import com.etransportation.payload.response.CarBrandResponse;
import com.etransportation.payload.response.CarDetailInfoResponse;
import com.etransportation.payload.response.CarShortInfoResponse;
import com.etransportation.repository.AccountRepository;
import com.etransportation.repository.AddressRepository;
import com.etransportation.repository.CarBrandRepository;
import com.etransportation.repository.CarImageRepository;
import com.etransportation.repository.CarModelRepository;
import com.etransportation.repository.CarRepository;
import com.etransportation.repository.FeatureRepository;
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
                List<CarBrandResponse> carBrandResponse = modelMapper.map(carBrand,
                                new TypeToken<List<CarBrandResponse>>() {
                                }.getType());
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
                List<CarImage> listCarImage = new ArrayList<CarImage>();
                if (carRegisterRequest.getCarImages() != null && !carRegisterRequest.getCarImages().isEmpty()) {
                        for (CarImage image : car.getCarImages()) {
                                image.setCar(car);
                                listCarImage.add(image);
                        }
                }
                carImageRepository.saveAll(listCarImage);
        }

        @Override
        @Transactional
        public CarDetailInfoResponse findCarDetailInfo(Long carId) {
                Car car = carRepository.findById(carId)
                                .orElseThrow(() -> new IllegalArgumentException("Car not found"));
                CarDetailInfoResponse carDetailInfoResponse = modelMapper.map(car, CarDetailInfoResponse.class);
                carDetailInfoResponse.setName(car.getModel().getName());
                carDetailInfoResponse.setAddressInfo(
                                car.getAddress().getDistrict().getName() + ", " + car.getAddress().getCity().getName());
                return carDetailInfoResponse;
        }

        @Override
        public List<CarShortInfoResponse> findAllCarByUserId(Long id) {
                Account account = accountRepository.findById(id)
                                .orElseThrow(() -> new IllegalArgumentException("Account not found"));

                if (account.getCars() == null || account.getCars().size() == 0) {
                        throw new IllegalArgumentException("Không tìm thấy xe nào.");
                }
                List<CarShortInfoResponse> listCarInfoResponse = new ArrayList<CarShortInfoResponse>();
                CarShortInfoResponse carInfoResponse;

                for (Car car : account.getCars()) {
                        carInfoResponse = new CarShortInfoResponse();
                        carInfoResponse = modelMapper.map(car, CarShortInfoResponse.class);
                        carInfoResponse.setAddressInfo(car.getAddress().getDistrict().getName() + ", "
                                        + car.getAddress().getCity().getName());
                        carInfoResponse.setName(car.getModel().getName());
                        carInfoResponse.setCarImage(car.getCarImages()
                                        .get(new Random().nextInt(car.getCarImages().size()))
                                        .getImage());
                        listCarInfoResponse.add(carInfoResponse);
                }
                return listCarInfoResponse;
        }

        @Override
        public List<CarShortInfoResponse> findAllCar() {
                List<Car> listCar = carRepository.findAll();
                return modelMapper.map(listCar, new TypeToken<List<CarShortInfoResponse>>() {
                }.getType());
        }

}
