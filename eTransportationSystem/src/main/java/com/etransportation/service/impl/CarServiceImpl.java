package com.etransportation.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etransportation.model.Account;
import com.etransportation.model.Address;
import com.etransportation.model.Car;
import com.etransportation.model.CarBrand;
import com.etransportation.model.CarImage;
import com.etransportation.model.CarModel;
import com.etransportation.model.Feature;
import com.etransportation.model.Ward;
import com.etransportation.payload.request.CarRegisterRequest;
import com.etransportation.payload.response.CarBrandResponse;
import com.etransportation.repository.AccountRepository;
import com.etransportation.repository.AddressRepository;
import com.etransportation.repository.CarBrandRepository;
import com.etransportation.repository.CarImageRepository;
import com.etransportation.repository.CarModelRepository;
import com.etransportation.repository.CarRepository;
import com.etransportation.repository.FeatureRepository;
import com.etransportation.repository.WardRepository;
import com.etransportation.service.CarService;

@Service
public class CarServiceImpl implements CarService {

    @Autowired
    private CarBrandRepository carBrandRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private CarModelRepository carModelRepository;

    @Autowired
    private WardRepository wardRepository;

    @Autowired
    private FeatureRepository featureRepository;

    @Autowired
    private CarRepository carRepository;

    @Autowired
    private CarImageRepository carImageRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Override
    public List<CarBrandResponse> findAllCarBrands() {
        List<CarBrand> carBrand = carBrandRepository.findAll();
        List<CarBrandResponse> carBrandResponse = modelMapper.map(carBrand, new TypeToken<List<CarBrandResponse>>() {
        }.getType());
        return carBrandResponse;
    }

    @Override
    public void save(CarRegisterRequest carRegisterRequest) {
        Car car = modelMapper.map(carRegisterRequest, Car.class);

        // set id accout register to car
        Account account = accountRepository.findById(carRegisterRequest.getAccountId())
                .orElseThrow(() -> new IllegalArgumentException("Account not found"));

        car.setAccount(account);

        // set id model register to car
        CarModel carModel = carModelRepository.findById(carRegisterRequest.getModelId())
                .orElseThrow(() -> new IllegalArgumentException("Car model not found"));

        car.setModel(carModel);

        // set address register to car

        Ward ward = wardRepository.findById(carRegisterRequest.getWardId())
                .orElseThrow(() -> new IllegalArgumentException("Ward not found"));

        Address address = Address
                .builder()
                .ward(ward)
                .district(ward.getDistrict())
                .city(ward.getDistrict().getCity())
                .street(carRegisterRequest.getStreet())
                .build();
        car.setAddress(address);

        // set id feature register to car
        List<Feature> listFeature = new ArrayList<Feature>();
        Feature feature = new Feature();
        for (Long idFeature : carRegisterRequest.getFeaturesId()) {
            feature = featureRepository.findById(idFeature)
                    .orElseThrow(() -> new IllegalArgumentException("Feature not found"));
            listFeature.add(feature);
        }

        car.setFeatures(listFeature);

        // set image register to car
        List<CarImage> listCarImage = new ArrayList<CarImage>();
        CarImage carImage;
        for (String image : carRegisterRequest.getListCarImages()) {
            carImage = new CarImage();
            carImage.setImage(image);
            // carImage.setCar(car);
            listCarImage.add(carImage);

        }
        car.setCarImages(listCarImage);

        carRepository.save(car);

    }

}
