package com.etransportation.controller;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.etransportation.security.oauth2.GoogleOAuth2UserInfo;
import com.etransportation.security.oauth2.OAuth2UserInfo;

@RestController
public class OAuth2Controller {

    @PostMapping("/oauth2/google")
    public ResponseEntity<?> signInWithGoogle(@RequestBody Map<String, Object> data) {

        OAuth2UserInfo userInfo = new GoogleOAuth2UserInfo(data);

        return ResponseEntity.ok("");
    }

}
