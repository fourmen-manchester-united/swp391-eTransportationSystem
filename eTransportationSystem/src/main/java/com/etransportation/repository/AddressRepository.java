package com.etransportation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.etransportation.model.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
