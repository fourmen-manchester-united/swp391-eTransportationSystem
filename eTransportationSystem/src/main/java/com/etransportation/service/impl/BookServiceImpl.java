package com.etransportation.service.impl;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Random;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import com.etransportation.enums.BookStatus;
import com.etransportation.enums.ReviewStatus;
import com.etransportation.model.Book;
import com.etransportation.model.Review;
import com.etransportation.payload.request.BookRequest;
import com.etransportation.payload.request.PagingRequest;
import com.etransportation.payload.request.ReviewCarRequest;
import com.etransportation.payload.response.BookShortInfoResponse;
import com.etransportation.payload.response.PagingResponse;
import com.etransportation.repository.AccountRepository;
import com.etransportation.repository.BookRepository;
import com.etransportation.repository.CarRepository;
import com.etransportation.repository.ReviewRepository;
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

    @Autowired
    private ReviewRepository reviewRepository;

    @Override
    @Transactional
    public void bookCar(BookRequest bookRequest) {
        Calendar cal = Calendar.getInstance();
        cal.set(Calendar.HOUR_OF_DAY, 0);

        accountRepository.findById(bookRequest.getAccount().getId())
                .orElseThrow(() -> new IllegalArgumentException("Account not found"));

        carRepository.findById(bookRequest.getCar().getId())
                .orElseThrow(() -> new IllegalArgumentException("Car not found"));

        if (!bookRequest.getStartDate().after(cal.getTime()) || !bookRequest.getEndDate().after(cal.getTime())) {
            throw new IllegalArgumentException("book date is not before today");
        }

        if (!bookRequest.getStartDate().equals(bookRequest.getEndDate())) {
            if (bookRequest.getStartDate().after(bookRequest.getEndDate())) {
                throw new IllegalArgumentException("book end date is not before start date");
            }
        }

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

    @Override
    @Transactional
    public Object findAllBookCarByAccountId(Long accountId, PagingRequest pagingRequest) {
        Pageable pageable = PageRequest.of(pagingRequest.getPage() - 1, pagingRequest.getSize());
        Page<Book> books = bookRepository.findAllByAccount_Id(accountId, pageable);

        List<BookShortInfoResponse> listBookShortInfoResponse = books.getContent().stream().map(b -> {
            BookShortInfoResponse bookShortInfoResponse = modelMapper.map(b, BookShortInfoResponse.class);
            bookShortInfoResponse.setCarName(b.getCar().getModel().getName() + " " + b.getCar().getYearOfManufacture());
            bookShortInfoResponse.setCarImage(
                    b.getCar().getCarImages().get(new Random().nextInt(b.getCar().getCarImages().size())).getImage());
            long timeDiff = Math.abs(new Date().getTime() - b.getBookDate().getTime());
            long historyTime = TimeUnit.DAYS.convert(timeDiff, TimeUnit.MILLISECONDS);
            if (historyTime > 30 && historyTime < 365) {
                bookShortInfoResponse.setHistoryTime(historyTime / 30 + " tháng trước");
            } else if (historyTime <= 30) {
                bookShortInfoResponse.setHistoryTime(historyTime + " ngày trước");
            } else if (historyTime >= 365) {
                bookShortInfoResponse.setHistoryTime(historyTime / 365 + " năm trước");
            }

            return bookShortInfoResponse;
        }).collect(Collectors.toList());

        PagingResponse<BookShortInfoResponse> pagingResponse = PagingResponse
                .<BookShortInfoResponse>builder()
                .page(books.getPageable().getPageNumber() + 1)
                .size(books.getSize())
                .totalPage(books.getTotalPages())
                .totalItem(books.getTotalElements())
                .contends(listBookShortInfoResponse)
                .build();

        return pagingResponse;
    }

    @Override
    @Transactional
    public void cancelBookCar(Long bookId) {
        Book book = bookRepository.findById(bookId).orElseThrow(() -> new IllegalArgumentException("Book not found"));
        book.setStatus(BookStatus.CANCEL);
        bookRepository.save(book);
    }

    @Override
    @Transactional
    public void reviewBookCar(@RequestBody ReviewCarRequest reviewCarRequest) {
        Book book = bookRepository.findById(reviewCarRequest.getBook().getId())
                .orElseThrow(() -> new IllegalArgumentException("Book not found"));

        Review review = modelMapper.map(reviewCarRequest, Review.class);
        review.setStatus(ReviewStatus.ACTIVE);
        review.setAccount(book.getAccount());
        review.setCar(book.getCar());
        reviewRepository.save(review);

    }

}
