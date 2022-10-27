package com.etransportation.service.impl;

import java.util.Calendar;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.etransportation.enums.VoucherStatus;
import com.etransportation.model.Voucher;
import com.etransportation.payload.request.PagingRequest;
import com.etransportation.payload.request.VoucherRequest;
import com.etransportation.payload.response.PagingResponse;
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
    public List<VoucherResponse> findAllVoucherActiveByContainCode(String code) {
        Calendar cal = Calendar.getInstance();
        cal.set(Calendar.DAY_OF_MONTH, cal.get(Calendar.DAY_OF_MONTH) - 1);

        List<Voucher> voucher = voucherRepository.findAllByStatusAndEndDateGreaterThanAndCodeContains(
                VoucherStatus.ACTIVE,
                cal.getTime(), code);
        List<VoucherResponse> listVoucherResponse = modelMapper.map(voucher, new TypeToken<List<VoucherResponse>>() {
        }.getType());

        return listVoucherResponse;
    }

    @Override
    @Transactional
    public void save(VoucherRequest voucherRequest) {
        Calendar cal = Calendar.getInstance();
        cal.set(Calendar.HOUR_OF_DAY, 0);

        voucherRepository.findByCode(voucherRequest.getCode()).ifPresent(voucher -> {
            throw new IllegalArgumentException("Voucher code already exists");
        });

        if (!voucherRequest.getStartDate().after(cal.getTime()) || !voucherRequest.getEndDate().after(cal.getTime())) {
            throw new IllegalArgumentException("Voucher date is not before today");
        }

        if (!voucherRequest.getStartDate().equals(voucherRequest.getEndDate())) {
            if (voucherRequest.getStartDate().after(voucherRequest.getEndDate())) {
                throw new IllegalArgumentException("Voucher end date is not before start date");
            }
        }

        Voucher voucher = modelMapper.map(voucherRequest, Voucher.class);
        voucher.setImage("https://n1-cstg.mioto.vn/g/2018/03/17/16/52.jpg");
        voucher.setStatus(VoucherStatus.ACTIVE);
        voucherRepository.save(voucher);
    }

    @Override
    public PagingResponse<VoucherResponse> findAllVoucher(PagingRequest pagingRequest) {
        Calendar cal = Calendar.getInstance();
        cal.set(Calendar.DAY_OF_MONTH, cal.get(Calendar.DAY_OF_MONTH) - 1);
        Pageable pageable = PageRequest.of(pagingRequest.getPage() - 1, pagingRequest.getSize());

        Page<Voucher> voucher = voucherRepository.findAll(pageable);

        // chuyen qua cho khac
        // ==========================================================================
        voucher.getContent().stream().filter(v -> v.getEndDate().before(cal.getTime()))
                .forEach(v -> {
                    v.setStatus(VoucherStatus.EXPIRED);
                    voucherRepository.save(v);
                });
        // ================================================================================================
        PagingResponse<VoucherResponse> pagingResponse = PagingResponse
                .<VoucherResponse>builder()
                .page(voucher.getPageable().getPageNumber() + 1)
                .size(voucher.getSize())
                .totalPage(voucher.getTotalPages())
                .totalItem(voucher.getTotalElements())
                .contends(modelMapper.map(voucher.getContent(), new TypeToken<List<VoucherResponse>>() {
                }.getType()))
                .build();

        return pagingResponse;
    }

}
