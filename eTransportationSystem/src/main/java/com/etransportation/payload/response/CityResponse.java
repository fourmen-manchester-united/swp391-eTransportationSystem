package com.etransportation.payload.response;

import lombok.Data;

@Data
public class CityResponse {

    private Long id;
    private String code;
    private String name;
    private String image;
}
