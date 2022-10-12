package com.etransportation.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.etransportation.model.DrivingLicense;

public interface DrivingLicenseRepository extends JpaRepository<DrivingLicense, Long> {

    Optional<DrivingLicense> findByAccount_Id(Long id);

}
