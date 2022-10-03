package com.etransportation.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "feature")
@Data
@EqualsAndHashCode(callSuper = false)
public class Feature extends Base {

    private String name;
    private String icon;

    // relationship

    @ManyToMany(mappedBy = "features")
    private List<Car> cars = new ArrayList<Car>();

    // getter and setter

}
