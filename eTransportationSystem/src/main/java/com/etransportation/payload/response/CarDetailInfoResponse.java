package com.etransportation.payload.response;

import java.util.List;

import com.etransportation.model.CarImage;
import com.etransportation.model.Feature;

import lombok.Data;

@Data
public class CarDetailInfoResponse {

    private Long id;
    private String name;
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

    private Long accountId;

    private String addressInfo;
    // private List<Book> books;
    // private List<Review> reviews;
    private List<CarImage> carImages;
    private List<Feature> features;
}