package com.etransportation.service;

import com.etransportation.payload.request.LoginRequest;
import com.etransportation.payload.request.RegisterRequest;
import com.etransportation.payload.response.LoginResponse;

public interface AccountService {

    public void register(RegisterRequest registerRequest);

    public LoginResponse login(LoginRequest loginRequest);
}
