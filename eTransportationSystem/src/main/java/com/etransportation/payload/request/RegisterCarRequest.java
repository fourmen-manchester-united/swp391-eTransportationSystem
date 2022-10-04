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
public class RegisterCarRequest {

    private String licensePlates;
    private CarModel model;
    private int seats;
    private String yearOfManufacture;
    private String fuelConsumption;
    private String fuel;
    private String transmission;
    private String color;
    private double price;
    private String description;
    private List<Feature> features;
    private int saleWeek;
    private int saleMonth;
    private String carRentalTerms;
    private double longitude;
    private double latitude;
    private Date modifiedDate;
    private Date registerDate;
    private Account account;
    private Address address;
    private List<CarImage> carImages;

}