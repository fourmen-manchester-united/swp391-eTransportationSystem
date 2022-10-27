package com.etransportation.repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.etransportation.enums.VoucherStatus;
import com.etransportation.model.Voucher;

@Repository
public interface VoucherRepository extends JpaRepository<Voucher, Long> {

    List<Voucher> findAllByStatus(VoucherStatus status);

    List<Voucher> findAllByStatusAndEndDateGreaterThanAndCodeContains(VoucherStatus status, Date date, String code);

    Optional<Voucher> findByCode(String code);

}
