package com.etransportation.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Table;

import com.etransportation.enums.BookStatus;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "book")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Book extends Base {

    private double price;
    private double totalPrice;
    private Date startDate;
    private Date endDate;
    private Date bookDate;
    private BookStatus status;

    // relationship

    // private Account accountUserId;
    // private Car carId;
    // private Voucher voucherId;

    // getter and setter

}
