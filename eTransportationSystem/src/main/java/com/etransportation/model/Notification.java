package com.etransportation.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "notification")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
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
