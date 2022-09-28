package com.etransportation.model;

import javax.persistence.Entity;
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

    // private Car carId;

    // getter and setter

}
