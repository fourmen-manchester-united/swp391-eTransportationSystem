package com.etransportation.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etransportation.enums.CarStatus;
import com.etransportation.model.Address;
import com.etransportation.model.City;
import com.etransportation.payload.response.CarInfoResponse;
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
    public List<CityResponse> findAllCity() {
        // List<City> city = cityRepository.findAll();
        List<City> city = cityRepository.findTop10ByOrderByIdAsc();
        List<CityResponse> listCityResponse = modelMapper.map(city, new TypeToken<List<CityResponse>>() {
        }.getType());
        return listCityResponse;

    }

    @Override
    public List<CityDetailResponse> findAllCityDetail() {
        List<City> city = cityRepository.findAll();
        List<CityDetailResponse> listCityDetailResponse = modelMapper.map(city,
                new TypeToken<List<CityDetailResponse>>() {
                }.getType());
        return listCityDetailResponse;
    }

    @Override
    public List<CarInfoResponse> findAllCarsByCity(String code) {
        List<CarInfoResponse> listCarInfoResponse = new ArrayList<>();
        CarInfoResponse carInfoResponse;
        City city = cityRepository.findByCode(code).orElseThrow(() -> new IllegalArgumentException("City not found"));
        if (city.getAddresss().isEmpty() || city.getAddresss() == null) {
            throw new IllegalArgumentException("No Car in this city");
        }

        for (Address address : city.getAddresss()) {
            if (address.getCar().getStatus().equals(CarStatus.ACTIVE)) {
                carInfoResponse = new CarInfoResponse();
                carInfoResponse = modelMapper.map(address.getCar(), CarInfoResponse.class);
                carInfoResponse.setName(address.getCar().getModel().getName());
                carInfoResponse.setAddressInfo(address.getDistrict().getName() + ", " + address.getCity().getName());
                carInfoResponse.setAccountInfo(accountService.findAccountById(address.getCar().getAccount().getId()));
                listCarInfoResponse.add(carInfoResponse);
            }
        }

        return listCarInfoResponse;
    }

}
