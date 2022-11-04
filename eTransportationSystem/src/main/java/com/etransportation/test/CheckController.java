package com.etransportation.test;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.etransportation.model.Account;
import com.etransportation.model.Address;
import com.etransportation.model.Book;
import com.etransportation.model.Car;
import com.etransportation.model.CarBrand;
import com.etransportation.model.CarModel;
import com.etransportation.model.DrivingLicense;
import com.etransportation.repository.AccountRepository;
import com.etransportation.repository.AddressRepository;
import com.etransportation.repository.BookRepository;
import com.etransportation.repository.CarBrandRepository;
import com.etransportation.repository.CarImageRepository;
import com.etransportation.repository.CarModelRepository;
import com.etransportation.repository.CarRepository;
import com.etransportation.repository.CityRepository;
import com.etransportation.repository.DistrictRepository;
import com.etransportation.repository.DrivingLicenseRepository;
import com.etransportation.repository.FeatureRepository;
import com.etransportation.repository.NotificationRepository;
import com.etransportation.repository.ReviewRepository;
import com.etransportation.repository.RoleRepository;
import com.etransportation.repository.VoucherRepository;
import com.etransportation.repository.WardRepository;
import com.etransportation.test.modeltest.AccountCheck;
import com.etransportation.test.modeltest.AddressCheck;
import com.etransportation.test.modeltest.BookCheck;
import com.etransportation.test.modeltest.CarBrandCheck;
import com.etransportation.test.modeltest.CarCheck;
import com.etransportation.test.modeltest.CarImageCheck;
import com.etransportation.test.modeltest.CarModelCheck;
import com.etransportation.test.modeltest.CityCheck;
import com.etransportation.test.modeltest.DistrictCheck;
import com.etransportation.test.modeltest.DrivingLicenseCheck;
import com.etransportation.test.modeltest.FeatureCheck;
import com.etransportation.test.modeltest.ListStatus;
import com.etransportation.test.modeltest.NotificationCheck;
import com.etransportation.test.modeltest.ReviewCheck;
import com.etransportation.test.modeltest.RoleCheck;
import com.etransportation.test.modeltest.VoucherCheck;
import com.etransportation.test.modeltest.WardCheck;

@RestController
@RequestMapping("/api/check/database")
public class CheckController {

    private final AccountRepository accountRepository;
    private final AddressRepository addressRepository;
    private final BookRepository bookRepository;
    private final CarBrandRepository carBrandRepository;
    private final CarImageRepository carImageRepository;
    private final CarModelRepository carModelRepository;
    private final CarRepository carRepository;
    private final CityRepository cityRepository;
    private final DistrictRepository districtRepository;
    private final DrivingLicenseRepository drivingLicenseRepository;
    private final FeatureRepository featureRepository;
    private final NotificationRepository notificationRepository;
    private final ReviewRepository reviewRepository;
    private final RoleRepository roleRepository;
    private final VoucherRepository voucherRepository;
    private final WardRepository wardRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public CheckController(AccountRepository accountRepository, AddressRepository addressRepository,
            BookRepository bookRepository, CarBrandRepository carBrandRepository, CarImageRepository carImageRepository,
            CarModelRepository carModelRepository, CarRepository carRepository, CityRepository cityRepository,
            DistrictRepository districtRepository, DrivingLicenseRepository drivingLicenseRepository,
            FeatureRepository featureRepository, NotificationRepository notificationRepository,
            ReviewRepository reviewRepository, RoleRepository roleRepository, VoucherRepository voucherRepository,
            WardRepository wardRepository, ModelMapper modelMapper) {
        this.accountRepository = accountRepository;
        this.addressRepository = addressRepository;
        this.bookRepository = bookRepository;
        this.carBrandRepository = carBrandRepository;
        this.carImageRepository = carImageRepository;
        this.carModelRepository = carModelRepository;
        this.carRepository = carRepository;
        this.cityRepository = cityRepository;
        this.districtRepository = districtRepository;
        this.drivingLicenseRepository = drivingLicenseRepository;
        this.featureRepository = featureRepository;
        this.notificationRepository = notificationRepository;
        this.reviewRepository = reviewRepository;
        this.roleRepository = roleRepository;
        this.voucherRepository = voucherRepository;
        this.wardRepository = wardRepository;
        this.modelMapper = modelMapper;
    }

    @GetMapping("/test")
    public ResponseEntity<?> checkTest() {
        Map<String, String[]> map = new HashMap<>();
        map.put("paypal", new String[] { "sb-kk6pm22027434@business.example.com", "3o9^RD7}" });
        map.put("receive", new String[] { "sb-z47src21290005@business.example.com", "0FCkuV<u" });
        map.put("link", new String[] { "https://www.sandbox.paypal.com/mep/dashboard" });

        return ResponseEntity.ok(map);
    }

    // @GetMapping("/Account")
    // public ResponseEntity<?> getAllAccounts() {

