package com.etransportation.payload.request;

import java.util.Date;

import lombok.Data;

@Data
public class DriverLicenseInfoRequest {

    private Long account_Id;
    private Long numberDrivingLicense;
    private String name;
    private Date birthDate;
    private String imageFront;
}
