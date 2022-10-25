package com.etransportation.payload.request;

import com.etransportation.payload.dto.IdDTO;

import lombok.Data;

@Data
public class SearchAllCarByAddressRequest {

    private IdDTO city;

    private IdDTO district;

    private IdDTO ward;

    private String street;

}
