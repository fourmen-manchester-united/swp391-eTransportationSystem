package com.etransportation.payload.response;

import java.util.Date;

import com.etransportation.payload.dto.AccountDTO;
import com.etransportation.payload.dto.BookReviewDTO;

import lombok.Data;

@Data
public class ReviewByCarResponse {

    private String content;
    private Integer starReview;
    private String historyTime;
    private BookReviewDTO book;
}
