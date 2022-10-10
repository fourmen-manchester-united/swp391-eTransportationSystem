package com.etransportation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.etransportation.payload.request.CarRegisterRequest;
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
    public ResponseEntity<?> registerCar(@RequestBody CarRegisterRequest registerCarRequest) {
        carService.save(registerCarRequest);
        return ResponseEntity.ok("Register car successfully");
    }

    @GetMapping("details/{id}")
    public ResponseEntity<?> getCarDetails(@PathVariable Long id) {
        return ResponseEntity.ok(carService.findCarDetailInfo(id));
    }

    @GetMapping("/city/{code}")
    public ResponseEntity<?> getAllCarByCityCode(@PathVariable String code) {
        List<CarShortInfoResponse> carInfoResponse = cityService.findAllCarsByCity(code);
        return ResponseEntity.ok(carInfoResponse);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<?> getAllCarByUserId(@PathVariable String id) {
        List<CarShortInfoResponse> carInfoResponse = cityService.findAllCarsByCity(id);
        return ResponseEntity.ok(carInfoResponse);
    }

}
