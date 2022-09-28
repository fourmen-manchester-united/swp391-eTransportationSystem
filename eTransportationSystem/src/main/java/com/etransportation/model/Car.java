package com.etransportation.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
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
    private Date registerDate;
    private CarStatus status;

    // relationship

    @ManyToOne
    @JoinColumn(name = "account_supplier_id")
    private Account account;

    @ManyToOne
    @JoinColumn(name = "model_id")
    private CarModel model;

    @OneToOne(mappedBy = "car")
    // @JoinColumn(name = "address_id", referencedColumnName = "id")
    private Address address;

    @OneToMany(mappedBy = "car")
    private List<Book> books = new ArrayList<Book>();

    @OneToMany(mappedBy = "car")
    private List<Review> reviews = new ArrayList<Review>();

    @OneToMany(mappedBy = "car")
    private List<CarImage> carImages = new ArrayList<CarImage>();

    @ManyToMany
    @JoinTable(name = "car_feature", joinColumns = @JoinColumn(name = "car_id"), inverseJoinColumns = @JoinColumn(name = "feature_id"))
    private List<Feature> features = new ArrayList<Feature>();

    // getter and setter

}
