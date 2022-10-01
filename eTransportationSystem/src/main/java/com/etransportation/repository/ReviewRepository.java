package com.etransportation.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.etransportation.model.Review;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {

}
