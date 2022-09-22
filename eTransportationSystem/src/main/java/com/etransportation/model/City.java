package com.etransportation.model;

import java.util.ArrayList;
import java.util.List;

public class City extends Base {

    private String name;
    private String image;

    // relationship
    private List<District> district = new ArrayList<District>();
    private List<Address> address = new ArrayList<Address>();

}
