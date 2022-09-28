package com.etransportation.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "feature")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Feature extends Base {

    private String name;

    // relationship

    @ManyToMany(mappedBy = "features")
    private List<Car> cars = new ArrayList<Car>();

    // getter and setter

}
