package com.etransportation.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "notification")
@Data
@EqualsAndHashCode(callSuper = true)
@EntityListeners(AuditingEntityListener.class)
public class Notification extends Base {

    @Column(columnDefinition = "nvarchar(MAX)")
    private String discription;

    @Column(columnDefinition = "nvarchar(255)")
    private String shortDiscription;

    @Column(columnDefinition = "nvarchar(255)")
    private String title;

    private Boolean isRead;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", shape = JsonFormat.Shape.STRING)
    @Column(columnDefinition = "datetime2(0)")
    @CreatedDate
    private Date createdDate;

    // relationship
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_id")
    private Account account;

    // getter and setter

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", shape = JsonFormat.Shape.STRING)
    @Column(columnDefinition = "datetime2(0)")
    @LastModifiedDate
    private Date modifiedDate;

    @Column(columnDefinition = "nvarchar(50)")
    @CreatedBy
    private String createdBy;

    @Column(columnDefinition = "nvarchar(50)")
    @LastModifiedBy
    private String modifiedBy;

}
