package com.etransportation.service.impl;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.etransportation.model.Account;
import com.etransportation.payload.request.RegisterRequest;
import com.etransportation.repository.AccountRepository;
import com.etransportation.service.AccountService;

@Service
public class AccountServiceImpl implements AccountService {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private AccountRepository accountRepository;

    @Override
    public void register(RegisterRequest registerRequest) {
        if (accountRepository.existsByUsername(registerRequest.getUsername())) {
            // ResponseEntity<?> response = ResponseEntity.badRequest().body("Error:
            // Username is already taken!");
            throw new IllegalArgumentException("Error: Username is already taken!");
        }

        // Create new user's account
        // Account account = modelMapper.map(registerRequest, Account.class);
        Account account = Account.builder().username(registerRequest.getUsername())
                .name(registerRequest.getName()).password(registerRequest.getPassword()).build();
    }

}
