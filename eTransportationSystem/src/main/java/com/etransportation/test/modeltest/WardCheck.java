package com.etransportation.test.modeltest;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;

@Data
public class WardCheck {

    private Long id;
    private String code;
    private String name;
    private IdCheck district;

}
