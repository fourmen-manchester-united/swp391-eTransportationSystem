package com.etransportation.service;

import java.util.List;

import com.etransportation.payload.request.CarRegisterRequest;
import com.etransportation.payload.response.CarBrandResponse;
import com.etransportation.payload.response.CarDetailInfoResponse;
import com.etransportation.payload.response.CarShortInfoResponse;

public interface CarService {

    public List<CarBrandResponse> findAllCarBrands();

    public void save(CarRegisterRequest carRegisterRequest);

    public CarDetailInfoResponse findCarDetailInfo(Long carId);

    public List<CarShortInfoResponse> findAllCarByUserId(Long id);

    public List<CarShortInfoResponse> findAllCar();
}
