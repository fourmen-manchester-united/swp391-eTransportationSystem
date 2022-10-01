package com.etransportation.model;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.etransportation.enums.RoleAccount;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "role")
@Data
@EqualsAndHashCode(callSuper = false)
public class Role extends Base {

    @Enumerated(EnumType.STRING)
    private RoleAccount name;

    // relationship

    @ManyToMany(mappedBy = "roles")
    private List<Account> accounts = new ArrayList<>();

    // getter and setter
}
