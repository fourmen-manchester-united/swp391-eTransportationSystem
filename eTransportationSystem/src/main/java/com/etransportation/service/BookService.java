package com.etransportation.service;

import com.etransportation.payload.request.BookRequest;
import com.etransportation.payload.request.PagingRequest;

public interface BookService {

    public void bookCar(BookRequest bookRequest);

    public Object findAllBookCarByAccountId(Long accountId, PagingRequest pagingRequest);

    public void cancelBookCar(Long bookId);
}
