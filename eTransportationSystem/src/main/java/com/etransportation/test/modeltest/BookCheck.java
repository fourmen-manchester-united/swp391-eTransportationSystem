package com.etransportation.test.modeltest;

import java.util.Date;

import com.etransportation.enums.BookStatus;

import lombok.Data;

@Data
public class BookCheck {

    private Long id;
    private double price;
    private double totalPrice;
    private Date startDate;
    private Date endDate;
    private Date bookDate;
    private BookStatus status;
    private String createdBy;

    // relationship
    private IdCheck voucher;
    private IdCheck account;
    private IdCheck car;

}
