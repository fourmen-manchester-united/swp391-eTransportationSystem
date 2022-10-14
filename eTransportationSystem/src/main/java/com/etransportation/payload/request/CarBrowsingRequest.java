package com.etransportation.payload.request;

import com.etransportation.enums.CarStatus;

import lombok.Data;

@Data
public class CarBrowsingRequest {

    private Long id;
    private CarStatus status;

}
