package com.etransportation.filter;

import java.util.Arrays;
import java.util.DoubleSummaryStatistics;
import java.util.List;
import java.util.stream.DoubleStream;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Join;
import javax.persistence.criteria.Path;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.lang.Nullable;

import com.etransportation.enums.CarStatus;
import com.etransportation.model.Address;
import com.etransportation.model.Car;
import com.etransportation.model.City;
import com.etransportation.model.Feature;
import com.etransportation.payload.request.SearchAllCarByAddressRequest;

public class CarSpecification {

    public static Specification<Car> beweenPrice1(double min, double max) {
        return new Specification<Car>() {
            @Override
            @Nullable
            public Predicate toPredicate(Root<Car> root, CriteriaQuery<?> Query, CriteriaBuilder cb) {
                return cb.between(root.get(Car_.PRICE), min, max);
            }
        };
    }

    public static Specification<Car> beweenPrice2(double min, double max) {
        return (root, Query, cb) -> cb.between(root.get(Car_.PRICE), min, max);
    }

    public static Specification<Car> seatsIn1(Integer... seats) {
        return (root, Query, cb) -> cb.in(root.get(Car_.SEATS)).value(Arrays.asList(seats));
    }

    public static Specification<Car> seatsIn2(Object[] seats) {
        return (root, Query, cb) -> root.get(Car_.SEATS).in(seats);
    }

    public static Specification<Car> seatsIn3(List<Integer> seats) {
        return (root, Query, cb) -> root.get(Car_.SEATS).in(seats);
    }

    public static Specification<Car> seatsIn4(Integer... seats) {
        return (root, Query, cb) -> root.get(Car_.SEATS).in(seats);
    }

    public static Specification<Car> seatsIn5(Object... seats) {
        return (root, Query, cb) -> root.get(Car_.SEATS).in(seats);
    }

    public static Specification<Car> seatsOut(int... seats) {
        return (root, Query, cb) -> cb.not(root.get(Car_.SEATS).in(seats));
    }

    public static Specification<Car> sortPrice1() {
        return (root, Query, cb) -> Query.orderBy(cb.asc(root.get(Car_.PRICE))).getRestriction();
    }

    public static Specification<Car> getCarByStatusAndSortByPrice() {
        return (root, Query, cb) -> {
            Query.orderBy(cb.asc(root.get(Car_.PRICE)));
            return cb.equal(root.get(Car_.STATUS), CarStatus.ACTIVE);
        };

    }

    public static Specification<Car> getCarByAddress1() {
        return (root, Query, cb) -> {
            Path<Address> address = root.get(Car_.ADDRESS);
            Path<City> city = address.get("city");
            Path<String> code = city.get("code");
            return cb.equal(code, "BinhThuan");
        };

    }

    public static Specification<Car> getCarByAddress2() {
        return (root, Query, cb) -> {
            Join<Address, Car> carAddress = root.join(Car_.ADDRESS).join("city");
            return cb.equal(carAddress.get("code"), "BinhThuan");
        };

    }

    public static Specification<Car> getCarByFeature() {
        return (root, Query, cb) -> {
            Join<Feature, Car> carFeature = root.join("features");
            Query.distinct(true);
            return cb.in(carFeature.get("id")).value(Arrays.asList(new Long[] { 1L, 2L, 3L }));
        };
    }

    public static Specification<Car> getBeweenPrice123(SearchAllCarByAddressRequest price) {
        return (root, Query, cb) -> {
            return cb.between(root.get(Car_.PRICE), price.getPrice().get(0), price.getPrice().get(1));
        };
    }

    public static Specification<Car> getCarByBrand() {
        return (root, Query, cb) -> {
            return null;
        };
    }

    public static Specification<Car> beweenPrice6(double... seats) {
        return (root, Query, cb) -> {
            DoubleSummaryStatistics dt = DoubleStream.of(seats).summaryStatistics();
            return cb.between(root.get(Car_.PRICE), dt.getMin(), dt.getMax());
        };
    }

}
