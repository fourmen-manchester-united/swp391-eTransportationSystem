package com.etransportation.payload.request;

import lombok.Data;

@Data
public class ChangePasswordRequest {

    private String oldPassword;
    private String newPassword;
    private String newPasswordValidate;
}