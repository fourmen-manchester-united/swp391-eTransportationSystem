package com.etransportation.model;

import java.util.ArrayList;
import java.util.List;

public class CarModel extends Base {

    private String name;

    // relationship
    private CarBrand carBrand;
    private List<Car> car = new ArrayList<Car>();

}
