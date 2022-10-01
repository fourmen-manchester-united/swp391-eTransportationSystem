package com.etransportation.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.etransportation.model.CarBrand;

@Repository
public interface CarBrandRepository extends JpaRepository<CarBrand, Long> {

}
