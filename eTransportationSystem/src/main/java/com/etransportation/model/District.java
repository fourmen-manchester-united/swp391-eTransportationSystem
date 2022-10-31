package com.etransportation.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "district")
@Data
@EqualsAndHashCode(callSuper = true)
public class District extends Base {

    @Column(columnDefinition = "varchar(50)")
    private String code;

    @Column(columnDefinition = "nvarchar(100)")
    private String name;

    // relationship

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "city_id", nullable = false)
    private City city;

    @OneToMany(mappedBy = "district", fetch = FetchType.LAZY)
    private List<Ward> wards = new ArrayList<Ward>();

    @OneToMany(mappedBy = "district", fetch = FetchType.LAZY)
    private List<Address> addresss = new ArrayList<Address>();

    // getter and setter

}
