package com.etransportation.payload.response;

import java.util.Date;
import java.util.Set;

import com.etransportation.enums.AccountGender;
import com.etransportation.payload.dto.RoleDTO;
import com.etransportation.payload.dto.DriverLicenseDTO;

import ch.qos.logback.core.status.Status;
import lombok.Data;

@Data
public class AccountInfoResponse {

    private Long id;
    private String name;
    private String username;
    private AccountGender gender;
    private Date birthDate;
    private String email;
    private String phone;
    private String avatar;
    private String thumnail;
    private Double balance;
    private Set<RoleDTO> roles;
    private Date joinDate;

    private DriverLicenseDTO drivingLicense;

}
