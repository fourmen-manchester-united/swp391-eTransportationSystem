package com.etransportation.service.impl;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.etransportation.enums.LikeStatus;
import com.etransportation.model.Account;
import com.etransportation.model.Car;
import com.etransportation.model.Role;
import com.etransportation.payload.dto.IdDTO;
import com.etransportation.payload.request.LikeCarRequest;
import com.etransportation.payload.request.PagingRequest;
import com.etransportation.payload.response.LikeCarResponse;
import com.etransportation.repository.AccountRepository;
import com.etransportation.repository.CarRepository;
import com.etransportation.repository.RoleRepository;
import com.etransportation.service.LikeService;

@Service
public class LikeServiceImpl implements LikeService {

        @Autowired
        private ModelMapper modelMapper;

        @Autowired
        private AccountRepository accountRepository;

        @Autowired
        private CarRepository carRepository;

        @Autowired
        private RoleRepository roleRepository;

        @Override
        @Transactional
        public void cancelLikeCar(LikeCarRequest likeCarRequest) {
                Account account = accountRepository.findById(likeCarRequest.getAccount().getId())
                                .orElseThrow(() -> new IllegalArgumentException("Account not found"));
                Car car = carRepository.findById(likeCarRequest.getCar().getId())
                                .orElseThrow(() -> new IllegalArgumentException("Car not found"));
                account.getLikeCars().removeIf(c -> c.getId().equals(car.getId()));
                accountRepository.save(account);

        }

        @Override
        @Transactional
        public LikeCarResponse checkLikeCar(LikeCarRequest likeCarRequest) {
                Account account = accountRepository.findById(likeCarRequest.getAccount().getId())
                                .orElseThrow(() -> new IllegalArgumentException("Account not found"));
                Car car = carRepository.findById(likeCarRequest.getCar().getId())
                                .orElseThrow(() -> new IllegalArgumentException("Car not found"));
                boolean check = accountRepository.existsByIdAndLikeCars_Id(account.getId(), car.getId());
                LikeCarResponse likeCarResponse = new LikeCarResponse();
                IdDTO carid = new IdDTO();
                carid.setId(car.getId());
                likeCarResponse.setCar(carid);

                IdDTO accountid = new IdDTO();
                accountid.setId(account.getId());
                likeCarResponse.setAccount(accountid);

                if (check) {
                        likeCarResponse.setStatus(LikeStatus.LIKED);
                } else {
                        likeCarResponse.setStatus(LikeStatus.NOT_LIKED);
                }
                return likeCarResponse;
        }

        @Override
        public Object findAllLikeCarByAccountId(Long id, PagingRequest pagingRequest) {
                // TODO Auto-generated method stub
                return null;
        }

        @Override
        @Transactional
        public void likeCar(LikeCarRequest likeCarRequest) {
                // check account
                Account account = accountRepository.findById(likeCarRequest.getAccount().getId())
                                .orElseThrow(() -> new IllegalArgumentException("Account not found"));
                Car car = carRepository.findById(likeCarRequest.getCar().getId())
                                .orElseThrow(() -> new IllegalArgumentException("Car not found"));
                account.getLikeCars().add(car);
                accountRepository.save(account);

        }

}
