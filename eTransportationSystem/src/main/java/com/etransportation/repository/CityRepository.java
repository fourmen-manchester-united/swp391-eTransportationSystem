package com.etransportation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.etransportation.model.City;

public interface CityRepository extends JpaRepository<City, Long> {

}
