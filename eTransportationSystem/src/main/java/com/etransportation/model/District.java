package com.etransportation.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "district")
@Data
@EqualsAndHashCode(callSuper = false)
public class District extends Base {

    @Column(columnDefinition = "varchar(50)")
    private String code;

    @Column(columnDefinition = "nvarchar(100)")
    private String name;

    // relationship

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "city_id", nullable = false)
    private City city;

    @OneToMany(mappedBy = "district")
    private List<Ward> wards = new ArrayList<Ward>();

    @JsonIgnore
    @OneToMany(mappedBy = "district")
    private List<Address> addresss = new ArrayList<Address>();

    // getter and setter

}
