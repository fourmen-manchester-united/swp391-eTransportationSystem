package com.etransportation.service;

import java.sql.SQLException;

import org.springframework.data.domain.Pageable;

import com.etransportation.payload.request.LikeCarRequest;
import com.etransportation.payload.request.PagingRequest;
import com.etransportation.payload.response.LikeCarResponse;

public interface LikeService {

    public Object findAllLikeCarByAccountId(Long id, PagingRequest pagingRequest);

    public void likeCar(LikeCarRequest likeCarRequest);

    public void cancelLikeCar(LikeCarRequest likeCarRequest);

    public LikeCarResponse checkLikeCar(LikeCarRequest likeCarRequest);

}
