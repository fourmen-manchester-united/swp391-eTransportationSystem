package com.etransportation.test.modeltest;

import java.util.Date;

import lombok.Data;

@Data
public class NotificationCheck {

    private Long id;
    private String discription;
    private String shortDiscription;
    private String title;
    private boolean isRead;
    private Date createdDate;

    // relationship

    private IdCheck account;

    // getter and setter

    private Date modifiedDate;
    private String createdBy;
    private String modifiedBy;

}
