package com.etransportation.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "register")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Register extends Base {

    private Date registerDate;

    // relationship

    // private Car carId;
    // private Account accountSupplierId;

    // getter and setter

}
