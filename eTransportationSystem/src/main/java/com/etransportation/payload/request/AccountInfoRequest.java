package com.etransportation.payload.request;

import java.util.Date;

import javax.validation.constraints.Email;

import com.etransportation.enums.AccountGender;
import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Data
public class AccountInfoRequest {

    private Long id;
    private String name;
    private AccountGender gender;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date birthDate;

    // @Email(message = "Email not valid")
    private String email;

    private String phone;
    private String avatar;
    private String thumnail;

}
