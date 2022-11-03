package com.etransportation.payload.request;

import com.etransportation.payload.dto.IdDTO;

import lombok.Data;

@Data
public class ReviewCarRequest {

    private IdDTO book;
    private String content;
    private Integer starReview;

}
