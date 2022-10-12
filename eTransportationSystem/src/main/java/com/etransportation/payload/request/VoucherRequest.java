package com.etransportation.payload.request;

import java.util.Date;

import lombok.Data;

@Data
public class VoucherRequest {

    private String code;
    private int percentage;
    private int maxDiscount;
    private String discription;
    private Date startDate;
    private Date endDate;

}
