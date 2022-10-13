package com.etransportation.payload.response;

import java.util.List;

import lombok.Data;

@Data
public class PagingResponse<T> {

    public int page;
    public int limit;
    public int totalPage;
    public List<T> data;
}
