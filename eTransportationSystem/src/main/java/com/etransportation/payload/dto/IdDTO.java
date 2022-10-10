package com.etransportation.payload.dto;

import javax.validation.constraints.Max;

import lombok.Data;

@Data
public class IdDTO {

    @Max(value = 30, message = "Id must be less than 30")
    private Long id;
}
