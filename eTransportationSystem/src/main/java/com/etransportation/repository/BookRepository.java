package com.etransportation.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.etransportation.model.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

    Page<Book> findAllByAccount_Id(Long id, Pageable pageable);
}
