package com.etransportation.payload.response;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CityResponse {

    private Long id;
    private String code;
    private String name;
    private String image;
    private long count;

}
