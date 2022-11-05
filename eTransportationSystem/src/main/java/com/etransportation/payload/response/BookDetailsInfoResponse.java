package com.etransportation.payload.response;

import java.util.Date;
import java.util.List;

import com.etransportation.enums.BookStatus;
import com.etransportation.payload.dto.AccountDTO;
import com.etransportation.payload.dto.CarDTO;

import lombok.Data;

@Data
public class BookDetailsInfoResponse {

    private Long id;
    private Double price;
    private Double totalPrice;
    private Date startDate;
    private Date endDate;
    private Date bookDate;
    private BookStatus status;
    private AccountDTO account;
    private CarDTO car;
    private List<Date> dates;

}
