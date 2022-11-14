package com.etransportation.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.etransportation.enums.CarStatus;
import com.etransportation.model.Car;
import com.etransportation.mybean.CarBean;
import com.etransportation.payload.dto.CarBrandDTO;
import com.etransportation.payload.dto.CarModelDTO;

@Repository
public interface CarRepository extends JpaRepository<Car, Long>, JpaSpecificationExecutor<Car> {

        List<Car> findAllByStatusAndAddress_City_Code(CarStatus status, String code, Pageable pageable);

        @Query(nativeQuery = true, value = "SELECT * FROM Car WHERE id in (SELECT c.id FROM Car c INNER JOIN address a on a.id = c.id INNER JOIN city ci on ci.id = a.city_id LEFT JOIN book b on b.car_id = c.id  WHERE c.status = ?1 AND ci.code = ?2 GROUP BY c.id ORDER BY COUNT(c.id) DESC OFFSET 0 ROWS)", countQuery = "SELECT count(*) FROM Car WHERE id in (SELECT c.id FROM Car c INNER JOIN address a on a.id = c.id INNER JOIN city ci on ci.id = a.city_id LEFT JOIN book b on b.car_id = c.id  WHERE c.status = ?1 AND ci.code = ?2 GROUP BY c.id ORDER BY COUNT(c.id) DESC OFFSET 0 ROWS)")
        Page<Car> findCarByCityCodeSortByCountBookOfCar(String CarStatus, String code, Pageable pageable);

        List<Car> findAllByAccount_Id(Long id);

        Page<Car> findAllByStatus(CarStatus status, Pageable pageable);

        @Query(nativeQuery = true, value = "SELECT * FROM Car WHERE id in (SELECT c.id FROM Car c INNER JOIN  book b on b.car_id = c.id WHERE c.status = :status GROUP BY c.id HAVING count(c.id) >= 1 ORDER BY count(c.id) DESC OFFSET 0 ROWS )", countQuery = "SELECT count(*) FROM Car WHERE id in (SELECT c.id FROM Car c INNER JOIN  book b on b.car_id = c.id WHERE c.status = :status GROUP BY c.id HAVING count(c.id) >= 1 ORDER BY count(c.id) DESC OFFSET 0 ROWS )")
        Page<Car> findCarByFamous(@Param("status") String statusCar, Pageable pageable);

        @Query("SELECT new com.etransportation.payload.dto.CarBrandDTO(br.id, br.name, count(br.id))"
                        + " FROM Car c JOIN c.address a JOIN a.city ci JOIN c.model mo JOIN mo.brand br"
                        + " WHERE ci.id = ?1 AND c.status = ?2 AND c.price BETWEEN ?3 AND ?4 AND c.transmission like ?5"
                        + " AND c.fuel like ?6 AND c.seats in ?7 AND c.yearOfManufacture BETWEEN ?8 AND ?9"
                        + " GROUP BY br.id, br.name"
                        + " ORDER BY count(br.id) DESC")
        List<CarBrandDTO> findAllBrandByAddressCityIdAndCarStatus(Long id, CarStatus status, double min, double max,
                        String transmission, String fuel, Integer[] seats, int minyear, int maxyear);

        @Query("SELECT new com.etransportation.payload.dto.CarModelDTO(mo.id, mo.name, count(mo.id))"
                        + " FROM Car c JOIN c.address a JOIN a.city ci JOIN c.model mo JOIN mo.brand br"
                        + " WHERE ci.id = ?1 AND c.status = ?2 AND c.price BETWEEN ?3 AND ?4 AND c.transmission like ?5"
                        + " AND c.fuel like ?6 AND c.seats in ?7 AND c.yearOfManufacture BETWEEN ?8 AND ?9"
                        + " GROUP BY mo.id, mo.name, br.id"
                        + " HAVING br.id = ?10"
                        + " ORDER BY count(mo.id) DESC")
        List<CarModelDTO> findAllModelByAddressCityIdAndCarStatus(Long id, CarStatus status, double min, double max,
                        String transmission, String fuel, Integer[] seats, int minyear, int maxyear,
                        Long brand_Id);

        Page<Car> findAllByLikeAccounts_Id(Long accountId, Pageable pageable);

}
