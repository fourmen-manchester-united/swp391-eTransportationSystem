package com.etransportation.payload.dto;

import lombok.Data;

@Data
public class CarBrandDTO {

    private Long id;
    private String name;
    private CarModelDTO model;
}
