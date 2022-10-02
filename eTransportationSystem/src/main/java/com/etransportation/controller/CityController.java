package com.etransportation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.etransportation.payload.response.CityResponse;
import com.etransportation.service.CityService;

@RestController
@RequestMapping("/api/city")
public class CityController {

    @Autowired
    private CityService cityService;

    @GetMapping
    public ResponseEntity<?> getAllCities() {

        List<CityResponse> listCityResponse = cityService.getListCity();
        return new ResponseEntity<>(listCityResponse, HttpStatus.OK);
    }

}