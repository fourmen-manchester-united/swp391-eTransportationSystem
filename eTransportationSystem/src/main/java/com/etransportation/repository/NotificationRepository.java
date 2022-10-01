package com.etransportation.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.etransportation.model.Notification;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, Long> {

}
