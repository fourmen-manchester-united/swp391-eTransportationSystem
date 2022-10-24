package com.etransportation.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import com.etransportation.enums.CarStatus;
import com.etransportation.model.Car;

@Repository
public interface CarRepository extends JpaRepository<Car, Long>, JpaSpecificationExecutor<Car> {

    List<Car> findAllByStatusAndAddress_City_Code(CarStatus status, String code, Pageable pageable);

    List<Car> findAllByAccount_Id(Long id);

    Page<Car> findAllByStatus(CarStatus status, Pageable pageable);

}
