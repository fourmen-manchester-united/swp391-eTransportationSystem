package com.etransportation.payload.response;

import java.util.Date;

import com.etransportation.enums.BookStatus;
import com.etransportation.payload.dto.ReviewDTO;

import lombok.Data;

@Data
public class BookShortInfoResponse {

    private Long book_Id;
    private Long car_Id;
    private String carName;
    private double totalPrice;
    private Date startDate;
    private Date endDate;
    private String carImage;
    private BookStatus status;
    private String historyTime;
    private ReviewDTO review;

}
