package com.etransportation.payload.request;

import com.etransportation.enums.DrivingLicenseStatus;

import lombok.Data;

@Data
public class DLicenseBrowsingRequest {

    private Long account_Id;
    private DrivingLicenseStatus status;
}
