package com.etransportation.test.modeltest;

import java.util.EnumSet;
import java.util.Set;

import com.etransportation.enums.AccountGender;
import com.etransportation.enums.AccountStatus;
import com.etransportation.enums.BookStatus;
import com.etransportation.enums.CarStatus;
import com.etransportation.enums.DrivingLicenseStatus;
import com.etransportation.enums.ReviewStatus;
import com.etransportation.enums.RoleAccount;

import lombok.Data;

@Data
public class ListStatus {

    private Set<AccountGender> GenderStatus = EnumSet.allOf(AccountGender.class);
    private Set<AccountStatus> AccountStatus = EnumSet.allOf(AccountStatus.class);
    private Set<BookStatus> BookStatus = EnumSet.allOf(BookStatus.class);
    private Set<CarStatus> CarStatus = EnumSet.allOf(CarStatus.class);
    private Set<DrivingLicenseStatus> DrivingLicenseStatus = EnumSet.allOf(DrivingLicenseStatus.class);
    private Set<ReviewStatus> ReviewStatus = EnumSet.allOf(ReviewStatus.class);
    private Set<RoleAccount> Role = EnumSet.allOf(RoleAccount.class);

}
