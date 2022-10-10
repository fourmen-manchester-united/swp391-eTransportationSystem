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
import com.etransportation.model.Address;
import com.etransportation.model.City;
import com.etransportation.payload.response.CarShortInfoResponse;
import com.etransportation.payload.response.CityDetailResponse;
import com.etransportation.payload.response.CityResponse;
import com.etransportation.repository.CityRepository;
import com.etransportation.service.AccountService;
import com.etransportation.service.CityService;

@Service
public class CityServiceImpl implements CityService {

    @Autowired
    private CityRepository cityRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private AccountService accountService;

    @Override
    @Transactional
    public List<CityResponse> findAllCity() {
        // List<City> city = cityRepository.findAll();
        List<City> city = cityRepository.findTop10ByOrderByIdAsc();
        List<CityResponse> listCityResponse = modelMapper.map(city, new TypeToken<List<CityResponse>>() {
        }.getType());
        return listCityResponse;

    }

    @Override
    @Transactional
    public List<CityDetailResponse> findAllCityDetail() {
        List<City> city = cityRepository.findAll();
        List<CityDetailResponse> listCityDetailResponse = modelMapper.map(city,
                new TypeToken<List<CityDetailResponse>>() {
                }.getType());
        return listCityDetailResponse;
    }

    @Override
    @Transactional
    public List<CarShortInfoResponse> findAllCarsByCity(String code) {
        List<CarShortInfoResponse> listCarInfoResponse = new ArrayList<>();
        CarShortInfoResponse carInfoResponse;
        City city = cityRepository.findByCode(code)
                .orElseThrow(() -> new IllegalArgumentException("City \"" + code + "\" not found"));
        if (city.getAddresss().isEmpty() || city.getAddresss() == null) {
            throw new IllegalArgumentException("No Car in this city " + city.getName());
        }

        for (Address address : city.getAddresss()) {
            if (address.getCar().getStatus().equals(CarStatus.ACTIVE)) {
                carInfoResponse = new CarShortInfoResponse();
                carInfoResponse = modelMapper.map(address.getCar(), CarShortInfoResponse.class);
                carInfoResponse.setName(address.getCar().getModel().getName());
                carInfoResponse.setAddressInfo(address.getDistrict().getName() + ", " + address.getCity().getName());
                carInfoResponse
                        .setCarImage(
                                address
                                        .getCar()
                                        .getCarImages()
                                        .get(new Random()
                                                .nextInt(address
                                                        .getCar().getCarImages()
                                                        .size()))
                                        .getImage());
                listCarInfoResponse.add(carInfoResponse);
            }
        }

        if (listCarInfoResponse.isEmpty()) {
            throw new IllegalArgumentException("No Car in this city or car is not active");
        }

        return listCarInfoResponse;
    }

}
