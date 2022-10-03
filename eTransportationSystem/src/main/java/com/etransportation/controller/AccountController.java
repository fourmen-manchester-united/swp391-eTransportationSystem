package com.etransportation.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.etransportation.payload.request.ChangePasswordRequest;
import com.etransportation.payload.request.LoginRequest;
import com.etransportation.payload.request.RegisterRequest;
import com.etransportation.payload.response.LoginResponse;
import com.etransportation.service.AccountService;

@RestController
@RequestMapping("/api/account")
public class AccountController {

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

    @PutMapping("/password")
    public ResponseEntity<?> changePassword(@RequestBody ChangePasswordRequest changePasswordRequest) {
        accountService.changePassword(changePasswordRequest);
        return ResponseEntity.ok("Change Password successfully");
    }

}
