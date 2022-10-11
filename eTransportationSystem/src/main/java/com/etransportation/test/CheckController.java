package com.etransportation.test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

    @Autowired
    public CheckController(AccountRepository accountRepository, AddressRepository addressRepository,
            BookRepository bookRepository, CarBrandRepository carBrandRepository, CarImageRepository carImageRepository,
            CarModelRepository carModelRepository, CarRepository carRepository, CityRepository cityRepository,
            DistrictRepository districtRepository, DrivingLicenseRepository drivingLicenseRepository,
            FeatureRepository featureRepository, NotificationRepository notificationRepository,
            ReviewRepository reviewRepository, RoleRepository roleRepository, VoucherRepository voucherRepository,
            WardRepository wardRepository) {
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
    }

    @GetMapping("/Account")
    public ResponseEntity<?> getAllAccounts() {
        return null;
    }

    @GetMapping("/Address")
    public ResponseEntity<?> getAllAddress() {
        return null;
    }

    @GetMapping("/Book")
    public ResponseEntity<?> getAllBook() {
        return null;
    }

    @GetMapping("/CarBrand")
    public ResponseEntity<?> getAllCarBrand() {
        return null;
    }

    @GetMapping("/CarImage")
    public ResponseEntity<?> getAllCarImage() {
        return null;
    }

    @GetMapping("/CarModel")
    public ResponseEntity<?> getAllCarModel() {
        return null;
    }

    @GetMapping("/Car")
    public ResponseEntity<?> getAllCar() {
        return null;
    }

    @GetMapping("/City")
    public ResponseEntity<?> getAllCity() {
        return null;
    }

    @GetMapping("/District")
    public ResponseEntity<?> getAllDistrict() {
        return null;
    }

    @GetMapping("/DrivingLicense")
    public ResponseEntity<?> getAllDrivingLicense() {
        return null;
    }

    @GetMapping("/Feature")
    public ResponseEntity<?> getAllFeature() {
        return null;
    }

    @GetMapping("/Notification")
    public ResponseEntity<?> getAllNotification() {
        return null;
    }

    @GetMapping("/Review")
    public ResponseEntity<?> getAllReview() {
        return null;
    }

    @GetMapping("/Role")
    public ResponseEntity<?> getAllRole() {
        return null;
    }

    @GetMapping("/Voucher")
    public ResponseEntity<?> getAllVoucher() {
        return null;
    }

    @GetMapping("/Ward")
    public ResponseEntity<?> getAllWard() {
        return null;
    }

}
