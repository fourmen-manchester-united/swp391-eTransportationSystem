package com.etransportation.test.modeltest;

import java.util.Date;

import lombok.Data;

@Data
public class CarImageCheck {

    private Long id;
    private String image;
    private IdCheck car;
    private Date createdDate;
    private Date modifiedDate;
    private String createdBy;
    private String modifiedBy;

}
