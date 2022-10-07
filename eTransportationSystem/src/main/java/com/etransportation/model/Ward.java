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
@Table(name = "ward")
@Data
@EqualsAndHashCode(callSuper = false)
public class Ward extends Base {

    @Column(columnDefinition = "varchar(50)")
    private String code;

    @Column(columnDefinition = "nvarchar(255)")
    private String name;

    // relationship

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "district_id")
    private District district;

    @JsonIgnore
    @OneToMany(mappedBy = "ward")
    private List<Address> addresss = new ArrayList<Address>();

    // getter and setter

}
