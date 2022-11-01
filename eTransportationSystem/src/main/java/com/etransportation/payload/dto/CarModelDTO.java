package com.etransportation.payload.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CarModelDTO {

    private Long id;
    private String name;
    private long count;
}
