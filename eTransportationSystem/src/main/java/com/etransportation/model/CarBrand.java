package com.etransportation.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "brand")
@Data
@EqualsAndHashCode(callSuper = true)
public class CarBrand extends Base {

    @Column(columnDefinition = "nvarchar(20)")
    private String name;

    // relationship

    @OneToMany(mappedBy = "brand", fetch = FetchType.LAZY)
    private List<CarModel> carModels = new ArrayList<CarModel>();

    // getter and setter

}
