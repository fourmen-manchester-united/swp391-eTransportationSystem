package com.etransportation.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import com.etransportation.enums.CarStatus;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "car")
@Data
@EqualsAndHashCode(callSuper = false)
public class Car extends Base {

    private int seats;
    private double price;

    @Column(columnDefinition = "nvarchar(30)")
    private String fuel;

    @Column(columnDefinition = "nvarchar(30)")
    private String color;

    @Column(columnDefinition = "varchar(15)")
    private String licensePlates;

    @Column(columnDefinition = "nvarchar(255)")
    private String description;

    @Column(columnDefinition = "nvarchar(20)")
    private String fuelConsumption;

    @Column(columnDefinition = "nvarchar(50)")
    private String transmission;

    @Column(columnDefinition = "nvarchar(10)")
    private String yearOfManufacture;

    @Column(columnDefinition = "nvarchar(255)")
    private String carRentalTerms;

    private int saleWeek;
    private int saleMonth;
    private double longitude;
    private double latitude;
    private Date modifiedDate;
    private Date registerDate;

    @Column(columnDefinition = "varchar(20)")
    @Enumerated(EnumType.STRING)
    private CarStatus status;

    // relationship

    @ManyToOne
    @JoinColumn(name = "account_supplier_id", nullable = false)
    private Account account;

    @ManyToOne
    @JoinColumn(name = "model_id", nullable = false)
    private CarModel model;

    @OneToOne
    @JoinColumn(name = "id", referencedColumnName = "id")
    @MapsId
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
