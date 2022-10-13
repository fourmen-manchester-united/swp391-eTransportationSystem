package com.etransportation.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.etransportation.enums.CarStatus;
import com.etransportation.model.Address;
import com.etransportation.model.City;
import com.etransportation.mybean.CityBean;

@Repository
public interface CityRepository extends JpaRepository<City, Long> {

    Optional<City> findByCode(String code);

    List<City> findTop10ByOrderByIdAsc();

    @Query("SELECT new com.etransportation.payload.response.CityResponse(c.id, c.code, c.name, c.image, count(c.id)) FROM City c JOIN c.addresss a JOIN a.car car WHERE car.status = ?1 group by c.id, c.code, c.name, c.image")
    List<?> findAllByCarStatus(CarStatus status);
}
