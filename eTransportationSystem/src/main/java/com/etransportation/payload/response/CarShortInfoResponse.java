package com.etransportation.payload.response;

import lombok.Data;

@Data
public class CarShortInfoResponse {

    private Long id;
    private String name;
    private double price;
    private String addressInfo;
    private String carImage;
}
