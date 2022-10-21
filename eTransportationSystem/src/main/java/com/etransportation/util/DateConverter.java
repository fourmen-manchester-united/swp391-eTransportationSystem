package com.etransportation.util;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.temporal.ChronoUnit;
import java.time.temporal.Temporal;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.LongStream;

public class DateConverter {

    public static List<Date> getDatesBetween(
            Date startDate, Date endDate) {
        LocalDate startDateLocalDate = convertToLocalDateViaMilisecond(startDate);
        LocalDate endDateLocalDate = convertToLocalDateViaMilisecond(endDate).plusDays(1);
        long numOfDaysBetween = ChronoUnit.DAYS.between(startDateLocalDate, endDateLocalDate);
        return LongStream.range(0, numOfDaysBetween)
                .mapToObj(startDateLocalDate::plusDays)
                .map(DateConverter::convertToDateViaInstant)
                .collect(Collectors.toList());
    }

    public static LocalDate convertToLocalDateViaMilisecond(Date dateToConvert) {
        return Instant.ofEpochMilli(dateToConvert.getTime())
                .atZone(ZoneId.systemDefault())
                .toLocalDate();
    }

    public static Date convertToDateViaInstant(LocalDate dateToConvert) {
        return java.util.Date.from(dateToConvert.atStartOfDay()
                .atZone(ZoneId.systemDefault())
                .toInstant());
    }
}
