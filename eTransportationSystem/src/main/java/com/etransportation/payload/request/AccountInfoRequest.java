package com.etransportation.payload.request;

import java.util.Date;

import com.etransportation.enums.AccountGender;

import lombok.Data;

@Data
public class AccountInfoRequest {

    private Long id;
    private String name;
    private AccountGender gender;
    private Date birthDate;
    private String email;
    private String phone;
    private String avatar;
    private String thumnail;

}
