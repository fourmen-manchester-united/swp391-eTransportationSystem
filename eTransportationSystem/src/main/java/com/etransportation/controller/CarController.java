package com.etransportation.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.etransportation.payload.request.CarUpdateInfoRequest;
import com.etransportation.payload.request.CarRegisterRequest;
import com.etransportation.payload.request.PagingRequest;
import com.etransportation.payload.request.filterSearchCar;
import com.etransportation.payload.response.CarBrandResponse;
import com.etransportation.payload.response.CarShortInfoResponse;
import com.etransportation.service.CarService;
import com.etransportation.service.CityService;

@RestController
@RequestMapping("/api/car")
public class CarController {

    @Autowired
    private CarService carService;

    @Autowired
    private CityService cityService;

    @GetMapping("/brand")
    public ResponseEntity<?> getAllCarBrand() {

        List<CarBrandResponse> carBrandResponses = carService.findAllCarBrands();
        return ResponseEntity.ok(carBrandResponses);
    }

    @PostMapping
    public ResponseEntity<?> registerCar(@Valid @RequestBody CarRegisterRequest registerCarRequest, Errors errors) {
        if (errors.hasErrors()) {
            throw new RuntimeException("feature " + errors.getFieldError().getDefaultMessage());
        }

        carService.save(registerCarRequest);
        return ResponseEntity.ok("Register car successfully");
    }

    @GetMapping("details/{id}")
    public ResponseEntity<?> getCarDetails(@PathVariable Long id) {
        return ResponseEntity.ok(carService.findCarDetailInfo(id));
    }

    @GetMapping("/city/{code}")
    public ResponseEntity<?> getAllCarByCityCode(@PathVariable String code, PagingRequest pagingRequest) {
        List<CarShortInfoResponse> carInfoResponse = carService.findAllCarsByCity(code, pagingRequest);
        return ResponseEntity.ok(carInfoResponse);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<?> getAllCarByUserId(@PathVariable Long id) {
        List<CarShortInfoResponse> carInfoResponse = carService.findAllCarByUserId(id);
        return ResponseEntity.ok(carInfoResponse);
    }

    @GetMapping
    public ResponseEntity<?> getAllCarByGuest(PagingRequest pagingRequest) {
        return ResponseEntity.ok(carService.findAllCarByGuest(pagingRequest));
    }

    @PostMapping("/search")
    public ResponseEntity<?> filterCar(@RequestBody filterSearchCar filter, PagingRequest pagingRequest) {
        return ResponseEntity.ok(carService.filterCar(filter, pagingRequest));
    }

    @PutMapping
    public ResponseEntity<?> updateCar(@Valid @RequestBody CarUpdateInfoRequest carInfoRequest, Errors errors) {
        if (errors.hasErrors()) {
            throw new RuntimeException("feature " + errors.getFieldError().getDefaultMessage());
        }
        carService.updateCar(carInfoRequest);
        return ResponseEntity.ok("Update car successfully");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCar(@PathVariable Long id) {
        carService.deleteCar(id);
        return ResponseEntity.ok("delete car successfully");
    }

    @GetMapping("/review/{id}")
    public ResponseEntity<?> getAllReviewByCarId(@PathVariable Long id, PagingRequest pagingRequest) {
        return ResponseEntity.ok(carService.getAllReviewByCarId(id, pagingRequest));
    }
}
