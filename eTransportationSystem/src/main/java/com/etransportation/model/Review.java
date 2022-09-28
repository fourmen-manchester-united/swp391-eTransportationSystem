package com.etransportation.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Table;

import com.etransportation.enums.ReviewStatus;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "review")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Review extends Base {

    private String content;
    private int starReview;
    private Date reviewDate;
    private ReviewStatus status;

    // relationship

    // private Account accountUserId;
    // private Car carId;

    // getter and setter

}
