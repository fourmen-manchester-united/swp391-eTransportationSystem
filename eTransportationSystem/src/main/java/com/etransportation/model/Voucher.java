package com.etransportation.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Voucher extends Base {

    private String code;
    private int percent;
    private int maxDiscount;
    private String discription;
    private Date startDate;
    private Date endDate;

    // relationship
    private List<Payment> car = new ArrayList<Payment>();

}
