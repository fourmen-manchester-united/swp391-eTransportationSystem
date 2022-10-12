package com.etransportation.payload.request;

import java.util.Date;

import javax.validation.constraints.NotNull;

import com.etransportation.payload.dto.IdDTO;
import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Data
public class BookRequest {

    private double price;
    private double totalPrice;

    @NotNull(message = "startDate must not be null")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date startDate;

    @NotNull(message = "endDate must not be null")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date endDate;

    private IdDTO voucher;
    private IdDTO account;
    private IdDTO car;
}
