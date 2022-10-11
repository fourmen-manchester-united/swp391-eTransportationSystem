package com.etransportation.payload.dto;

import com.etransportation.enums.DrivingLicenseStatus;

import lombok.Data;

@Data
public class DriverLicenseDTO {

    private Long numberDrivingLicense;
    private DrivingLicenseStatus status;
}
