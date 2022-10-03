package com.etransportation.service;

import java.util.List;

import com.etransportation.payload.response.CarBrandResponse;

public interface CarService {

    public List<CarBrandResponse> findAllCarBrands();
}
