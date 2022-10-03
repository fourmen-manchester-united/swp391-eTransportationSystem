package com.etransportation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.etransportation.payload.response.CarBrandResponse;
import com.etransportation.service.CarService;

@RestController
@RequestMapping("/api/car")
public class CarController {

    @Autowired
    private CarService carService;

    @GetMapping("/brand")
    public ResponseEntity<?> getAllCarBrand() {

        List<CarBrandResponse> carBrandResponses = carService.findAllCarBrands();
        return ResponseEntity.ok(carBrandResponses);
    }

}
