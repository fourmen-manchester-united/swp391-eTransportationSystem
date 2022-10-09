package com.etransportation.payload.response;

import java.util.List;

import com.etransportation.payload.dto.CarModelDTO;

import lombok.Data;

@Data
public class CarBrandResponse {

    private Long id;
    private String name;
    private List<CarModelDTO> carModels;

}
