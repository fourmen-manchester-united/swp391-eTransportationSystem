package com.etransportation.payload.request;

import com.etransportation.enums.AccountStatus;

import lombok.Data;

@Data
public class AccountBrowsingRequest {

    private Long id;
    private AccountStatus status;
}
