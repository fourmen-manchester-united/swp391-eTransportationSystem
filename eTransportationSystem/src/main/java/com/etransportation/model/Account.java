package com.etransportation.model;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Entity;
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

    // private Set<role> roles = new HashSet<>();
    // private List<Book> books = new ArrayList<>();
    // private List<Register> registers = new ArrayList<>();
    // private List<Notification> notifications = new ArrayList<>();
    // private List<Review> reviews = new ArrayList<>();

    // getter and setter
}
