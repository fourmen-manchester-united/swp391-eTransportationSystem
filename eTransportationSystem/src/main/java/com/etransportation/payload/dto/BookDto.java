package com.etransportation.payload.dto;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Data
public class BookDto {

    private Date startDate;
    private Date endDate;
}
