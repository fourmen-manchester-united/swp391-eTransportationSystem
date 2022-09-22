package com.etransportation.model;

import java.util.ArrayList;
import java.util.List;

public class District extends Base {

    private String name;

    // relationship
    private City city;
    private List<Ward> ward = new ArrayList<Ward>();
    private List<Address> address = new ArrayList<Address>();

}
