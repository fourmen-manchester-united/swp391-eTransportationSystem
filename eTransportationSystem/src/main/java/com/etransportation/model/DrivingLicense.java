package com.etransportation.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.etransportation.enums.DrivingLicenseStatus;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "drivingLicense")
@Data
@EqualsAndHashCode(callSuper = false)
public class DrivingLicense extends Base {

    @Column(nullable = false)
    private Long numberDrivingLicense;

    @Column(columnDefinition = "nvarchar(50)")
    private String name;
    private Date birthDate;
    private String imageFront;

    @Enumerated(EnumType.STRING)
    @Column(columnDefinition = "varchar(20)")
    private DrivingLicenseStatus status;

    // relationship

    @OneToOne
    @JoinColumn(name = "id", referencedColumnName = "id")
    @MapsId
    private Account account;
}
