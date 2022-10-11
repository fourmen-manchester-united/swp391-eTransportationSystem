package com.etransportation.test.modeltest;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.etransportation.enums.AccountGender;
import com.etransportation.enums.AccountStatus;

import lombok.Data;

@Data
public class AccountCheck {

    private Long id;
    private String name;
    private String username;
    private String password;
    private AccountGender gender;
    private Date birthDate;
    private String email;
    private String phone;
    private String avatar;
    private String thumnail;
    private Double balance;
    private Date joinDate;
    private Date modifiedDate;
    private String createdBy;
    private String modifiedBy;
    private AccountStatus status;
    private Set<RoleCheck> roles;
    private IdCheck drivingLicense;

}
