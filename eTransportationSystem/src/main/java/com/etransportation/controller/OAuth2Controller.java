package com.etransportation.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.etransportation.service.AccountService;

@RestController
public class OAuth2Controller {

    @Autowired
    private AccountService accountService;

    @PostMapping("/api/oauth2")
    public ResponseEntity<?> signInWithGoogle(@RequestBody Map<String, Object> data) {
        return ResponseEntity.ok(accountService.loginOAuth2(data));
    }

}
