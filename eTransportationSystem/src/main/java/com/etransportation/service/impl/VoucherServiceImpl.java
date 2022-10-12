package com.etransportation.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.etransportation.enums.VoucherStatus;
import com.etransportation.model.Voucher;
import com.etransportation.payload.request.VoucherRequest;
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
    @Transactional
    public List<VoucherResponse> findAllVoucher() {

        List<Voucher> voucher = voucherRepository.findAllByStatusAndEndDateGreaterThan(VoucherStatus.ACTIVE,
                new Date());
        List<VoucherResponse> listVoucherResponse = modelMapper.map(voucher, new TypeToken<List<VoucherResponse>>() {
        }.getType());

        return listVoucherResponse;
    }

    @Override
    @Transactional
    public void save(VoucherRequest voucherRequest) {
        Voucher voucher = modelMapper.map(voucherRequest, Voucher.class);
        voucher.setImage("https://n1-cstg.mioto.vn/g/2018/03/17/16/52.jpg");
        voucher.setStatus(VoucherStatus.ACTIVE);
        voucherRepository.save(voucher);
    }

}
