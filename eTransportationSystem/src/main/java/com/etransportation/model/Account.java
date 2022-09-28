package com.etransportation.model;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.etransportation.enums.AccountStatus;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "account")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Account extends Base {

    private String name;
    private String username;
    private String password;
    private String glpx;
    private String email;
    private String phone;
    private String image;
    private Double balance;
    private AccountStatus status;

    // relationship

    @ManyToMany
    @JoinTable(name = "account_role", joinColumns = @JoinColumn(name = "account_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<role> roles = new HashSet<>();

    @OneToMany(mappedBy = "account")
    private List<Book> books = new ArrayList<>();

    @OneToMany(mappedBy = "account")
    private List<Car> cars = new ArrayList<>();

    @OneToMany(mappedBy = "account")
    private List<Notification> notifications = new ArrayList<>();

    @OneToMany(mappedBy = "account")
    private List<Review> reviews = new ArrayList<>();

    // getter and setter
}
