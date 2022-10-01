package com.etransportation.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "district")
@Data
@EqualsAndHashCode(callSuper = false)
public class District extends Base {

    private String name;

    // relationship

    @ManyToOne
    @JoinColumn(name = "city_id")
    private City city;

    @OneToMany(mappedBy = "district")
    private List<Ward> wards = new ArrayList<Ward>();

    @OneToMany(mappedBy = "district")
    private List<Address> addresss = new ArrayList<Address>();

    // getter and setter

}
