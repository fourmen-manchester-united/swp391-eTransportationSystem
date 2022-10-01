package com.etransportation.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "notification")
@Data
@EqualsAndHashCode(callSuper = false)
public class Notification extends Base {

    private String discription;
    private String shortDiscription;
    private String title;
    private boolean isRead;
    private Date createdDate;

    // relationship
    @ManyToOne
    @JoinColumn(name = "account_id")
    private Account account;

    // getter and setter

}
