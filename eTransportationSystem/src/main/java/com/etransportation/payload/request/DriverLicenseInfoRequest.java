package com.etransportation.payload.request;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Data
public class DriverLicenseInfoRequest {

    private Long account_Id;
    private Long numberDrivingLicense;
    private String name;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date birthDate;
    private String imageFront;
}
