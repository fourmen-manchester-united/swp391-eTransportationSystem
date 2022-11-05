package com.etransportation.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.etransportation.enums.BookStatus;
import com.etransportation.enums.CarStatus;
import com.etransportation.model.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

    Page<Book> findAllByAccount_Id(Long id, Pageable pageable);

    Boolean existsByEndDateGreaterThanAndCar_IdAndStatusAndStartDateLessThanEqualAndStartDateGreaterThanEqual(
            Date now, Long carId,
            BookStatus status, Date extentDate, Date endDateOfBook);

}
