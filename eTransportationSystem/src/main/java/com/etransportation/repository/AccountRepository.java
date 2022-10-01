package com.etransportation.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.etransportation.model.Account;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {

    Boolean existsByUsername(String username);

    Optional<Account> findOneByUsernameAndPassword(String username, String password);

}
