package com.etransportation.payload.request;

import java.util.Date;

import com.etransportation.model.Account;
import com.etransportation.model.Car;
import com.etransportation.model.Voucher;
import com.etransportation.payload.dto.IdDTO;

import lombok.Data;

@Data
public class BookRequest {

    private double price;
    private double totalPrice;
    private Date startDate;
    private Date endDate;
    private IdDTO voucher;
    private IdDTO account;
    private IdDTO car;
}
