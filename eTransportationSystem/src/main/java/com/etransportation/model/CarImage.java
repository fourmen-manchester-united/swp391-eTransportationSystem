package com.etransportation.model;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "carImage")
@Data
@EqualsAndHashCode(callSuper = false)
public class CarImage extends Base {

    private String image;

    // relationship

    @ManyToOne
    @JoinColumn(name = "car_id")
    private Car car;

    // getter and setter

}
