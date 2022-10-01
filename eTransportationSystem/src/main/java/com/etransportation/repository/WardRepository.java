package com.etransportation.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.etransportation.model.Ward;

@Repository
public interface WardRepository extends JpaRepository<Ward, Long> {

}
