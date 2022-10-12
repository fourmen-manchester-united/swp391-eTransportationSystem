package com.etransportation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.etransportation.payload.request.AccountInfoRequest;
import com.etransportation.payload.request.VoucherRequest;
import com.etransportation.payload.response.CarShortInfoResponse;
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
    public ResponseEntity<?> getAllAccount() {
        List<AccountInfoRequest> accountInfoRequests = accountService.findAllAccount();
        return ResponseEntity.ok(accountInfoRequests);
    }

    @GetMapping("/car")
    public ResponseEntity<?> getAllCar() {
        List<CarShortInfoResponse> carShortInfoResponses = carService.findAllCar();
        return ResponseEntity.ok(carShortInfoResponses);
    }

    @PostMapping("/voucher")
    public ResponseEntity<?> saveVoucher(VoucherRequest voucherRequest) {
        voucherService.save(voucherRequest);
        return ResponseEntity.ok("update successfully");
    }

}
