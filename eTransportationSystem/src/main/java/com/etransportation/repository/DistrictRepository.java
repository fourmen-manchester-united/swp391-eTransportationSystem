package com.etransportation.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.etransportation.model.District;

@Repository
public interface DistrictRepository extends JpaRepository<District, Long> {

}
