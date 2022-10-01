package com.etransportation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.etransportation.model.CarModel;

public interface CarModelRepository extends JpaRepository<CarModel, Long> {

}
