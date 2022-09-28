package com.etransportation.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Table;

import com.etransportation.enums.CarStatus;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "car")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Car extends Base {

    private int seats;
    private double price;
    private String fuel;
    private String color;
    private String licensePlates;
    private String description;
    private String fuelConsumption;
    private String transmission;
    private String yearOfManufacture;
    private String carRentalTerms;
    private int saleWeek;
    private int saleMonth;
    private double longitude;
    private double latitude;
    private Date modifiedDate;
    private CarStatus status;

    // relationship

    // private Register registerId;
    // private CarModel modelId;
    // private Address addressId;
    // private List<Book> books = new ArrayList<Book>();
    // private List<Review> reviews = new ArrayList<Review>();
    // private List<CarImage> carImages = new ArrayList<CarImage>();
    // private List<Feature> features = new ArrayList<Feature>();

    // getter and setter

}
