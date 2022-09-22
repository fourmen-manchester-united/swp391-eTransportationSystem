package com.etransportation.model;

import java.util.ArrayList;
import java.util.List;

public class Ward extends Base {

    private String name;

    // relationship
    private District district;
    private List<Street> street = new ArrayList<Street>();
    private List<Address> address = new ArrayList<Address>();

}
