package com.etransportation.service.impl;

import java.util.HashSet;
import java.util.List;
import java.util.Map;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.etransportation.enums.AccountGender;
import com.etransportation.enums.AccountStatus;
import com.etransportation.enums.DrivingLicenseStatus;
import com.etransportation.enums.RoleAccount;
import com.etransportation.model.Account;
import com.etransportation.model.DrivingLicense;
import com.etransportation.model.Role;
import com.etransportation.payload.dto.DriverLicenseDTO;
import com.etransportation.payload.request.AccountBrowsingRequest;
import com.etransportation.payload.request.AccountInfoRequest;
import com.etransportation.payload.request.AccountRegisterRequest;
import com.etransportation.payload.request.ChangePasswordRequest;
import com.etransportation.payload.request.DLicenseBrowsingRequest;
import com.etransportation.payload.request.DriverLicenseInfoRequest;
import com.etransportation.payload.request.LoginRequest;
import com.etransportation.payload.request.PagingRequest;
import com.etransportation.payload.response.AccountInfoResponse;
import com.etransportation.payload.response.DriverLicenseInfoResponse;
import com.etransportation.payload.response.LoginResponse;
import com.etransportation.payload.response.PagingResponse;
import com.etransportation.repository.AccountRepository;
import com.etransportation.repository.DrivingLicenseRepository;
import com.etransportation.repository.RoleRepository;
import com.etransportation.security.oauth2.GoogleOAuth2UserInfo;
import com.etransportation.security.oauth2.OAuth2UserInfo;
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

    @Autowired
    private PasswordEncoder bCryptPasswordEncoder;

    @Override
    @Transactional
    public void register(AccountRegisterRequest registerRequest) {
        if (accountRepository.existsByUsername(registerRequest.getUsername())) {
            throw new IllegalArgumentException("Username is already taken!");
        }
        Account account = Account
                .builder()
                .username(registerRequest.getUsername())
                .name(registerRequest.getName())
                .password(bCryptPasswordEncoder.encode(registerRequest.getPassword()))
                .status(AccountStatus.ACTIVE)
                .roles(new HashSet<Role>() {
                    {
                        add(roleRepository.findByName(RoleAccount.USER).orElseGet(() -> Role
                                .builder()
                                .name(RoleAccount.USER)
                                .build()));
                    }
                })
                .build();

        accountRepository.save(account);

    }

    @Override
    @Transactional
    public LoginResponse login(LoginRequest loginRequest) {

        Account account = accountRepository
                .findByUsername(loginRequest.getUsername())
                .orElseThrow(() -> new IllegalArgumentException("Username is incorrect!"));

        if (!bCryptPasswordEncoder.matches(loginRequest.getPassword(), account.getPassword())) {
            throw new IllegalArgumentException("Password is incorrect!");
        }

        return modelMapper.map(account, LoginResponse.class);
    }

    @Override
    @Transactional
    public void changePassword(ChangePasswordRequest changePasswordRequest) {

        Account account = accountRepository.findById(changePasswordRequest.getId())
                .orElseThrow(() -> new IllegalArgumentException("Account is not found!"));
        if (!bCryptPasswordEncoder.matches(changePasswordRequest.getOldPassword(), account.getPassword())) {
            throw new IllegalArgumentException("Old password is incorrect!");
        }
        account.setPassword(bCryptPasswordEncoder.encode(changePasswordRequest.getNewPassword()));
        accountRepository.save(account);
    }

    // @Override
    // @Transactional
    // // lay ra entity 1 rui set entity 2 trong entity 1 thi bi error
    // // vd: account.setDrivingLicense -> error
    // // chi loi khi co @Transactional -> xoa @Transactional fixbug
    // public AccountInfoResponse findAccountById(Long id) {

    // Account account = accountRepository.findById(id)
    // .orElseThrow(() -> new IllegalArgumentException("Account is not found!"));

    // if (account.getDrivingLicense() == null) {
    // DrivingLicense drivingLicense = new DrivingLicense();
    // drivingLicense.setStatus(DrivingLicenseStatus.NOTYET);
    // account.setDrivingLicense(drivingLicense);
    // }
    // return modelMapper.map(account, AccountInfoResponse.class);
    // }

    @Override
    @Transactional
    public AccountInfoResponse findAccountById(Long id) {
        Account account = accountRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Account is not found!"));
        AccountInfoResponse accountResponse = modelMapper.map(account, AccountInfoResponse.class);
        if (accountResponse.getDrivingLicense() == null) {
            DriverLicenseDTO driverLicenseDTO = new DriverLicenseDTO();
            driverLicenseDTO.setStatus(DrivingLicenseStatus.NOTYET);
            accountResponse.setDrivingLicense(driverLicenseDTO);
        }
        return accountResponse;
    }

    @Override
    @Transactional
    public void updateInfoAccount(AccountInfoRequest accountInfoRequest) {
        Account account = accountRepository.findById(accountInfoRequest.getId())
                .orElseThrow(() -> new IllegalArgumentException("Account is not found!"));
        modelMapper.map(accountInfoRequest, account);
        accountRepository.save(account);
    }

    @Override
    public DriverLicenseInfoResponse findAccountDriverLicenseInfo(Long accountId) {
        Account account = accountRepository.findById(accountId)
                .orElseThrow(() -> new IllegalArgumentException("Account is not found!"));

        DrivingLicense drivingLicense = drivingLicenseRepository.findByAccount_Id(accountId)
                .orElseGet(() -> null);

        if (drivingLicense == null) {
            drivingLicense = new DrivingLicense();
            drivingLicense.setStatus(DrivingLicenseStatus.NOTYET);

        }
        return modelMapper.map(drivingLicense, DriverLicenseInfoResponse.class);
    }

    @Override
    @Transactional
    public void updateDriverLicenseInfo(DriverLicenseInfoRequest driverLicenseInfoRequest) {
        Account account = accountRepository.findById(driverLicenseInfoRequest.getAccount_Id())
                .orElseThrow(() -> new IllegalArgumentException("Account is not found!"));
        DrivingLicense drivingLicense = account.getDrivingLicense();
        if (drivingLicense != null) {
            modelMapper.map(driverLicenseInfoRequest, drivingLicense);
        } else {
            drivingLicense = modelMapper.map(driverLicenseInfoRequest, DrivingLicense.class);
        }

        drivingLicense.setStatus(DrivingLicenseStatus.PENDING);
        drivingLicense.setAccount(account);
        drivingLicenseRepository.save(drivingLicense);
    }

    @Override
    public Object findAllAccountByContainsUsername(PagingRequest pagingRequest, String username) {
        Pageable pageable = PageRequest.of(pagingRequest.getPage() - 1, pagingRequest.getSize());
        Page<Account> accounts = accountRepository.findByUsernameContains(username, pageable);
        PagingResponse<AccountInfoResponse> pagingResponse = PagingResponse
                .<AccountInfoResponse>builder()
                .page(accounts.getPageable().getPageNumber() + 1)
                .size(accounts.getSize())
                .totalPage(accounts.getTotalPages())
                .totalItem(accounts.getTotalElements())
                .contends(modelMapper.map(accounts.getContent(), new TypeToken<List<AccountInfoResponse>>() {
                }.getType()))
                .build();
        return pagingResponse;
    }

    @Override
    public void accountBlock(AccountBrowsingRequest accountBrowsingRequest) {
        Account account = accountRepository.findById(accountBrowsingRequest.getId())
                .orElseThrow(() -> new IllegalArgumentException("Account is not found!"));

        switch (accountBrowsingRequest.getStatus()) {
            case ACTIVE:
                account.setStatus(AccountStatus.ACTIVE);
                break;
            case BLOCKED:
                account.setStatus(AccountStatus.BLOCKED);
                break;
            case INACTIVE:
                account.setStatus(AccountStatus.INACTIVE);
                break;
            default:
                throw new IllegalArgumentException("Unknown status: " + account.getStatus());
        }
        accountRepository.save(account);
    }

    @Override
    public void addRole(Long id) {
        Account account = accountRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Account is not found!"));
        Role role = roleRepository.findByName(RoleAccount.ADMIN).orElseGet(() -> Role
                .builder()
                .name(RoleAccount.ADMIN)
                .build());
        account.getRoles().add(role);
        accountRepository.save(account);
    }

    @Override
    public void deleteRole(Long id) {
        Account account = accountRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Account is not found!"));
        account = accountRepository.findByIdAndRoles_Name(id, RoleAccount.ADMIN)
                .orElseThrow(() -> new IllegalArgumentException("Account is not have role Admin !"));
        account.getRoles().removeIf(r -> r.getName().equals(RoleAccount.ADMIN));
        accountRepository.save(account);
    }

    @Override
    public void accountDriverLincense(DLicenseBrowsingRequest dLicenseBrowsingRequest) {
        Account account = accountRepository.findById(dLicenseBrowsingRequest.getAccount_Id())
                .orElseThrow(() -> new IllegalArgumentException("Account is not found!"));

        DrivingLicense drivingLicense = drivingLicenseRepository
                .findByAccount_Id(dLicenseBrowsingRequest.getAccount_Id())
                .orElseThrow(() -> new IllegalArgumentException("Account is not have driving license!"));

        switch (dLicenseBrowsingRequest.getStatus()) {
            case VERIFIED:
                drivingLicense.setStatus(DrivingLicenseStatus.VERIFIED);
                break;
            case FAILED:
                drivingLicense.setStatus(DrivingLicenseStatus.FAILED);
                break;
            case PENDING:
                drivingLicense.setStatus(DrivingLicenseStatus.PENDING);
                break;
            case NOTYET:
                throw new IllegalArgumentException("Can not setup status: " + dLicenseBrowsingRequest.getStatus());
            default:
                throw new IllegalArgumentException("Unknown status: " + dLicenseBrowsingRequest.getStatus());
        }
        drivingLicenseRepository.save(drivingLicense);
    }

    @Override
    @SuppressWarnings("unchecked")
    public LoginResponse loginOAuth2(Map<String, Object> data) {
        OAuth2UserInfo userInfo = new GoogleOAuth2UserInfo((Map<String, Object>) data.get("profileObj"));
        Account account = accountRepository.findByEmail(userInfo.getEmail()).orElseGet(() -> null);
        if (account == null) {
            String usernameFromEmail = userInfo.getEmail().substring(0, userInfo.getEmail().indexOf("@"));
            account = Account.builder()
                    .username(usernameFromEmail)
                    .email(userInfo.getEmail())
                    .status(AccountStatus.ACTIVE)
                    .name(userInfo.getName())
                    .avatar(userInfo.getImageUrl())
                    .gender(AccountGender.MALE)
                    .password(bCryptPasswordEncoder.encode(userInfo.getGoogleId() + userInfo.getProvider()))
                    .roles(new HashSet<Role>() {
                        {
                            add(roleRepository.findByName(RoleAccount.USER).orElseGet(() -> Role
                                    .builder()
                                    .name(RoleAccount.USER)
                                    .build()));
                        }
                    })
                    .build();
            accountRepository.save(account);
        }

        return modelMapper.map(account, LoginResponse.class);
    }

}
