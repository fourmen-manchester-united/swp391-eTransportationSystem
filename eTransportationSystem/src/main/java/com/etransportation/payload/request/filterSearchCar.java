package com.etransportation.payload.request;

import java.util.List;

import com.etransportation.enums.FilterType;
import com.etransportation.payload.dto.IdDTO;

import lombok.Data;

@Data
public class filterSearchCar {

    private IdDTO city;

    private IdDTO district;

    private IdDTO ward;

    private String street;

    private FilterType sortPriceType;

    private Double[] priceBetween;

    private Integer[] seatsIn;

    private String fuel;

    private Integer[] yearOfManufactureBetween;

    private String transmission;

    private Long brand_Id;

    private Long[] model_Id_In;

    private Long[] feature_Id_in;
}
