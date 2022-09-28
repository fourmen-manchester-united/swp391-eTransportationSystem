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
@Table(name = "district")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class District extends Base {

    private String name;

    // relationship

    // private City cityId;
    // private List<Ward> wards = new ArrayList<Ward>();
    // private List<Address> addresss = new ArrayList<Address>();

    // getter and setter

}
