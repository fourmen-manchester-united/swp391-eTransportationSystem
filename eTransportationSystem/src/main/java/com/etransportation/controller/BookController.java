package com.etransportation.controller;

import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.etransportation.payload.request.BookRequest;
import com.etransportation.payload.request.ExtendBookCar;
import com.etransportation.payload.request.PagingRequest;
import com.etransportation.payload.request.ReviewCarRequest;
import com.etransportation.payload.response.BookShortInfoResponse;
import com.etransportation.service.BookService;
import com.etransportation.service.CarService;

@RestController
@RequestMapping("/api/book")
public class BookController {

    @Autowired
    private BookService bookService;

    @PostMapping
    public ResponseEntity<?> bookCar(@Valid @RequestBody BookRequest bookRequest, Errors errors) {
        if (errors.hasErrors()) {
            List<String> errorList = errors.getAllErrors().stream().map(ObjectError::getDefaultMessage)
                    .collect(Collectors.toList());
            return ResponseEntity.badRequest().body(errorList);
        }
        bookService.bookCar(bookRequest);
        return ResponseEntity.ok("Book car successfully");
    }

    @GetMapping("/{account-id}")
    public ResponseEntity<?> findAllBookCarByAccountId(@PathVariable(name = "account-id") Long accountId,
            PagingRequest pagingRequest) {
        return ResponseEntity.ok(bookService.findAllBookCarByAccountId(accountId, pagingRequest));
    }

    @PutMapping("/cancel/{book-id}")
    public ResponseEntity<?> cancelBookCar(@PathVariable(name = "book-id") Long bookId) {
        bookService.cancelBookCar(bookId);
        return ResponseEntity.ok("Cancel book car successfully");
    }

    @PostMapping("/review")
    public ResponseEntity<?> reviewCar(@RequestBody ReviewCarRequest reviewCarRequest) {
        bookService.reviewBookCar(reviewCarRequest);
        return ResponseEntity.ok("Review car successfully");
    }

    @GetMapping("/details/{book-id}")
    public ResponseEntity<?> findBookDetails(@PathVariable(name = "book-id") Long id) {
        return ResponseEntity.ok(bookService.findBookDetails(id));
    }

    @PutMapping("/extend")
    public ResponseEntity<?> extendBookCar(@RequestBody ExtendBookCar extendBookCar) {
        bookService.extendBookCar(extendBookCar);
        return ResponseEntity.ok("extend book car successfully");
    }

}
