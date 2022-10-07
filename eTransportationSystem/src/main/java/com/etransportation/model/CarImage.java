package com.etransportation.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "carImage")
@Data
@EqualsAndHashCode(callSuper = false)
public class CarImage extends Base {

    private String image;

    // relationship

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "car_id", nullable = false)
    private Car car;

    // getter and setter

}
