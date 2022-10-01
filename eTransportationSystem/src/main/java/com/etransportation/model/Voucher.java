package com.etransportation.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "voucher")
@Data
@EqualsAndHashCode(callSuper = false)
public class Voucher extends Base {

    private String code;
    private int percentage;
    private int maxDiscount;
    private String discription;
    private Date startDate;
    private Date endDate;

    // relationship

    @OneToMany(mappedBy = "voucher")
    private List<Book> books = new ArrayList<Book>();

    // getter and setter

}
