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
@Table(name = "city")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class City extends Base {

    private String name;
    private String image;

    // relationship

    // private List<District> districts = new ArrayList<District>();
    // private List<Address> addresss = new ArrayList<Address>();

    // getter and setter

}
