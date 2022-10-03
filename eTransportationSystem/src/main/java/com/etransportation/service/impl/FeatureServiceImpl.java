package com.etransportation.service.impl;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.etransportation.model.Feature;
import com.etransportation.payload.response.FeatureResponse;
import com.etransportation.repository.FeatureRepository;
import com.etransportation.service.FeatureService;

@Service
public class FeatureServiceImpl implements FeatureService {

    @Autowired
    private FeatureRepository featureRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<FeatureResponse> findAllFeatures() {
        List<Feature> feature = featureRepository.findAll();
        List<FeatureResponse> listFeatureResponse = modelMapper.map(feature, new TypeToken<List<FeatureResponse>>() {
        }.getType());
        return listFeatureResponse;
    }

}
