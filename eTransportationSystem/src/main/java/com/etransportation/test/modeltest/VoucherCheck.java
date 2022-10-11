package com.etransportation.test.modeltest;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import lombok.Data;

@Data
public class VoucherCheck {

    private Long id;
    private String code;
    private int percentage;
    private int maxDiscount;
    private String image;
    private String discription;
    private Date startDate;
    private Date endDate;

    private Date createdDate;
    private Date modifiedDate;
    private String createdBy;
    private String modifiedBy;

}
