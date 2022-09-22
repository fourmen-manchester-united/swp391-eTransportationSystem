package com.etransportation.model;

import java.util.ArrayList;
import java.util.List;

public class CarBrand extends Base {

    private String name;

    // relationship
    private List<CarModel> carModel = new ArrayList<CarModel>();
    private List<Car> car = new ArrayList<Car>();
}
