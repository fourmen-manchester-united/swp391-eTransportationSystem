package com.etransportation.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.etransportation.enums.RoleAccount;
import com.etransportation.model.Account;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {

    Boolean existsByUsername(String username);

    Optional<Account> findByUsername(String username);

    Optional<Account> findByEmail(String email);

    Optional<Account> findByIdAndRoles_Name(Long id, RoleAccount role);

}
