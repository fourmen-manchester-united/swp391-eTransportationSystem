package com.etransportation.payload.request;

import lombok.Data;

@Data
public class AccountRegisterRequest {

    private String username;
    private String name;
    private String password;

}
