package com.etransportation.service;

import java.util.List;

import com.etransportation.payload.response.VoucherResponse;

public interface VoucherService {

    public List<VoucherResponse> findAllVoucher();
}
