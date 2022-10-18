package com.etransportation.payload.response;

import java.util.Date;
import java.util.Set;

import com.etransportation.enums.AccountGender;
import com.etransportation.enums.AccountStatus;
import com.etransportation.payload.dto.DriverLicenseDTO;
import com.etransportation.payload.dto.RoleDTO;

import lombok.Data;

@Data
public class AccountInfoResponse {

    private Long id;
    private AccountStatus status;
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
