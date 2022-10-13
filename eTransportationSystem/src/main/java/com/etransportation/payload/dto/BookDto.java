package com.etransportation.payload.dto;

import java.util.Date;

import com.etransportation.enums.BookStatus;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
public class BookDto {

    private Date startDate;
    private Date endDate;

    @JsonIgnore
    private BookStatus status;

}
