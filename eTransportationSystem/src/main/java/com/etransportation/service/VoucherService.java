package com.etransportation.service;

import java.util.List;

import com.etransportation.payload.request.PagingRequest;
import com.etransportation.payload.request.VoucherRequest;
import com.etransportation.payload.response.PagingResponse;
import com.etransportation.payload.response.VoucherResponse;

public interface VoucherService {

    public List<VoucherResponse> findAllVoucherActiveByContainCode(String code);

    public void save(VoucherRequest voucherRequest);

    public PagingResponse<VoucherResponse> findAllVoucher(PagingRequest pagingRequest);

}
