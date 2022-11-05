package com.etransportation.payload.dto;

import lombok.Data;

@Data
public class CarDTO {

    private Long id;
    private String name;
    private Double price;
    private String addressInfo;
    private String description;
    private String carImage;
    private Double totalRating;

}