    // Account account = accountRepository.findById(12L).orElseGet(() -> null);
    // Address address = addressRepository.findById(113L).orElseGet(() -> null);
    // Book book = bookRepository.findById(31L).orElseGet(() -> null);
    // Car car = carRepository.findById(113L).orElseGet(() -> null);
    // DrivingLicense dr = drivingLicenseRepository.findById(12L).orElseGet(() ->
    // null);
    // CarBrand drr = carBrandRepository.findById(12L).orElseGet(() -> null);
    // CarModel drrr = carModelRepository.findById(12L).orElseGet(() -> null);

    // return ResponseEntity.ok(modelMapper.map(accountRepository.findAll(), new
    // TypeToken<List<AccountCheck>>() {
    // }.getType()));
    // }

    // @GetMapping("/Address")
    // public ResponseEntity<?> getAllAddress() {
    // return ResponseEntity.ok(modelMapper.map(addressRepository.findAll(), new
    // TypeToken<List<AddressCheck>>() {
    // }.getType()));
    // }

    // @GetMapping("/Book")
    // public ResponseEntity<?> getAllBook() {
    // return ResponseEntity.ok(modelMapper.map(bookRepository.findAll(), new
    // TypeToken<List<BookCheck>>() {
    // }.getType()));
    // }

    // @GetMapping("/CarBrand")
    // public ResponseEntity<?> getAllCarBrand() {
    // return ResponseEntity.ok(modelMapper.map(carBrandRepository.findAll(), new
    // TypeToken<List<CarBrandCheck>>() {
    // }.getType()));
    // }

    // @GetMapping("/CarImage")
    // public ResponseEntity<?> getAllCarImage() {
    // return ResponseEntity.ok(modelMapper.map(carImageRepository.findAll(), new
    // TypeToken<List<CarImageCheck>>() {
    // }.getType()));
    // }

    // @GetMapping("/CarModel")
    // public ResponseEntity<?> getAllCarModel() {
    // return ResponseEntity.ok(modelMapper.map(carModelRepository.findAll(), new
    // TypeToken<List<CarModelCheck>>() {
    // }.getType()));
    // }

    // @GetMapping("/Car")
    // public ResponseEntity<?> getAllCar() {
    // return ResponseEntity.ok(modelMapper.map(carRepository.findAll(), new
    // TypeToken<List<CarCheck>>() {
    // }.getType()));
    // }

    // @GetMapping("/City")
    // public ResponseEntity<?> getAllCity() {
    // return ResponseEntity.ok(modelMapper.map(cityRepository.findAll(), new
    // TypeToken<List<CityCheck>>() {
    // }.getType()));
    // }

    // @GetMapping("/District")
    // public ResponseEntity<?> getAllDistrict() {
    // return ResponseEntity.ok(modelMapper.map(districtRepository.findAll(), new
    // TypeToken<List<DistrictCheck>>() {
    // }.getType()));
    // }

    // @GetMapping("/DrivingLicense")
    // public ResponseEntity<?> getAllDrivingLicense() {
    // return ResponseEntity
    // .ok(modelMapper.map(drivingLicenseRepository.findAll(), new
    // TypeToken<List<DrivingLicenseCheck>>() {
    // }.getType()));
    // }

    // @GetMapping("/Feature")
    // public ResponseEntity<?> getAllFeature() {
    // return ResponseEntity.ok(modelMapper.map(featureRepository.findAll(), new
    // TypeToken<List<FeatureCheck>>() {
    // }.getType()));
    // }

    // @GetMapping("/Notification")
    // public ResponseEntity<?> getAllNotification() {
    // return ResponseEntity
    // .ok(modelMapper.map(notificationRepository.findAll(), new
    // TypeToken<List<NotificationCheck>>() {
    // }.getType()));
    // }

    // @GetMapping("/Review")
    // public ResponseEntity<?> getAllReview() {
    // return ResponseEntity.ok(modelMapper.map(reviewRepository.findAll(), new
    // TypeToken<List<ReviewCheck>>() {
    // }.getType()));
    // }

    // @GetMapping("/Role")
    // public ResponseEntity<?> getAllRole() {
    // return ResponseEntity.ok(modelMapper.map(roleRepository.findAll(), new
    // TypeToken<List<RoleCheck>>() {
    // }.getType()));
    // }

    // @GetMapping("/Voucher")
    // public ResponseEntity<?> getAllVoucher() {
    // return ResponseEntity.ok(modelMapper.map(voucherRepository.findAll(), new
    // TypeToken<List<VoucherCheck>>() {
    // }.getType()));
    // }

    // @GetMapping("/Ward")
    // public ResponseEntity<?> getAllWard() {
    // return ResponseEntity.ok(modelMapper.map(wardRepository.findAll(), new
    // TypeToken<List<WardCheck>>() {
    // }.getType()));
    // }

    // @GetMapping("/EnumStatus")
    // public ResponseEntity<?> getAllEnumStatus() {
    // ListStatus listStatus = new ListStatus();
    // return ResponseEntity.ok(listStatus);
    // }

}
