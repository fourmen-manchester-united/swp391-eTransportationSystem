package com.etransportation.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.UniqueConstraint;

import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.etransportation.enums.VoucherStatus;
import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "voucher", uniqueConstraints = {
        @UniqueConstraint(columnNames = { "code" }) })
@Data
@EqualsAndHashCode(callSuper = false)
@EntityListeners(AuditingEntityListener.class)
public class Voucher extends Base {

    @Column(columnDefinition = "varchar(50)")
    private String code;

    private Integer percentage;

    private Integer maxDiscount;
    private String image;

    @Column(columnDefinition = "nvarchar(MAX)")
    private String discription;

    @JsonFormat(pattern = "yyyy-MM-dd", shape = JsonFormat.Shape.STRING)
    @Temporal(TemporalType.DATE)
    private Date startDate;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", shape = JsonFormat.Shape.STRING)
    @Temporal(TemporalType.DATE)
    private Date endDate;

    @Enumerated(EnumType.STRING)
    @Column(columnDefinition = "varchar(15)")
    private VoucherStatus status;

    // relationship

    @OneToMany(mappedBy = "voucher", fetch = FetchType.LAZY)
    private List<Book> books = new ArrayList<Book>();

    // getter and setter

    @JsonFormat(pattern = "yyyy-MM-dd", shape = JsonFormat.Shape.STRING)
    @Temporal(TemporalType.DATE)
    @CreatedDate
    private Date createdDate;

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
