package com.etransportation.service;

import java.util.List;

import com.etransportation.payload.request.VoucherRequest;
import com.etransportation.payload.response.VoucherResponse;

public interface VoucherService {

    public List<VoucherResponse> findAllVoucherActive();

    public void save(VoucherRequest voucherRequest);

    public List<VoucherResponse> findAllVoucher();

}
