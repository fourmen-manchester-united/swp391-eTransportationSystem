package com.etransportation.payload.dto;

import javax.validation.constraints.NotEmpty;

import org.hibernate.validator.constraints.Length;

import lombok.Data;

@Data
public class CarImageDTO {

    @Length(min = 5)
    @NotEmpty(message = "Image is required")
    private String image;
}
