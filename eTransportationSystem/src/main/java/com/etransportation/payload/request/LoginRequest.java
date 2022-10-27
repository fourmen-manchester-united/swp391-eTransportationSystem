package com.etransportation.payload.request;

import javax.validation.constraints.NotEmpty;

import org.hibernate.validator.constraints.Length;

import lombok.Data;

@Data
public class LoginRequest {

    @NotEmpty(message = "Username not be empty")
    @Length(min = 1, max = 100, message = "Username must be between 1 and 100 characters")
    private String username;

    @NotEmpty(message = "Password must not be empty")
    @Length(min = 1, max = 100, message = "password must be between 1 and 100 characters")
    private String password;

}
