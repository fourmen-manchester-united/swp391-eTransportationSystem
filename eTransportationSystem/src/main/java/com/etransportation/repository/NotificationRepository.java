package com.etransportation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.etransportation.model.Notification;

public interface NotificationRepository extends JpaRepository<Notification, Long> {

}
