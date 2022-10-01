package com.etransportation.service.impl;

import java.util.HashSet;
import java.util.Set;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.etransportation.enums.RoleAccount;
import com.etransportation.model.Account;
import com.etransportation.model.Role;
import com.etransportation.payload.request.LoginRequest;
import com.etransportation.payload.request.RegisterRequest;
import com.etransportation.payload.response.LoginResponse;
import com.etransportation.repository.AccountRepository;
import com.etransportation.repository.RoleRepository;
import com.etransportation.service.AccountService;

@Service
public class AccountServiceImpl implements AccountService {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Override
    public void register(RegisterRequest registerRequest) {
        if (accountRepository.existsByUsername(registerRequest.getUsername())) {
            // ResponseEntity<?> response = ResponseEntity.badRequest().body("Error:
            // Username is already taken!");
            throw new IllegalArgumentException("Error: Username is already taken!");
        }

        // Create new user's account
        // Account account = modelMapper.map(registerRequest, Account.class);

        Role role = roleRepository.findByName(RoleAccount.US).orElseGet(() -> Role
                .builder()
                .name(RoleAccount.US)
                .build());

        Set<Role> roles = new HashSet<>();
        roles.add(role);

        Account account = Account
                .builder()
                .username(registerRequest.getUsername())
                .name(registerRequest.getName())
                .password(registerRequest.getPassword())
                .roles(roles)
                .build();

        accountRepository.save(account);

    }

    @Override
    public LoginResponse login(LoginRequest loginRequest) {
        Account account = accountRepository
                .findOneByUsernameAndPassword(loginRequest.getUsername(), loginRequest.getPassword())
                .orElseThrow(() -> new IllegalArgumentException("Error: Username or password is incorrect!"));

        // khong hay lam

        // LoginResponse loginResponse = LoginResponse
        // .builder()
        // .username(account.getUsername())
        // .email(account.getEmail())
        // .name(account.getName())
        // .build();

        // cach 2 model map gon va hay hon
        return modelMapper.map(account, LoginResponse.class);
    }

}
