package com.etransportation.service;

import java.util.List;

import com.etransportation.payload.request.CarRegisterRequest;
import com.etransportation.payload.response.CarBrandResponse;

public interface CarService {

    public List<CarBrandResponse> findAllCarBrands();

    public void save(CarRegisterRequest carRegisterRequest);
}
