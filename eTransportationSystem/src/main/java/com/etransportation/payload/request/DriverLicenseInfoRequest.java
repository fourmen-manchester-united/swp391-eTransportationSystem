package com.etransportation.payload.request;

import java.util.Date;

import com.etransportation.enums.DrivingLicenseStatus;

import lombok.Data;

@Data
public class DriverLicenseInfoRequest {

    private Long accountId;
    private Long numberDrivingLicense;
    private String name;
    private Date birthDate;
    private String imageFront;
}
