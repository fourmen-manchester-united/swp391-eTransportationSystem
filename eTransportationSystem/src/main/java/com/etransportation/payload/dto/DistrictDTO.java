package com.etransportation.payload.dto;

import java.util.List;

import lombok.Data;

@Data
public class DistrictDTO {

    private Long id;
    private String code;
    private String name;
    private List<WardDTO> wards;
}
