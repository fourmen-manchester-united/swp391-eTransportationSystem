package com.etransportation.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import com.etransportation.enums.AccountGender;
import com.etransportation.enums.AccountStatus;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "account")
@Data
@EqualsAndHashCode(callSuper = false)
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Account extends Base {

    @Column(columnDefinition = "nvarchar(50)")
    private String name;

    @Column(columnDefinition = "varchar(100)", unique = true, nullable = false)
    private String username;

    @Column(columnDefinition = "varchar(100)", nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(columnDefinition = "varchar(15)")
    private AccountGender gender;

    private Date birthDate;

    @Column(columnDefinition = "varchar(30)")
    private String email;

    @Column(columnDefinition = "varchar(20)")
    private String phone;
    private String avatar;
    private String thumnail;
    private Double balance;
    private Date joinDate;

    @Enumerated(EnumType.STRING)
    @Column(columnDefinition = "varchar(15)")
    private AccountStatus status;

    // relationship

    @ManyToMany
    @JoinTable(name = "account_role", joinColumns = @JoinColumn(name = "account_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    @OneToMany(mappedBy = "account")
    private List<Book> books = new ArrayList<>();

    @OneToMany(mappedBy = "account")
    private List<Car> cars = new ArrayList<>();

    @OneToMany(mappedBy = "account")
    private List<Notification> notifications = new ArrayList<>();

    @OneToMany(mappedBy = "account")
    private List<Review> reviews = new ArrayList<>();

    @OneToOne(mappedBy = "account")
    @PrimaryKeyJoinColumn
    private DrivingLicense drivingLicense;

    // getter and setter
}
