package com.etransportation.controller;

import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.etransportation.payload.request.PagingRequest;
import com.etransportation.payload.request.VoucherRequest;
import com.etransportation.payload.response.AccountInfoResponse;
import com.etransportation.payload.response.CarShortInfoResponse;
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
        return ResponseEntity.ok("update successfully");
    }

    @GetMapping("/voucher")
    public ResponseEntity<?> getAllVoucher(PagingRequest pagingRequest) {
        PagingResponse<VoucherResponse> voucherResponse = voucherService.findAllVoucher(pagingRequest);
        return ResponseEntity.ok(voucherResponse);
    }

}
