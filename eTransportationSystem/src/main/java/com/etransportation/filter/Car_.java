package com.etransportation.filter;

import java.util.Set;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

import com.etransportation.model.Car;
import com.etransportation.model.Feature;

@StaticMetamodel(Car.class)
@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
public abstract class Car_ {
    // don't understand why use
    public static volatile SingularAttribute<Car, Long> id;
    public static volatile SingularAttribute<Car, Set<Feature>> features;
    // -----------------------------------------------------------------

    public static final String ID = "id";
    public static final String SEATS = "seats";
    public static final String PRICE = "price";
    public static final String FUEL = "fuel";
    public static final String TRANSMISSION = "transmission";
    public static final String YEAR = "yearOfManufacture";
    public static final String STATUS = "status";
    public static final String ADDRESS = "address";
    public static final String MODEL = "model";
    public static final String FEATURES = "features";

}
