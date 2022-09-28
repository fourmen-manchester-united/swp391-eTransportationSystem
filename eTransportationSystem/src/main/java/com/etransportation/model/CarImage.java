package com.etransportation.model;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "carImage")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CarImage extends Base {

    private String image;

    // relationship

    @ManyToOne
    @JoinColumn(name = "car_id")
    private Car car;

    // getter and setter

}
