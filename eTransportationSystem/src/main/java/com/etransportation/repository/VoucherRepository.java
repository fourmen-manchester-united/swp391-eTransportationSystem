package com.etransportation.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.etransportation.model.Voucher;

@Repository
public interface VoucherRepository extends JpaRepository<Voucher, Long> {

}
