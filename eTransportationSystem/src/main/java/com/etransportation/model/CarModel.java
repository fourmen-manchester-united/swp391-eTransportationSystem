package com.etransportation.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "model")
@Data
@EqualsAndHashCode(callSuper = false)
public class CarModel extends Base {

    @Column(columnDefinition = "nvarchar(50)")
    private String name;

    // relationship

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "brand_id", nullable = false)
    private CarBrand brand;

    @JsonIgnore
    @OneToMany(mappedBy = "model")
    private List<Car> cars = new ArrayList<Car>();

    // getter and setter

}
