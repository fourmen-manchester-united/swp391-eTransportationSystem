package com.etransportation.test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.etransportation.repository.CarRepository;
import com.etransportation.repository.CityRepository;
import com.etransportation.repository.DistrictRepository;
import com.etransportation.repository.WardRepository;

@RestController
@RequestMapping("/api/test")
public class TestController {

    @Autowired
    private CarRepository carRepository;

    @Autowired
    private CityRepository cityRepository;

    @Autowired
    private DistrictRepository districtRepository;

    @Autowired
    private WardRepository wardRepository;

    // @GetMapping("/city")
    // public void city() {
    // List<City> city = cityRepository.findAll();
    // for (City ci : city) {
    // ci.setCode(ci.getCode().replaceAll(" ", ""));
    // cityRepository.save(ci);
    // }
    // }

    // @GetMapping("/district")
    // public void district() {
    // List<District> district = districtRepository.findAll();
    // for (District ci : district) {
    // ci.setCode(ci.getCode().replaceAll(" ", ""));
    // districtRepository.save(ci);
    // }
    // }

    // @GetMapping("/ward")
    // public void ward() {
    // List<Ward> ward = wardRepository.findAll();
    // for (Ward ci : ward) {
    // ci.setCode(ci.getCode().replaceAll(" ", ""));
    // wardRepository.save(ci);
    // }
    // }

    // @GetMapping("/city/car/{code}")
    // public ResponseEntity<?> car(@PathVariable String code) {
    // City city = cityRepository.findByCode(code).orElseThrow(() -> new
    // IllegalArgumentException("City not found"));
    // return ResponseEntity.ok(city);
    // }

}
