package com.etransportation.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.etransportation.enums.BookStatus;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "book")
@Data
@EqualsAndHashCode(callSuper = false)
public class Book extends Base {

    private double price;
    private double totalPrice;
    private Date startDate;
    private Date endDate;
    private Date bookDate;

    @Enumerated(EnumType.STRING)
    private BookStatus status;

    // relationship

    @ManyToOne
    @JoinColumn(name = "voucher_id")
    private Voucher voucher;

    @ManyToOne
    @JoinColumn(name = "account_id")
    private Account account;

    @ManyToOne
    @JoinColumn(name = "car_id")
    private Car car;

    // getter and setter

}
