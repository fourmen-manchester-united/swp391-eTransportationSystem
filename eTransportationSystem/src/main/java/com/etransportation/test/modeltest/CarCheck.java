package com.etransportation.test.modeltest;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.etransportation.enums.CarStatus;
import com.etransportation.payload.dto.BookDto;

import lombok.Data;

@Data
public class CarCheck {

  private Long id;
  private int seats;
  private double price;
  private String fuel;
  private String licensePlates;
  private String description;
  private String transmission;
  private String yearOfManufacture;
  private int saleWeek;
  private int saleMonth;
  private double longitude;
  private double latitude;
  private Date modifiedDate;
  private String createdBy;
  private String modifiedBy;
  private Date registerDate;
  private CarStatus status;

  private IdCheck account;
  private IdCheck model;
  private IdCheck address;

  private List<BookDto> books;

  // private List<ReviewCheck> reviews;

  private List<image> carImages;

  private List<FeatureCheck> features;

  // getter and setter

}
