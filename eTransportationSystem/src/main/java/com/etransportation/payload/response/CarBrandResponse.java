package com.etransportation.payload.response;

import java.util.List;

import com.etransportation.model.CarModel;

import lombok.Data;

@Data
public class CarBrandResponse {

    private Long id;
    private String name;
    private List<CarModel> carModels;

}
