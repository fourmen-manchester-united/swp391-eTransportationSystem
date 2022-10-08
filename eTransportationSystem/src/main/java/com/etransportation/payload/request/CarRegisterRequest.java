package com.etransportation.payload.request;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import com.etransportation.enums.CarStatus;
import com.etransportation.model.Account;
import com.etransportation.model.Address;
import com.etransportation.model.Book;
import com.etransportation.model.CarImage;
import com.etransportation.model.CarModel;
import com.etransportation.model.Feature;
import com.etransportation.model.Review;

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
    private Date registerDate;

    private Long accountId;
    private Long modelId;
    private Long wardId;
    private String street;
    private List<String> listCarImages;
    private List<Long> featuresId;

}