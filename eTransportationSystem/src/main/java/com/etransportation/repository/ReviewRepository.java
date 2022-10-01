package com.etransportation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.etransportation.model.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {

}
