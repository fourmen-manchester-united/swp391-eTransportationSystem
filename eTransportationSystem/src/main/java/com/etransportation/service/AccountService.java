package com.etransportation.service;

import java.util.Map;

import com.etransportation.payload.request.AccountBrowsingRequest;
import com.etransportation.payload.request.AccountInfoRequest;
import com.etransportation.payload.request.AccountRegisterRequest;
import com.etransportation.payload.request.ChangePasswordRequest;
import com.etransportation.payload.request.DLicenseBrowsingRequest;
import com.etransportation.payload.request.DriverLicenseInfoRequest;
import com.etransportation.payload.request.LoginRequest;
import com.etransportation.payload.request.PagingRequest;
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

    public Object findAllAccountByContainsUsername(PagingRequest pagingRequest, String username);

    public void accountBlock(AccountBrowsingRequest accountBrowsingRequest);

    public void deleteRole(Long id);

    public void addRole(Long id);

    public void accountDriverLincense(DLicenseBrowsingRequest dLicenseBrowsingRequest);

    public LoginResponse loginOAuth2(Map<String, Object> data);
}
