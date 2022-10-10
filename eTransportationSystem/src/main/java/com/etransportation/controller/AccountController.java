package com.etransportation.controller;

import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.etransportation.payload.request.AccountInfoRequest;
import com.etransportation.payload.request.AccountRegisterRequest;
import com.etransportation.payload.request.ChangePasswordRequest;
import com.etransportation.payload.request.DriverLicenseInfoRequest;
import com.etransportation.payload.request.LoginRequest;
import com.etransportation.payload.response.AccountInfoResponse;
import com.etransportation.payload.response.DriverLicenseInfoResponse;
import com.etransportation.payload.response.LoginResponse;
import com.etransportation.service.AccountService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/account")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @PostMapping("/signin")
    public ResponseEntity<?> signin(@Valid @RequestBody LoginRequest loginRequest, Errors errors) {
        if (errors.hasErrors()) {
            List<String> errorList = errors.getAllErrors().stream().map(ObjectError::getDefaultMessage)
                    .collect(Collectors.toList());
            return ResponseEntity.badRequest().body(errorList);
        }
        LoginResponse loginResponse = accountService.login(loginRequest);
        return ResponseEntity.ok(loginResponse);
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody AccountRegisterRequest registerRequest) {
        accountService.register(registerRequest);
        // return ResponseEntity.ok().body("Register successfully");
        return ResponseEntity.ok("Register successfully");
        // return new ResponseEntity<>("Register successfully", HttpStatus.OK);
    }

    @PutMapping("/password")
    public ResponseEntity<?> changePassword(@RequestBody ChangePasswordRequest changePasswordRequest) {
        if (changePasswordRequest.getId() == null) {
            throw new IllegalArgumentException("Error: Id is null!");
        }
        accountService.changePassword(changePasswordRequest);
        return ResponseEntity.ok("Change Password successfully");
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getInfoAccountById(@PathVariable Long id) {
        AccountInfoResponse accountResponse = accountService.findAccountById(id);
        return ResponseEntity.ok(accountResponse);
    }

    @PutMapping
    public ResponseEntity<?> updateAccount(@Valid @RequestBody AccountInfoRequest accountInfoRequest, Errors errors) {
        if (errors.hasErrors()) {
            throw new IllegalArgumentException(errors.getFieldError().getDefaultMessage());
        }

        if (accountInfoRequest.getId() == null) {
            throw new IllegalArgumentException("Id is null!");
        }
        accountService.updateInfoAccount(accountInfoRequest);
        return ResponseEntity.ok("Update Account successfully");
    }

    @GetMapping("/driver/{id}")
    public ResponseEntity<?> getDriverLicenseInfo(@PathVariable Long id) {
        DriverLicenseInfoResponse getDriverLicense = accountService.findAccountDriverLicenseInfo(id);
        return ResponseEntity.ok(getDriverLicense);
    }

    @PostMapping("/driver")
    public ResponseEntity<?> updateDriverLicenseInfo(@RequestBody DriverLicenseInfoRequest driverLicenseInfoRequest) {
        if (driverLicenseInfoRequest.getAccount_Id() == null) {
            throw new IllegalArgumentException("account Id is null!");
        }
        accountService.updateDriverLicenseInfo(driverLicenseInfoRequest);
        return ResponseEntity.ok("update driver license info successfully");
    }

}
