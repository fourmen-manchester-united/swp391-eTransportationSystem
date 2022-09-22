package com.etransportation.model;

import java.util.ArrayList;
import java.util.List;

public class Address extends Base {

    // relationship
    private City city;
    private District district;
    private Ward ward;
    private Street street;
    private List<Car> car = new ArrayList<Car>();

}
