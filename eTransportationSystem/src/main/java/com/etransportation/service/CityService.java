package com.etransportation.service;

import java.util.List;

import com.etransportation.payload.response.CityDetailResponse;
import com.etransportation.payload.response.CityResponse;

public interface CityService {

    public List<CityResponse> findAllCity();

    public List<CityDetailResponse> findAllCityDetail();
}
