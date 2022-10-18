package com.etransportation.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "ward")
@Data
@EqualsAndHashCode(callSuper = false)
public class Ward extends Base {

    @Column(columnDefinition = "varchar(50)")
    private String code;

    @Column(columnDefinition = "nvarchar(255)")
    private String name;

    // relationship

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "district_id")
    private District district;

    @OneToMany(mappedBy = "ward", fetch = FetchType.LAZY)
    private List<Address> addresss = new ArrayList<Address>();

    // getter and setter

}
