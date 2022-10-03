package com.etransportation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.etransportation.payload.response.FeatureResponse;
import com.etransportation.service.FeatureService;

@RestController
@RequestMapping("/api/feature")
public class FeatureController {

    @Autowired
    private FeatureService featureService;

    @GetMapping
    public ResponseEntity<?> getAllFeatures() {
        List<FeatureResponse> features = featureService.findAllFeatures();
        return ResponseEntity.ok(features);
    }
}
