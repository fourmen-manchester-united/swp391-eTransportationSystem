package com.etransportation.service.impl;

import java.util.HashSet;
import java.util.Set;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.etransportation.enums.DrivingLicenseStatus;
import com.etransportation.enums.RoleAccount;
import com.etransportation.model.Account;
import com.etransportation.model.DrivingLicense;
import com.etransportation.model.Role;
import com.etransportation.payload.request.ChangePasswordRequest;
import com.etransportation.payload.request.DriverLicenseInfoRequest;
import com.etransportation.payload.request.LoginRequest;
import com.etransportation.payload.request.AccountInfoRequest;
import com.etransportation.payload.request.AccountRegisterRequest;
import com.etransportation.payload.response.AccountInfoResponse;
import com.etransportation.payload.response.DriverLicenseInfoResponse;
import com.etransportation.payload.response.LoginResponse;
import com.etransportation.repository.AccountRepository;
import com.etransportation.repository.DrivingLicenseRepository;
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

    @Autowired
    private DrivingLicenseRepository drivingLicenseRepository;

    @Override
    public void register(AccountRegisterRequest registerRequest) {
        if (accountRepository.existsByUsername(registerRequest.getUsername())) {
            // ResponseEntity<?> response = ResponseEntity.badRequest().body("Error:
            // Username is already taken!");
            throw new IllegalArgumentException("Username is already taken!");
        }

        // Create new user's account
        // Account account = modelMapper.map(registerRequest, Account.class);

        Role role = roleRepository.findByName(RoleAccount.US).orElseGet(() -> Role
                .builder()
                .name(RoleAccount.US)
                .build());

        roleRepository.save(role);

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
                .orElseThrow(() -> new IllegalArgumentException("Username or password is incorrect!"));

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

    @Override
    public void changePassword(ChangePasswordRequest changePasswordRequest) {

        Long id = changePasswordRequest.getId();
        String oldPassword = changePasswordRequest.getOldPassword();
        String newPassword = changePasswordRequest.getNewPassword();

        Account account = accountRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Account is not found!"));

        if (!account.getPassword().equals(oldPassword)) {
            throw new IllegalArgumentException("Old password is incorrect!");
        }

        account.setPassword(newPassword);
        accountRepository.save(account);

    }

    @Override
    public AccountInfoResponse findAccountById(Long id) {
        Account account = accountRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Account is not found!"));
        return modelMapper.map(account, AccountInfoResponse.class);
    }

    @Override
    public void updateInfoAccount(AccountInfoRequest accountInfoRequest) {
        Account account = accountRepository.findById(accountInfoRequest.getId())
                .orElseThrow(() -> new IllegalArgumentException("Account is not found!"));
        account.setName(accountInfoRequest.getName());
        account.setGender(accountInfoRequest.getGender());
        account.setBirthDate(accountInfoRequest.getBirthDate());
        account.setEmail(accountInfoRequest.getEmail());
        account.setPhone(accountInfoRequest.getPhone());
        account.setAvatar(accountInfoRequest.getAvatar());
        account.setThumnail(accountInfoRequest.getThumnail());

        accountRepository.save(account);
    }

    @Override
    public DriverLicenseInfoResponse findAccountDriverLicenseInfo(Long accountId) {
        Account account = accountRepository.findById(accountId)
                .orElseThrow(() -> new IllegalArgumentException("Account is not found!"));
        if (account.getDrivingLicense() == null) {
            throw new IllegalArgumentException("Account is not have driving license!");
        }
        return modelMapper.map(account.getDrivingLicense(), DriverLicenseInfoResponse.class);
    }

    @Override
    public void updateDriverLicenseInfo(DriverLicenseInfoRequest driverLicenseInfoRequest) {
        Account account = accountRepository.findById(driverLicenseInfoRequest.getAccountId())
                .orElseThrow(() -> new IllegalArgumentException("Account is not found!"));
        DrivingLicense drivingLicense = modelMapper.map(driverLicenseInfoRequest, DrivingLicense.class);
        if (account.getDrivingLicense() != null) {
            drivingLicense.setId(account.getDrivingLicense().getId());
        }

        drivingLicense.setStatus(DrivingLicenseStatus.VERIFICATION_PENDING);
        drivingLicense.setAccount(account);
        drivingLicenseRepository.save(drivingLicense);
    }

}
