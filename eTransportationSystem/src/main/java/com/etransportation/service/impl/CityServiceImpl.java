package com.etransportation.service.impl;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etransportation.model.City;
import com.etransportation.payload.response.CityDetailResponse;
import com.etransportation.payload.response.CityResponse;
import com.etransportation.repository.CityRepository;
import com.etransportation.service.CityService;

@Service
public class CityServiceImpl implements CityService {

    @Autowired
    private CityRepository cityRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<CityResponse> findAllCity() {
        List<City> city = cityRepository.findAll();
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

}
