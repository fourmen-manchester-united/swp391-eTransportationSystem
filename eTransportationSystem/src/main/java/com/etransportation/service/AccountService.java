package com.etransportation.service;

import com.etransportation.payload.request.ChangePasswordRequest;
import com.etransportation.payload.request.LoginRequest;
import com.etransportation.payload.request.AccountRegisterRequest;
import com.etransportation.payload.response.AccountResponse;
import com.etransportation.payload.response.LoginResponse;

public interface AccountService {

    public void register(AccountRegisterRequest registerRequest);

    public LoginResponse login(LoginRequest loginRequest);

    public void changePassword(ChangePasswordRequest changePasswordRequest);

    public AccountResponse findAccountById(Long id);

}
