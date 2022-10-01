package com.etransportation.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.etransportation.model.CarImage;

@Repository
public interface CarImageRepository extends JpaRepository<CarImage, Long> {

}
