package com.etransportation.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.etransportation.payload.request.LoginRequest;
import com.etransportation.payload.request.RegisterRequest;
import com.etransportation.payload.response.LoginResponse;
import com.etransportation.service.AccountService;

@RestController("/api/auth")
public class AuthController {

    @Autowired
    private AccountService accountService;

    @PostMapping("/signin")
    public ResponseEntity<?> signin(@RequestBody LoginRequest loginRequest) {
        LoginResponse loginResponse = accountService.login(loginRequest);
        return ResponseEntity.ok(loginResponse);
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody RegisterRequest registerRequest) {
        accountService.register(registerRequest);
        // return ResponseEntity.ok().body("Register successfully");
        return ResponseEntity.ok("Register successfully");
        // return new ResponseEntity<>("Register successfully", HttpStatus.OK);
    }

}
