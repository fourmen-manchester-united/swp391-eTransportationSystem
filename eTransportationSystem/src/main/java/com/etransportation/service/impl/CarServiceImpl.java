package com.etransportation.service.impl;

import static com.etransportation.filter.CarSpecification.*;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.DoubleSummaryStatistics;
import java.util.HashSet;
import java.util.IntSummaryStatistics;
import java.util.List;
import java.util.OptionalDouble;
import java.util.Random;
import java.util.Set;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;
import java.util.stream.DoubleStream;
import java.util.stream.IntStream;

import org.apache.commons.lang3.ArrayUtils;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.etransportation.enums.BookStatus;
import com.etransportation.enums.CarStatus;
import com.etransportation.filter.Car_;
import com.etransportation.model.Address;
import com.etransportation.model.Car;
import com.etransportation.model.CarBrand;
import com.etransportation.model.CarImage;
import com.etransportation.model.Feature;
import com.etransportation.model.Review;
import com.etransportation.model.Ward;
import com.etransportation.mybean.CarBean;
import com.etransportation.payload.dto.CarBrandDTO;
import com.etransportation.payload.dto.CarModelDTO;
import com.etransportation.payload.dto.IdDTO;
import com.etransportation.payload.request.CarBrowsingRequest;
import com.etransportation.payload.request.CarRegisterRequest;
import com.etransportation.payload.request.CarUpdateInfoRequest;
import com.etransportation.payload.request.PagingRequest;
import com.etransportation.payload.request.filterSearchCar;
import com.etransportation.payload.response.CarBrandResponse;
import com.etransportation.payload.response.CarDetailInfoResponse;
import com.etransportation.payload.response.CarShortInfoResponse;
import com.etransportation.payload.response.PagingResponse;
import com.etransportation.payload.response.ReviewByCarResponse;
import com.etransportation.repository.AccountRepository;
import com.etransportation.repository.AddressRepository;
import com.etransportation.repository.CarBrandRepository;
import com.etransportation.repository.CarImageRepository;
import com.etransportation.repository.CarRepository;
import com.etransportation.repository.ReviewRepository;
import com.etransportation.repository.WardRepository;
import com.etransportation.service.CarService;
import com.etransportation.util.DateConverter;

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

        @Autowired
        private AddressRepository addressRepository;

        @Autowired
        private ReviewRepository reviewRepository;

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
                // nen dung @PrePersist cho ham duoi --> tim hieu trong class car
                // car.getCarImages().forEach(c -> c.setCar(car));
                carRepository.save(car);
        }

        @Override
        @Transactional
        public CarDetailInfoResponse findCarDetailInfo(Long carId) {
                Calendar cal = Calendar.getInstance();
                cal.set(Calendar.DAY_OF_MONTH, cal.get(Calendar.DAY_OF_MONTH) - 1);
                Car car = carRepository.findById(carId)
                                .orElseThrow(() -> new IllegalArgumentException("Car not found"));
                CarDetailInfoResponse carDetailInfoResponse = modelMapper.map(car, CarDetailInfoResponse.class);

                carDetailInfoResponse.setName(car.getModel().getName() + " " + car.getYearOfManufacture());
                carDetailInfoResponse.setAddressInfo(
                                car.getAddress().getDistrict().getName() + ", " + car.getAddress().getCity().getName());
                carDetailInfoResponse.getBooks().removeIf(book -> book.getEndDate().before(cal.getTime())
                                || book.getStatus().equals(BookStatus.CANCEL));

                carDetailInfoResponse.getBooks().forEach(book -> {
                        book.setDates(DateConverter.getDatesBetween(book.getStartDate(), book.getEndDate()));

                });
                carDetailInfoResponse.setTotalBook(car.getBooks().size());

                List<Review> review = reviewRepository.findAllByBook_Car_Id(car.getId());

                carDetailInfoResponse.setTotalRating(Double.valueOf(
                                new DecimalFormat("#0.0").format(review.stream()
                                                .mapToInt(r -> r.getStarReview()).average()
                                                .orElse(0.0))));
                return carDetailInfoResponse;

        }

        @Override
        @Transactional
        public List<CarShortInfoResponse> findAllCarByUserId(Long id) {
                List<Car> cars = carRepository.findAllByAccount_Id(id);
                List<CarShortInfoResponse> listCarInfoResponse = cars.stream().map(c -> {
                        CarShortInfoResponse carInfoResponse = modelMapper.map(c, CarShortInfoResponse.class);
                        carInfoResponse.setAddressInfo(c.getAddress().getDistrict().getName() + ", "
                                        + c.getAddress().getCity().getName());
                        carInfoResponse.setName(c.getModel().getName() + " " + c.getYearOfManufacture());
                        if (c.getCarImages().size() == 0) {
                                carInfoResponse.setCarImage("https://n1-cstg.mioto.vn/g/2018/03/17/16/52.jpg");
                        } else {
                                carInfoResponse.setCarImage(c.getCarImages()
                                                .get(new Random().nextInt(c.getCarImages().size()))
                                                .getImage());
                        }

                        carInfoResponse.setTotalBook(c.getBooks().size());
                        List<Review> review = reviewRepository.findAllByBook_Car_Id(c.getId());

                        carInfoResponse.setTotalRating(Double.valueOf(
                                        new DecimalFormat("#0.0").format(review.stream()
                                                        .mapToInt(r -> r.getStarReview()).average()
                                                        .orElse(0.0))));
                        return carInfoResponse;
                }).collect(Collectors.toList());

                return listCarInfoResponse;
        }

        @Override
        @Transactional
        public Object findAllCarByAdmin(PagingRequest pagingRequest) {

                Pageable pageable = PageRequest.of(pagingRequest.getPage() - 1, pagingRequest.getSize());
                Page<Car> cars = carRepository.findAll(pageable);

                List<CarShortInfoResponse> listCarInfoResponse = cars.getContent().stream().map(c -> {
                        CarShortInfoResponse carShortInfoResponse = modelMapper.map(c, CarShortInfoResponse.class);
                        carShortInfoResponse.setAddressInfo(c.getAddress().getDistrict().getName() + ", "
                                        + c.getAddress().getCity().getName());
                        carShortInfoResponse.setName(c.getModel().getName() + " " + c.getYearOfManufacture());
                        if (c.getCarImages().size() == 0) {
                                carShortInfoResponse.setCarImage("https://n1-cstg.mioto.vn/g/2018/03/17/16/52.jpg");
                        } else {
                                carShortInfoResponse.setCarImage(c.getCarImages()
                                                .get(new Random().nextInt(c.getCarImages().size()))
                                                .getImage());
                        }

                        carShortInfoResponse.setTotalBook(c.getBooks().size());
                        List<Review> review = reviewRepository.findAllByBook_Car_Id(c.getId());

                        carShortInfoResponse.setTotalRating(Double.valueOf(
                                        new DecimalFormat("#0.0").format(review.stream()
                                                        .mapToInt(r -> r.getStarReview()).average()
                                                        .orElse(0.0))));

                        return carShortInfoResponse;
                }).collect(Collectors.toList());

                PagingResponse<CarShortInfoResponse> pagingResponse = PagingResponse
                                .<CarShortInfoResponse>builder()
                                .page(cars.getPageable().getPageNumber() + 1)
                                .size(cars.getSize())
                                .totalPage(cars.getTotalPages())
                                .totalItem(cars.getTotalElements())
                                .contends(listCarInfoResponse)
                                .build();
                return pagingResponse;
        }

        @Override
        @Transactional
        public List<CarShortInfoResponse> findAllCarsByCity(String code, PagingRequest pagingRequest) {

                Pageable pageable = PageRequest.of(pagingRequest.getPage() - 1, pagingRequest.getSize());
                // List<Car> listCar =
                // carRepository.findAllByStatusAndAddress_City_Code(CarStatus.ACTIVE, code,
                // pageable);
                Page<Car> listCar = carRepository.findCarByCityCodeSortByCountBookOfCar(CarStatus.ACTIVE.toString(),
                                code,
                                pageable);
                List<CarShortInfoResponse> listCarInfoResponse = listCar.getContent().stream().map(c -> {
                        CarShortInfoResponse carInfoResponse = modelMapper.map(c, CarShortInfoResponse.class);
                        carInfoResponse.setName(c.getModel().getName() + " " + c.getYearOfManufacture());
                        carInfoResponse.setAddressInfo(c.getAddress().getDistrict().getName() + ", "
                                        + c.getAddress().getCity().getName());
                        if (c.getCarImages().size() == 0) {
                                carInfoResponse.setCarImage("https://n1-cstg.mioto.vn/g/2018/03/17/16/52.jpg");
                        } else {
                                carInfoResponse.setCarImage(c.getCarImages()
                                                .get(new Random().nextInt(c.getCarImages().size()))
                                                .getImage());
                        }

                        carInfoResponse.setTotalBook(c.getBooks().size());
                        List<Review> review = reviewRepository.findAllByBook_Car_Id(c.getId());

                        carInfoResponse.setTotalRating(Double.valueOf(
                                        new DecimalFormat("#0.0").format(review.stream()
                                                        .mapToInt(r -> r.getStarReview()).average()
                                                        .orElse(0.0))));

                        return carInfoResponse;
                }).collect(Collectors.toList());

                return listCarInfoResponse;
        }

        @Override
        @Transactional
        public void carBrowsing(CarBrowsingRequest carBrowsingRequest) {
                Car car = carRepository.findById(carBrowsingRequest.getId()).orElseThrow(
                                () -> new IllegalArgumentException("Car not found"));

                switch (carBrowsingRequest.getStatus()) {
                        case ACTIVE:
                                car.setStatus(CarStatus.ACTIVE);
                                break;
                        case DENIED:
                                car.setStatus(CarStatus.DENIED);
                                break;
                        case PAUSE:
                                car.setStatus(CarStatus.PAUSE);
                                break;
                        case PENDING_APPROVAL:
                                car.setStatus(CarStatus.PENDING_APPROVAL);
                                break;

                        default:
                                throw new IllegalStateException("Unknown status: " + carBrowsingRequest.getStatus());

                }

                carRepository.save(car);

        }

        @Override
        @Transactional
        public Object findAllCarByGuest(PagingRequest pagingRequest) {

                Pageable pageable = PageRequest.of(pagingRequest.getPage() - 1, pagingRequest.getSize());
                Page<Car> cars = carRepository.findCarByFamous(CarStatus.ACTIVE.toString(), pageable);
                // Page<Car> cars = carRepository.findAllByStatus(CarStatus.ACTIVE, pageable);

                List<CarShortInfoResponse> listCarInfoResponse = cars.getContent().stream().map(c -> {
                        CarShortInfoResponse carShortInfoResponse = modelMapper.map(c, CarShortInfoResponse.class);
                        carShortInfoResponse.setAddressInfo(c.getAddress().getDistrict().getName() + ", "
                                        + c.getAddress().getCity().getName());
                        carShortInfoResponse.setName(c.getModel().getName() + " " + c.getYearOfManufacture());
                        if (c.getCarImages().size() == 0) {
                                carShortInfoResponse.setCarImage("https://n1-cstg.mioto.vn/g/2018/03/17/16/52.jpg");
                        } else {
                                carShortInfoResponse.setCarImage(c.getCarImages()
                                                .get(new Random().nextInt(c.getCarImages().size()))
                                                .getImage());
                        }
                        carShortInfoResponse.setTotalBook(c.getBooks().size());
                        List<Review> review = reviewRepository.findAllByBook_Car_Id(c.getId());

                        carShortInfoResponse.setTotalRating(Double.valueOf(
                                        new DecimalFormat("#0.0").format(review.stream()
                                                        .mapToInt(r -> r.getStarReview()).average()
                                                        .orElse(0.0))));

                        return carShortInfoResponse;
                }).collect(Collectors.toList());

                PagingResponse<CarShortInfoResponse> pagingResponse = PagingResponse
                                .<CarShortInfoResponse>builder()
                                .page(cars.getPageable().getPageNumber() + 1)
                                .size(cars.getSize())
                                .totalPage(cars.getTotalPages())
                                .totalItem(cars.getTotalElements())
                                .contends(listCarInfoResponse)
                                .build();
                return pagingResponse;
        }

        @Override
        @Transactional
        public Object filterCar(filterSearchCar filter, PagingRequest pagingRequest) {

                Pageable pageable = PageRequest.of(pagingRequest.getPage() - 1, pagingRequest.getSize());
                Page<Car> cars = carRepository.findAll(filterSearchCar(filter), pageable);

                List<CarShortInfoResponse> listCarInfoResponse = cars.getContent().stream().map(c -> {
                        CarShortInfoResponse carShortInfoResponse = modelMapper.map(c, CarShortInfoResponse.class);
                        carShortInfoResponse.setAddressInfo(c.getAddress().getDistrict().getName() + ", "
                                        + c.getAddress().getCity().getName());
                        carShortInfoResponse.setName(c.getModel().getName() + " " + c.getYearOfManufacture());

                        if (c.getCarImages().size() == 0) {
                                carShortInfoResponse.setCarImage("https://n1-cstg.mioto.vn/g/2018/03/17/16/52.jpg");
                        } else {
                                carShortInfoResponse.setCarImage(c.getCarImages()
                                                .get(new Random().nextInt(c.getCarImages().size()))
                                                .getImage());
                        }

                        carShortInfoResponse.setTotalBook(c.getBooks().size());
                        List<Review> review = reviewRepository.findAllByBook_Car_Id(c.getId());

                        carShortInfoResponse.setTotalRating(Double.valueOf(
                                        new DecimalFormat("#0.0").format(review.stream()
                                                        .mapToInt(r -> r.getStarReview()).average()
                                                        .orElse(0.0))));
                        return carShortInfoResponse;
                }).collect(Collectors.toList());

                if (filter.getPriceBetween() == null || filter.getPriceBetween().length != 2) {
                        filter.setPriceBetween(new Double[] { 0.0, 4000.0 });
                }
                DoubleSummaryStatistics dt = DoubleStream
                                .of(ArrayUtils.toPrimitive(filter.getPriceBetween()))
                                .summaryStatistics();

                if (filter.getTransmission() != null) {
                        switch (filter.getTransmission()) {
                                case "Số tự động":
                                        break;
                                case "Số sàn":
                                        break;
                                default:
                                        filter.setTransmission("");
                                        break;
                        }
                } else {
                        filter.setTransmission("");
                }

                if (filter.getFuel() != null) {
                        switch (filter.getFuel()) {
                                case "Xăng":
                                        break;
                                case "Dầu diesel":
                                        break;
                                default:
                                        filter.setFuel("");
                                        break;
                        }
                } else {
                        filter.setFuel("");
                }

                if (filter.getSeatsIn() == null || filter.getSeatsIn().length == 0) {
                        filter.setSeatsIn(new Integer[] { 4, 5, 7 });
                }

                if (filter.getYearOfManufactureBetween() == null || filter.getYearOfManufactureBetween().length != 2) {
                        filter.setYearOfManufactureBetween(new Integer[] { 0, 5000 });
                }

                IntSummaryStatistics tt = IntStream.of(ArrayUtils.toPrimitive(filter.getYearOfManufactureBetween()))
                                .summaryStatistics();

                PagingResponse<CarShortInfoResponse> pagingResponse = PagingResponse
                                .<CarShortInfoResponse>builder()
                                .page(cars.getPageable().getPageNumber() + 1)
                                .size(cars.getSize())
                                .totalPage(cars.getTotalPages())
                                .totalItem(cars.getTotalElements())
                                .contends(listCarInfoResponse)
                                .carBrands(carRepository
                                                .findAllBrandByAddressCityIdAndCarStatus(filter
                                                                .getCity().getId(), CarStatus.ACTIVE, dt.getMin(),
                                                                dt.getMax(), "%" + filter.getTransmission() + "%",
                                                                "%" + filter.getFuel() + "%", filter.getSeatsIn(),
                                                                tt.getMin(), tt.getMax()))
                                .carModels(carRepository
                                                .findAllModelByAddressCityIdAndCarStatus(filter
                                                                .getCity().getId(), CarStatus.ACTIVE, dt.getMin(),
                                                                dt.getMax(), "%" + filter.getTransmission() + "%",
                                                                "%" + filter.getFuel() + "%", filter.getSeatsIn(),
                                                                tt.getMin(), tt.getMax(),
                                                                filter.getBrand_Id()))
                                .build();
                return pagingResponse;
        }

        @Override
        public void updateCar(CarUpdateInfoRequest carInfo) {

                Car car = carRepository.findById(carInfo.getId())
                                .orElseThrow(() -> new IllegalArgumentException("Car not found"));
                Ward ward = wardRepository.findById(carInfo.getWard().getId())
                                .orElseThrow(() -> new IllegalArgumentException("Ward not found"));
                modelMapper.map(carInfo, car);
                car.getCarImages().clear();
                car.getCarImages()
                                .addAll(modelMapper.map(carInfo.getCarImagesUpdate(), new TypeToken<List<CarImage>>() {
                                }.getType()));

                car.getFeatures().clear();
                car.getFeatures()
                                .addAll(modelMapper.map(carInfo.getFeaturesUpdate(), new TypeToken<Set<Feature>>() {
                                }.getType()));

                car.getAddress().setWard(ward);
                car.getAddress().setDistrict(ward.getDistrict());
                car.getAddress().setCity(ward.getDistrict().getCity());
                car.getAddress().setStreet(carInfo.getStreet());
                car.getCarImages().forEach(c -> c.setCar(car));
                carRepository.save(car);
        }

        @Override
        public void deleteCar(Long id) {
                Car car = carRepository.findById(id)
                                .orElseThrow(() -> new IllegalArgumentException("Car not found"));
                switch (car.getStatus()) {
                        case PENDING_APPROVAL:
                                carRepository.delete(car);
                                break;
                        case DENIED:
                                carRepository.delete(car);
                                break;
                        default:
                                throw new IllegalArgumentException("Car deletion is not allowed");

                }
        }

        @Override
        public Object getAllReviewByCarId(Long id, PagingRequest pagingRequest) {
                Pageable pageable = PageRequest.of(pagingRequest.getPage() - 1, pagingRequest.getSize(),
                                Sort.by("reviewDate").descending());
                Page<Review> reviews = reviewRepository.findAllByBook_Car_Id(id, pageable);

                List<ReviewByCarResponse> listReviewByCarResponse = reviews.getContent().stream().map(r -> {
                        ReviewByCarResponse reviewByCarResponse = modelMapper.map(r, ReviewByCarResponse.class);

                        long timeDiff = Math.abs(new Date().getTime() - r.getReviewDate().getTime());
                        long historyTime = TimeUnit.DAYS.convert(timeDiff, TimeUnit.MILLISECONDS);
                        if (historyTime > 30 && historyTime < 365) {
                                reviewByCarResponse.setHistoryTime(historyTime / 30 + " tháng trước");
                        } else if (historyTime <= 30) {
                                reviewByCarResponse.setHistoryTime(historyTime + " ngày trước");
                        } else if (historyTime >= 365) {
                                reviewByCarResponse.setHistoryTime(historyTime / 365 + " năm trước");
                        }

                        return reviewByCarResponse;
                }).collect(Collectors.toList());

                PagingResponse<ReviewByCarResponse> pagingResponse = PagingResponse
                                .<ReviewByCarResponse>builder()
                                .page(reviews.getPageable().getPageNumber() + 1)
                                .size(reviews.getSize())
                                .totalPage(reviews.getTotalPages())
                                .totalItem(reviews.getTotalElements())
                                .contends(listReviewByCarResponse)
                                .totalStarAverage(Double.valueOf(
                                                new DecimalFormat("#0.0").format(listReviewByCarResponse.stream()
                                                                .mapToInt(r -> r.getStarReview()).average()
                                                                .orElse(0.0))))
                                .build();

                return pagingResponse;
        }

}
