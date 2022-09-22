package com.etransportation.model;

import java.util.ArrayList;
import java.util.List;

public class Feature extends Base {

    private String name;

    // relationship
    private List<Car> car = new ArrayList<Car>();
}
