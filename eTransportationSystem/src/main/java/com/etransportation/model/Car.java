package com.etransportation.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PostLoad;
import javax.persistence.PostPersist;
import javax.persistence.PostRemove;
import javax.persistence.PostUpdate;
import javax.persistence.PrePersist;
import javax.persistence.PreRemove;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.etransportation.enums.CarStatus;
import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "car")
@Data
@EqualsAndHashCode(callSuper = true)
@EntityListeners(AuditingEntityListener.class)
public class Car extends Base {

    private Integer seats;

    private Double price;

    @Column(columnDefinition = "nvarchar(30)")
    private String fuel;

    @Column(columnDefinition = "varchar(15)")
    private String licensePlates;

    @Column(columnDefinition = "nvarchar(MAX)")
    private String description;

    @Column(columnDefinition = "nvarchar(50)")
    private String transmission;

    private Integer yearOfManufacture;

    private Integer saleWeek;

    private Integer saleMonth;

    private Double longitude;

    private Double latitude;

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

    @JsonFormat(pattern = "yyyy-MM-dd", shape = JsonFormat.Shape.STRING)
    @Temporal(TemporalType.DATE)
    @CreatedDate
    private Date registerDate;

    @Column(columnDefinition = "varchar(20)")
    @Enumerated(EnumType.STRING)
    private CarStatus status;

    // relationship

    @ManyToMany(mappedBy = "likeCars", fetch = FetchType.LAZY)
    private List<Account> likeAccounts = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_supplier_id", nullable = false)
    private Account account;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "model_id", nullable = false)
    private CarModel model;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "id", referencedColumnName = "id")
    @MapsId
    private Address address;

    @OneToMany(mappedBy = "car", fetch = FetchType.LAZY)
    private List<Book> books = new ArrayList<Book>();

    @OneToMany(mappedBy = "car", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CarImage> carImages = new ArrayList<CarImage>();

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "car_feature", joinColumns = @JoinColumn(name = "car_id"), inverseJoinColumns = @JoinColumn(name = "feature_id"))
    private Set<Feature> features = new HashSet<>();

    // getter and setter

    @PrePersist
    private void prePersist() {
        this.carImages.forEach(ig -> ig.setCar(this));

    }

    @PreRemove
    private void preRemove() {

    }

    @PreUpdate
    private void preUpdate() {

    }

    @PostPersist
    private void postPersist() {

    }

    @PostRemove
    private void postRemove() {

    }

    @PostUpdate
    private void postUpdate() {

    }

    @PostLoad
    private void postLoad() {
        // sau khi get data rui luu lai vao db
        // fuel = "heheheheheh";
        // this.description = "hohohohoohoh";
        // this.licensePlates = "hahahahahah";
    }

}
