package com.etransportation.payload.response;

import java.util.List;

import com.etransportation.enums.CarStatus;
import com.etransportation.model.Book;
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
    private String yearOfManufacture;
    private int saleWeek;
    private int saleMonth;
    private double longitude;
    private double latitude;
    private String addressInfo;
    private CarStatus status;
    private AccountDTO account;

    // private List<Review> reviews;
    private List<CarImageDTO> carImages;
    private List<FeatureDTO> features;
    private List<BookDto> books;

}
