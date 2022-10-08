package com.etransportation.service;

import com.etransportation.payload.request.ChangePasswordRequest;
import com.etransportation.payload.request.DriverLicenseInfoRequest;
import com.etransportation.payload.request.LoginRequest;
import com.etransportation.payload.request.AccountInfoRequest;
import com.etransportation.payload.request.AccountRegisterRequest;
import com.etransportation.payload.response.AccountInfoResponse;
import com.etransportation.payload.response.DriverLicenseInfoResponse;
import com.etransportation.payload.response.LoginResponse;

public interface AccountService {

    public void register(AccountRegisterRequest registerRequest);

    public LoginResponse login(LoginRequest loginRequest);

    public void changePassword(ChangePasswordRequest changePasswordRequest);

    public AccountInfoResponse findAccountById(Long id);

    public void updateInfoAccount(AccountInfoRequest accountInfoRequest);

    public void updateDriverLicenseInfo(DriverLicenseInfoRequest driverLicenseInfoRequest);

    public DriverLicenseInfoResponse findAccountDriverLicenseInfo(Long accountId);

}
