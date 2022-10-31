package com.etransportation.filter;

import java.util.List;

import com.etransportation.enums.FilterType;

import lombok.Data;

@Data
public class Filter {

    private String field;
    private FilterType operator;
    private String value;
    private List<String> values;
}
