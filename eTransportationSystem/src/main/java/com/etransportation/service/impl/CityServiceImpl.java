package com.etransportation.service.impl;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.etransportation.enums.CarStatus;
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
    @SuppressWarnings("unchecked")
    public List<CityResponse> findAllCityExistCar() {
        Pageable pageable = PageRequest.of(0, 18);
        List<CityResponse> findAllByCarStatus = (List<CityResponse>) cityRepository
                .findAllByExistCarStatus(CarStatus.ACTIVE, pageable);
        return findAllByCarStatus;

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
