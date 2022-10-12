package com.etransportation.service.impl;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.etransportation.model.City;
import com.etransportation.payload.response.CityDetailResponse;
import com.etransportation.payload.response.CityResponse;
import com.etransportation.repository.AddressRepository;
import com.etransportation.repository.CarRepository;
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

    @Autowired
    private CarRepository carRepository;

    @Autowired
    private AddressRepository addressRepository;

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

}
