package com.etransportation.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "model")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CarModel extends Base {

    private String name;

    // relationship

    // private CarBrand carBrandId;
    // private List<Car> cars = new ArrayList<Car>();

    // getter and setter

}
