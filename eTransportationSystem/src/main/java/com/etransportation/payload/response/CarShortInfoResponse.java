package com.etransportation.payload.response;

import com.etransportation.enums.CarStatus;

import lombok.Data;

@Data
public class CarShortInfoResponse {

    private Long id;
    private String name;
    private double price;
    private String addressInfo;
    private String carImage;
    private CarStatus status;
    private int totalBook;
    private Double totalRating;

}
