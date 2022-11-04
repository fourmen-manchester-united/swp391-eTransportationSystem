package com.etransportation.service.impl;

import java.util.List;
import java.util.Random;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
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
import com.etransportation.payload.response.CarShortInfoResponse;
import com.etransportation.payload.response.LikeCarResponse;
import com.etransportation.payload.response.PagingResponse;
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
                Pageable pageable = PageRequest.of(pagingRequest.getPage() - 1, pagingRequest.getSize());

                Page<Car> cars = carRepository.findAllByLikeAccounts_Id(id, pageable);

                List<CarShortInfoResponse> listCarShortInfoResponse = cars.getContent().stream().map(c -> {
                        CarShortInfoResponse carShortInfoResponse = modelMapper.map(c, CarShortInfoResponse.class);
                        carShortInfoResponse.setAddressInfo(c.getAddress().getDistrict().getName() + ", "
                                        + c.getAddress().getCity().getName());
                        carShortInfoResponse.setName(c.getModel().getName() + " " + c.getYearOfManufacture());
                        if (c.getCarImages().size() == 0) {
                                carShortInfoResponse.setCarImage("https://n1-cstg.mioto.vn/g/2018/03/17/16/52.jpg");
                        } else {
                                carShortInfoResponse.setCarImage(c.getCarImages()
                                                .get(new Random().nextInt(c.getCarImages().size()))
                                                .getImage());
                        }

                        return carShortInfoResponse;
                }).collect(Collectors.toList());

                PagingResponse<CarShortInfoResponse> pagingResponse = PagingResponse
                                .<CarShortInfoResponse>builder()
                                .page(cars.getPageable().getPageNumber() + 1)
                                .size(cars.getSize())
                                .totalPage(cars.getTotalPages())
                                .totalItem(cars.getTotalElements())
                                .contends(listCarShortInfoResponse)
                                .build();

                return pagingResponse;
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
