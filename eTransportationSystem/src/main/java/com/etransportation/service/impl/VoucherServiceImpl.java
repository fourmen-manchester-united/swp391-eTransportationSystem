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
        List<VoucherResponse> listVoucherResponse = new ArrayList<>();
        for (Voucher voucher2 : voucher) {
            if (voucher2.getStartDate() == null || voucher2.getEndDate() == null) {
                voucher2.setStatus(VoucherStatus.EXPIRED);
                voucherRepository.save(voucher2);
            } else {
                if (voucher2.getEndDate().after(new Date()) || voucher2.getEndDate().equals(new Date())) {
                    listVoucherResponse.add(modelMapper.map(voucher2, VoucherResponse.class));
                } else {
                    voucher2.setStatus(VoucherStatus.EXPIRED);
                    voucherRepository.save(voucher2);
                }
            }

        }

        return listVoucherResponse;
    }

}
