package com.etransportation.payload.response;

import java.util.Date;
import java.util.List;

import com.etransportation.enums.CarStatus;
import com.etransportation.payload.dto.AccountDTO;
import com.etransportation.payload.dto.BookDto;
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
    private String transmission;
    private int yearOfManufacture;
    private int saleWeek;
    private int saleMonth;
    private double longitude;
    private double latitude;
    private String addressInfo;
    private Date registerDate;
    private CarStatus status;
    private AccountDTO account;

    // private List<Review> reviews;
    private int totalBook;
    private Double totalRating;
    private List<CarImageDTO> carImages;
    private List<FeatureDTO> features;
    private List<BookDto> books;

}
