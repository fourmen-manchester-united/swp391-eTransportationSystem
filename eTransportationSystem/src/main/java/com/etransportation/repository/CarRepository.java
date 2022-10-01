package com.etransportation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.etransportation.model.Car;

public interface CarRepository extends JpaRepository<Car, Long> {

}
