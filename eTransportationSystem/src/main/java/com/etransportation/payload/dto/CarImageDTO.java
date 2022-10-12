package com.etransportation.payload.dto;

import org.hibernate.validator.constraints.Length;

import lombok.Data;

@Data
public class CarImageDTO {

    @Length(min = 5)
    private String image;
}
