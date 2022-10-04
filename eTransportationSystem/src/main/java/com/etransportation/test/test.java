package com.etransportation.test;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.etransportation.enums.CarStatus;
import com.etransportation.model.Account;
import com.etransportation.model.Car;
import com.etransportation.model.City;
import com.etransportation.model.District;
import com.etransportation.model.Ward;
import com.etransportation.repository.CarRepository;
import com.etransportation.repository.CityRepository;
import com.etransportation.repository.DistrictRepository;
import com.etransportation.repository.WardRepository;

@RestController
@RequestMapping("/api/test")
public class test {

    @Autowired
    private CarRepository carRepository;

    @Autowired
    private CityRepository cityRepository;

    @Autowired
    private DistrictRepository districtRepository;

    @Autowired
    private WardRepository wardRepository;

    @GetMapping("/city")
    public void city() {
        List<City> city = cityRepository.findAll();
        for (City ci : city) {
            ci.setCode(ci.getCode().replaceAll(" ", ""));
            cityRepository.save(ci);
        }
    }

    @GetMapping("/district")
    public void district() {
        List<District> district = districtRepository.findAll();
        for (District ci : district) {
            ci.setCode(ci.getCode().replaceAll(" ", ""));
            districtRepository.save(ci);
        }
    }

    @GetMapping("/ward")
    public void ward() {
        List<Ward> ward = wardRepository.findAll();
        for (Ward ci : ward) {
            ci.setCode(ci.getCode().replaceAll(" ", ""));
            wardRepository.save(ci);
        }
    }

    // @GetMapping("/caradd")
    // public void caradd() {
    // Car car = new Car();
    // car.setFuel("fuuuuuuuu");
    // car.setStatus(CarStatus.ACTIVE);

    // car.setAccount(new Account(null, null, null, null, null, null, null, null,
    // null, null, null, null, null, null,
    // null, null));

    // }

}
