package com.etransportation.payload.response;

import java.util.Date;

import com.etransportation.enums.VoucherStatus;

import lombok.Data;

@Data
public class VoucherResponse {

    private Long id;
    private String code;
    private int percentage;
    private int maxDiscount;
    private String image;
    private String discription;
    private Date startDate;
    private Date endDate;
    private VoucherStatus status;

}
