package com.etransportation.payload.response;

import java.util.List;

import com.etransportation.model.CarImage;
import com.etransportation.model.Feature;

import lombok.Data;

@Data
public class CarShortInfoResponse {

    private Long id;
    private String name;
    private double price;
    private String addressInfo;
    private String carImage;
}
