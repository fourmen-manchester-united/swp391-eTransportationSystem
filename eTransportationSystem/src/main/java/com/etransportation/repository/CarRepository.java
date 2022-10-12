package com.etransportation.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.etransportation.enums.CarStatus;
import com.etransportation.model.Car;

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {

    List<Car> findAllByStatusAndAddress_City_Code(CarStatus status, String code);

    List<Car> findAllByAccount_Id(Long id);

}
