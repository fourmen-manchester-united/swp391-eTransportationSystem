package com.etransportation.payload.dto;

import com.etransportation.enums.ReviewStatus;

import lombok.Data;

@Data
public class ReviewDTO {
    private ReviewStatus status;
}
