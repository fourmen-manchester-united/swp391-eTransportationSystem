package com.etransportation.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.etransportation.payload.request.BookRequest;
import com.etransportation.service.BookService;

@RestController
@RequestMapping("/api/book")
public class BookController {

    @Autowired
    private BookService bookService;

    @PostMapping
    public ResponseEntity<?> bookCar(@RequestBody BookRequest bookRequest) {
        bookService.bookCar(bookRequest);
        return ResponseEntity.ok("Book car successfully");
    }

}
