package com.etransportation.model;

import java.util.ArrayList;
import java.util.List;

public class Street extends Base {

    private String name;
    // relationship
    private Ward ward;
    private List<Address> address = new ArrayList<Address>();
}
