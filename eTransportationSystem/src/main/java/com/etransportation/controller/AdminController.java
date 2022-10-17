package com.etransportation.controller;

import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.etransportation.payload.request.AccountBrowsingRequest;
import com.etransportation.payload.request.CarBrowsingRequest;
import com.etransportation.payload.request.PagingRequest;
import com.etransportation.payload.request.VoucherRequest;
import com.etransportation.payload.response.PagingResponse;
import com.etransportation.payload.response.VoucherResponse;
import com.etransportation.service.AccountService;
import com.etransportation.service.CarService;
import com.etransportation.service.VoucherService;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private AccountService accountService;

    @Autowired
    private CarService carService;

    @Autowired
    private VoucherService voucherService;

    @GetMapping("/account")
    public ResponseEntity<?> getAllAccount(PagingRequest pagingRequest) {
        return ResponseEntity.ok(accountService.findAllAccount(pagingRequest));
    }

    @GetMapping("/car")
    public ResponseEntity<?> getAllCar(PagingRequest pagingRequest) {
        return ResponseEntity.ok(carService.findAllCar(pagingRequest));
    }

    @PostMapping("/voucher")
    public ResponseEntity<?> saveVoucher(@Valid @RequestBody VoucherRequest voucherRequest, Errors errors) {
        if (errors.hasErrors()) {
            List<String> errorList = errors.getAllErrors().stream().map(ObjectError::getDefaultMessage)
                    .collect(Collectors.toList());
            return ResponseEntity.badRequest().body(errorList);
        }
        voucherService.save(voucherRequest);
        return ResponseEntity.ok("successfully");
    }

    @GetMapping("/voucher")
    public ResponseEntity<?> getAllVoucher(PagingRequest pagingRequest) {
        PagingResponse<VoucherResponse> voucherResponse = voucherService.findAllVoucher(pagingRequest);
        return ResponseEntity.ok(voucherResponse);
    }

    @PutMapping("/browsing/car")
    public ResponseEntity<?> carBrowsing(@RequestBody CarBrowsingRequest carBrowsingRequest) {
        carService.carBrowsing(carBrowsingRequest);
        return ResponseEntity.ok("car browsing successful");
    }

    @PutMapping("/block/account")
    public ResponseEntity<?> accountBrowsing(@RequestBody AccountBrowsingRequest accountBrowsingRequest) {
        accountService.accountBrowsing(accountBrowsingRequest);
        return ResponseEntity.ok("account browsing successful");
    }

}
