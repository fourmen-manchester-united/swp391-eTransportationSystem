package com.etransportation.service;

import java.util.List;

import com.etransportation.payload.response.FeatureResponse;

public interface FeatureService {

    public List<FeatureResponse> findAllFeatures();
}
