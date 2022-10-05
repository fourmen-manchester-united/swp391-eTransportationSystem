package com.etransportation.service.impl;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etransportation.model.Car;
import com.etransportation.model.CarBrand;
import com.etransportation.model.Feature;
import com.etransportation.payload.request.CarRegisterRequest;
import com.etransportation.payload.response.CarBrandResponse;
import com.etransportation.repository.CarBrandRepository;
import com.etransportation.service.CarService;

@Service
public class CarServiceImpl implements CarService {

    @Autowired
    private CarBrandRepository carBrandRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<CarBrandResponse> findAllCarBrands() {
        List<CarBrand> carBrand = carBrandRepository.findAll();
        List<CarBrandResponse> carBrandResponse = modelMapper.map(carBrand, new TypeToken<List<CarBrandResponse>>() {
        }.getType());
        return carBrandResponse;
    }

    @Override
    public void save(CarRegisterRequest carRegisterRequest) {
        Car car = modelMapper.map(carRegisterRequest, Car.class);

    }

}
