package com.etransportation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.etransportation.model.Book;

public interface BookRepository extends JpaRepository<Book, Long> {

}
