package com.etransportation.payload.request;

import lombok.Data;

@Data
public class RegisterAccountRequest {

    private String username;
    private String name;
    private String password;

}
