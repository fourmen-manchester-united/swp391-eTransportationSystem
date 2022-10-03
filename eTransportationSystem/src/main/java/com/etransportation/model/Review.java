package com.etransportation.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.etransportation.enums.ReviewStatus;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "review")
@Data
@EqualsAndHashCode(callSuper = false)
public class Review extends Base {

    @Column(columnDefinition = "nvarchar(255)")
    private String content;

    private int starReview;
    private Date reviewDate;

    @Enumerated(EnumType.STRING)
    private ReviewStatus status;

    // relationship

    @ManyToOne
    @JoinColumn(name = "account_id")
    private Account account;

    @ManyToOne
    @JoinColumn(name = "car_id")
    private Car car;

    // getter and setter

}
