package com.etransportation.payload.request;

import java.util.List;

import com.etransportation.enums.SortType;
import com.etransportation.payload.dto.IdDTO;

import lombok.Data;

@Data
public class SearchAllCarByAddressRequest {

    private IdDTO city;

    private IdDTO district;

    private IdDTO ward;

    private String street;

    private SortType sortType;

    private List<Double> price;
}
