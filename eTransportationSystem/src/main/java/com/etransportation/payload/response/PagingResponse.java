package com.etransportation.payload.response;

import java.util.List;

import com.etransportation.payload.dto.CarBrandDTO;
import com.etransportation.payload.dto.CarModelDTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PagingResponse<T> {

    public int page;
    public int size;
    public int totalPage;
    public long totalItem;
    public List<T> contends;

    List<CarBrandDTO> carBrands;
    List<CarModelDTO> carModels;

}
