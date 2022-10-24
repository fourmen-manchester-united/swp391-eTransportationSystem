package com.etransportation.payload.response;

import java.util.List;

import com.etransportation.enums.CarStatus;
import com.etransportation.payload.dto.CarBrandDTO;
import com.etransportation.payload.dto.FeatureDTO;

import lombok.Data;

@Data
public class CarShortInfoResponse {

    private Long id;
    private String name;
    private double price;
    private String addressInfo;
    private String carImage;
    private CarStatus status;
}
