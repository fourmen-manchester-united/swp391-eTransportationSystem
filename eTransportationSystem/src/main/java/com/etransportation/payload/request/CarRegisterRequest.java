package com.etransportation.payload.request;

import java.util.Date;
import java.util.List;

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
    private String fuelConsumption;
    private String transmission;
    private String yearOfManufacture;
    private int saleWeek;
    private int saleMonth;
    private double longitude;
    private double latitude;

    private IdDTO account;
    private IdDTO model;
    private IdDTO ward;
    private String street;
    private List<CarImageDTO> carImages;
    private List<IdDTO> features;

    // features carImages

}