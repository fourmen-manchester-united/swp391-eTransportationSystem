package com.etransportation.service;

import com.etransportation.payload.request.BookRequest;

public interface BookService {

    public void bookCar(BookRequest bookRequest);
}
