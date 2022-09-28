package com.etransportation.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "ward")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Ward extends Base {

    private String name;

    // relationship

    @ManyToOne
    @JoinColumn(name = "district_id")
    private District district;

    @OneToMany(mappedBy = "ward")
    private List<Address> addresss = new ArrayList<Address>();

    // getter and setter

}
