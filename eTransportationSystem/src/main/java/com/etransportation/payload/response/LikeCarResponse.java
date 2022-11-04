package com.etransportation.payload.response;

import com.etransportation.enums.LikeStatus;
import com.etransportation.payload.dto.IdDTO;

import lombok.Data;

@Data
public class LikeCarResponse {

    private IdDTO account;
    private IdDTO car;
    private LikeStatus status;
}
