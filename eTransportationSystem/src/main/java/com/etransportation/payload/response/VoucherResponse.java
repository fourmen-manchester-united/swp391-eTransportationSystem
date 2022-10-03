package com.etransportation.payload.response;

import java.util.Date;

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

}
