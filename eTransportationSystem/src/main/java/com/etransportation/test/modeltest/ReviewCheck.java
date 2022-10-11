package com.etransportation.test.modeltest;

import java.util.Date;

import com.etransportation.enums.ReviewStatus;

import lombok.Data;

@Data
public class ReviewCheck {

    private Long id;
    private String content;
    private int starReview;
    private ReviewStatus status;

    // relationship

    private IdCheck account;
    private IdCheck car;

    // getter and setter

    private Date reviewDate;
    private Date modifiedDate;
    private String createdBy;
    private String modifiedBy;

}
