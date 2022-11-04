package com.etransportation.payload.request;

import com.etransportation.payload.dto.IdDTO;

import lombok.Data;

@Data
public class LikeCarRequest {

    private IdDTO account;
    private IdDTO car;
}
