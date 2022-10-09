package com.etransportation.payload.response;

import java.util.List;

import com.etransportation.model.CarImage;
import com.etransportation.model.Feature;
import com.etransportation.payload.dto.AccountDTO;
import com.etransportation.payload.dto.CarImageDTO;
import com.etransportation.payload.dto.FeatureDTO;

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

    private AccountDTO account;

    private String addressInfo;
    // private List<Book> books;
    // private List<Review> reviews;
    private List<CarImageDTO> carImages;
    private List<FeatureDTO> features;
}
