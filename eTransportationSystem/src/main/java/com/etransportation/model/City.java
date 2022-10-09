package com.etransportation.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "city")
@Data
@EqualsAndHashCode(callSuper = false)
public class City extends Base {

    @Column(columnDefinition = "varchar(50)")
    private String code;

    @Column(columnDefinition = "nvarchar(100)")
    private String name;

    private String image;

    // relationship

    @OneToMany(mappedBy = "city")
    private List<District> districts = new ArrayList<District>();

    @OneToMany(mappedBy = "city")
    private List<Address> addresss = new ArrayList<Address>();

    // getter and setter

}
