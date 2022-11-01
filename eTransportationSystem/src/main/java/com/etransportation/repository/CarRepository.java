package com.etransportation.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.etransportation.enums.CarStatus;
import com.etransportation.model.Car;
import com.etransportation.payload.dto.CarBrandDTO;
import com.etransportation.payload.dto.CarModelDTO;

@Repository
public interface CarRepository extends JpaRepository<Car, Long>, JpaSpecificationExecutor<Car> {

        List<Car> findAllByStatusAndAddress_City_Code(CarStatus status, String code, Pageable pageable);

        List<Car> findAllByAccount_Id(Long id);

        Page<Car> findAllByStatus(CarStatus status, Pageable pageable);

        @Query("SELECT new com.etransportation.payload.dto.CarBrandDTO(br.id, br.name, count(br.id))"
                        + " FROM Car c JOIN c.address a JOIN a.city ci JOIN c.model mo JOIN mo.brand br JOIN c.features f"
                        + " WHERE ci.id = ?1 AND c.status = ?2 AND c.price BETWEEN ?3 AND ?4 AND c.transmission like ?5"
                        + " AND c.fuel like ?6 AND c.seats in ?7 AND c.yearOfManufacture BETWEEN ?8 AND ?9"
                        + " AND f.id in ?10"
                        + " GROUP BY br.id, br.name "
                        + " ORDER BY count(br.id) DESC")
        List<CarBrandDTO> findAllBrandByAddressCityIdAndCarStatus(Long id, CarStatus status, double min, double max,
                        String transmission, String fuel, Integer[] seats, int minyear, int maxyear, Long[] feature_Id);

        @Query("SELECT new com.etransportation.payload.dto.CarModelDTO(mo.id, mo.name, count(mo.id))"
                        + " FROM Car c JOIN c.address a JOIN a.city ci JOIN c.model mo JOIN mo.brand br JOIN c.features f"
                        + " WHERE ci.id = ?1 AND c.status = ?2 AND c.price BETWEEN ?3 AND ?4 AND c.transmission like ?5"
                        + " AND c.fuel like ?6 AND c.seats in ?7 AND c.yearOfManufacture BETWEEN ?8 AND ?9"
                        + " AND f.id in ?10"
                        + " GROUP BY mo.id, mo.name, br.id"
                        + " HAVING br.id = ?11"
                        + " ORDER BY count(mo.id) DESC")
        List<CarModelDTO> findAllModelByAddressCityIdAndCarStatus(Long id, CarStatus status, double min, double max,
                        String transmission, String fuel, Integer[] seats, int minyear, int maxyear, Long[] feature_Id,
                        Long brand_Id);

}
