package com.etransportation.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.etransportation.enums.RoleAccount;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "role")
@Data
@EqualsAndHashCode(callSuper = true)
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Role extends Base {

    @Column(columnDefinition = "varchar(50)")
    @Enumerated(EnumType.STRING)
    private RoleAccount name;

    // relationship

    @ManyToMany(mappedBy = "roles", fetch = FetchType.LAZY)
    private List<Account> accounts = new ArrayList<>();

    // getter and setter
}
