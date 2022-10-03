package com.etransportation.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.etransportation.model.City;

@Repository
public interface CityRepository extends JpaRepository<City, Long> {

}
