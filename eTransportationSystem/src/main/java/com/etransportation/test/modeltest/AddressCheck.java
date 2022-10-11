package com.etransportation.test.modeltest;

import java.util.Date;

import lombok.Data;

@Data
public class AddressCheck {

    private Long id;
    private String street;

    // relationship

    private IdCheck city;
    private IdCheck district;
    private IdCheck ward;
    private IdCheck car;

    private Date createdDate;
    private Date modifiedDate;
    private String createdBy;
    private String modifiedBy;

}
