package com.etransportation.payload.response;

import java.util.List;

import com.etransportation.model.District;

import lombok.Data;

@Data
public class CityDetailResponse {

    private Long id;
    private String code;
    private String name;
    private List<District> districts;
}
