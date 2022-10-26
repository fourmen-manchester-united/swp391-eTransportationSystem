package com.etransportation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.etransportation.payload.response.VoucherResponse;
import com.etransportation.service.VoucherService;

@RestController
@RequestMapping("/api/voucher")
public class VoucherController {

    @Autowired
    private VoucherService voucherService;

    @GetMapping
    public ResponseEntity<?> getAllVoucherByContainsCode(
            @RequestParam(required = false, defaultValue = "") String code) {
        List<VoucherResponse> listVoucherResponse = voucherService.findAllVoucherActiveByContainCode(code);
        return new ResponseEntity<>(listVoucherResponse, HttpStatus.OK);
    }

}
