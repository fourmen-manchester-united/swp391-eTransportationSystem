package com.etransportation.test.modeltest;

import lombok.Data;

@Data
public class DistrictCheck {

    private Long id;
    private String code;
    private String name;
    private IdCheck city;

}
