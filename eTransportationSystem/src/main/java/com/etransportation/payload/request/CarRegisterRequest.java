package com.etransportation.payload.request;

import java.util.List;
import java.util.Set;

import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import com.etransportation.payload.dto.CarImageDTO;
import com.etransportation.payload.dto.IdDTO;

import lombok.Data;

@Data
public class CarRegisterRequest {

    private int seats;
    private double price;
    private String fuel;
    private String licensePlates;
    private String description;
    private String transmission;
    private int yearOfManufacture;
    private int saleWeek;
    private int saleMonth;
    private double longitude;
    private double latitude;

    private IdDTO account;
    private IdDTO model;
    private IdDTO ward;
    private String street;

    @Size(min = 1, max = 5, message = "Car must have at least 1 image and at most 5 images")
    @NotEmpty(message = "Car must have at least one image")
    private List<@Valid CarImageDTO> carImages;

    private Set<@Valid IdDTO> features;

}