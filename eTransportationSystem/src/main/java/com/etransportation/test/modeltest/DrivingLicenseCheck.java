package com.etransportation.test.modeltest;

import java.util.Date;

import com.etransportation.enums.DrivingLicenseStatus;

import lombok.Data;

@Data
public class DrivingLicenseCheck {

    private Long id;
    private Long numberDrivingLicense;
    private String name;
    private Date birthDate;
    private String imageFront;
    private DrivingLicenseStatus status;

    // relationship

    private IdCheck account;
    private Date createdDate;
    private Date modifiedDate;
    private String createdBy;
    private String modifiedBy;
}
