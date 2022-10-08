package com.etransportation.payload.response;

import java.util.Date;
import java.util.Set;

import com.etransportation.enums.AccountGender;
import com.etransportation.model.Role;

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
    private Set<Role> roles;
    private Date joinDate;

}
