package com.etransportation.payload.request;

import javax.validation.constraints.Min;

import org.hibernate.validator.constraints.Length;

import lombok.Data;

@Data
public class LoginRequest {

    @Length(min = 1, max = 100, message = "Username must be between 1 and 100 characters")
    private String username;

    @Length(min = 1, max = 100, message = "password must be between 1 and 100 characters")
    private String password;

}
