package com.etransportation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.etransportation.model.Voucher;

public interface VoucherRepository extends JpaRepository<Voucher, Long> {

}
