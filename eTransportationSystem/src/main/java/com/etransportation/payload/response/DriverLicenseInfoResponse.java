package com.etransportation.payload.response;

import java.util.Date;

import com.etransportation.enums.DrivingLicenseStatus;

import lombok.Data;

@Data
public class DriverLicenseInfoResponse {

    private Long numberDrivingLicense;
    private String name;
    private Date birthDate;
    private String imageFront;
    private DrivingLicenseStatus status;
}
