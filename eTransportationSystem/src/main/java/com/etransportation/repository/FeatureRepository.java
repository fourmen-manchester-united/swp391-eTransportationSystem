package com.etransportation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.etransportation.model.Feature;

public interface FeatureRepository extends JpaRepository<Feature, Long> {

}
