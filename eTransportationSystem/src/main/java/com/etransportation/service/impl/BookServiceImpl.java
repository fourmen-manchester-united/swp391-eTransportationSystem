package com.etransportation.service.impl;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.etransportation.enums.BookStatus;
import com.etransportation.model.Book;
import com.etransportation.payload.request.BookRequest;
import com.etransportation.repository.AccountRepository;
import com.etransportation.repository.BookRepository;
import com.etransportation.repository.CarRepository;
import com.etransportation.repository.VoucherRepository;
import com.etransportation.service.BookService;

@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private CarRepository carRepository;

    @Autowired
    private VoucherRepository voucherRepository;

    @Override
    @Transactional
    public void bookCar(BookRequest bookRequest) {
        accountRepository.findById(bookRequest.getAccount().getId())
                .orElseThrow(() -> new IllegalArgumentException("Account not found"));

        carRepository.findById(bookRequest.getCar().getId())
                .orElseThrow(() -> new IllegalArgumentException("Car not found"));

        Book book = modelMapper.map(bookRequest, Book.class);

        if (book.getVoucher() != null) {
            if (book.getVoucher().getId() == null) {
                book.setVoucher(null);
            } else {
                voucherRepository.findById(book.getVoucher().getId())
                        .orElseGet(() -> {
                            book.setVoucher(null);
                            return null;
                        });
            }
        }

        book.setStatus(BookStatus.SUCCESS);
        bookRepository.save(book);
    }

}
