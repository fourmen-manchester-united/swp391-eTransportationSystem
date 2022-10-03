package com.etransportation.service.impl;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etransportation.model.Voucher;
import com.etransportation.payload.response.VoucherResponse;
import com.etransportation.repository.VoucherRepository;
import com.etransportation.service.VoucherService;

@Service
public class VoucherServiceImpl implements VoucherService {

    @Autowired
    private VoucherRepository voucherRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<VoucherResponse> findAllVoucher() {
        List<Voucher> voucher = voucherRepository.findAll();
        List<VoucherResponse> listVoucherResponse = modelMapper.map(voucher, new TypeToken<List<VoucherResponse>>() {
        }.getType());
        return listVoucherResponse;
    }

}
