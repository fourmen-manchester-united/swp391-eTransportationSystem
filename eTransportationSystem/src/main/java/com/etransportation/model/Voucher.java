package com.etransportation.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
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

    @Column(columnDefinition = "varchar(50)")
    private String code;
    private int percentage;
    private int maxDiscount;
    private String image;

    @Column(columnDefinition = "nvarchar(255)")
    private String discription;
    private Date startDate;
    private Date endDate;

    // relationship

    @OneToMany(mappedBy = "voucher")
    private List<Book> books = new ArrayList<Book>();

    // getter and setter

}
