package com.etransportation.service;

import com.etransportation.payload.request.BookRequest;
import com.etransportation.payload.request.ExtendBookCar;
import com.etransportation.payload.request.PagingRequest;
import com.etransportation.payload.request.ReviewCarRequest;
import com.etransportation.payload.response.BookDetailsInfoResponse;

public interface BookService {

    public void bookCar(BookRequest bookRequest);

    public Object findAllBookCarByAccountId(Long accountId, PagingRequest pagingRequest);

    public void cancelBookCar(Long bookId);

    public void reviewBookCar(ReviewCarRequest reviewCarRequest);

    public BookDetailsInfoResponse findBookDetails(Long bookId);

    public void extendBookCar(ExtendBookCar extendBookCar);
}
