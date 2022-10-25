package com.etransportation.payload.request;

import java.util.Date;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Data
public class VoucherRequest {

    @NotEmpty(message = "code not be empty")
    @Length(min = 2, max = 50, message = "Voucher code > 2 ")
    private String code;

    @NotNull(message = "Voucher value must not be null")
    @Min(value = 2, message = "Voucher percentage > 2")
    private int percentage;

    @NotNull(message = "Voucher start date must not be null")
    @Min(value = 2, message = "Voucher maxDiscount > 2")
    private int maxDiscount;

    private String discription;

    @NotNull(message = "Voucher startDate must not be null")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date startDate;

    @NotNull(message = "Voucher endDate must not be null")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date endDate;

}
