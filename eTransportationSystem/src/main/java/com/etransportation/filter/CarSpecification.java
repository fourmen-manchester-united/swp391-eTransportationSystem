package com.etransportation.filter;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.DoubleSummaryStatistics;
import java.util.IntSummaryStatistics;
import java.util.List;
import java.util.stream.DoubleStream;
import java.util.stream.IntStream;
import java.util.stream.Stream;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Join;
import javax.persistence.criteria.Path;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.apache.commons.lang3.ArrayUtils;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.lang.Nullable;

import com.etransportation.enums.CarStatus;
import com.etransportation.model.Address;
import com.etransportation.model.Car;
import com.etransportation.model.CarBrand;
import com.etransportation.model.CarModel;
import com.etransportation.model.City;
import com.etransportation.model.Feature;
import com.etransportation.payload.request.filterSearchCar;

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

    public static Specification<Car> getCarByAddress3() {
        return (root, Query, cb) -> {
            return cb.equal(root.get("address").get("city").get("code"), "BinhThuan");
        };

    }

    public static Specification<Car> getCarByFeature() {
        return (root, Query, cb) -> {
            Join<Feature, Car> carFeature = root.join("features");
            Query.distinct(true);
            return cb.in(carFeature.get("id")).value(Arrays.asList(new Long[] { 1L, 2L, 3L }));
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

    public static Specification<Car> filterSearchCar(filterSearchCar filter) {
        return (root, Query, cb) -> {
            // khoi tao List<Predicate>
            List<Predicate> predicates = new ArrayList<>();
            // get all car STATUS is ACTIVE
            predicates.add(cb.equal(root.get(Car_.STATUS), CarStatus.ACTIVE));
            // get all car is between price
            if (filter.getPriceBetween() != null && filter.getPriceBetween().length == 2) {
                DoubleSummaryStatistics dt = DoubleStream
                        .of(ArrayUtils.toPrimitive(filter.getPriceBetween()))
                        .summaryStatistics();
                predicates.add(cb.between(root.get(Car_.PRICE), dt.getMin(), dt.getMax()));
            }
            // get option car is sort price
            if (filter.getSortPriceType() != null) {
                switch (filter.getSortPriceType()) {
                    case ASC:
                        Query.orderBy(cb.asc(root.get(Car_.PRICE)));
                        break;
                    case DESC:
                        Query.orderBy(cb.desc(root.get(Car_.PRICE)));
                        break;
                    default:
                        break;
                }
            }
            // get car is seats in []
            if (filter.getSeatsIn() != null && filter.getSeatsIn().length != 0) {
                predicates.add(cb.in(root.get(Car_.SEATS)).value(Arrays.asList(filter.getSeatsIn())));

            }
            // get car is fuel
            if (filter.getFuel() != null && !filter.getFuel().isEmpty()) {
                switch (filter.getFuel()) {
                    case "Xăng":
                        predicates.add(cb.equal(root.get(Car_.FUEL), filter.getFuel()));
                        break;
                    case "Dầu diesel":
                        predicates.add(cb.equal(root.get(Car_.FUEL), filter.getFuel()));
                        break;
                    default:
                        break;
                }
            }
            // get car is between YearOfManufacture
            // min max all
            if (filter.getYearOfManufactureBetween() != null && filter.getYearOfManufactureBetween().length == 2) {
                int max = Arrays.asList(filter.getYearOfManufactureBetween()).stream().mapToInt(Integer::intValue).max()
                        .getAsInt();
                int min = Arrays.asList(filter.getYearOfManufactureBetween()).stream().mapToInt(Integer::intValue).min()
                        .getAsInt();

                int max2 = Arrays.asList(filter.getYearOfManufactureBetween()).stream().max(Comparator.naturalOrder())
                        .get();
                int min2 = Arrays.asList(filter.getYearOfManufactureBetween()).stream().min(Comparator.naturalOrder())
                        .get();

                IntSummaryStatistics tt = IntStream.of(ArrayUtils.toPrimitive(filter.getYearOfManufactureBetween()))
                        .summaryStatistics();

                predicates.add(cb.between(root.get(Car_.YEAR), tt.getMin(), tt.getMax()));
            }
            // get car is Transmission
            if (filter.getTransmission() != null && !filter.getTransmission().isEmpty()) {
                switch (filter.getTransmission()) {
                    case "Số tự động":
                        predicates.add(cb.equal(root.get(Car_.TRANSMISSION), filter.getTransmission()));
                        break;
                    case "Số sàn":
                        predicates.add(cb.equal(root.get(Car_.TRANSMISSION), filter.getTransmission()));
                        break;

                    default:
                        break;
                }
            }

            // get car is Brand_Id and Model_Id_In
            if (filter.getBrand_Id() != null && filter.getBrand_Id() > 0) {

                // cach 1:
                // Join<CarBrand, Car> carModel = root.join(Car_.MODEL).join(Model_.BRAND);
                // predicates.add(cb.equal(carModel.get(Brand_.ID), filter.getBrand_Id()));

                // cach 2:
                predicates.add(cb.equal(root.get(Car_.MODEL).get(Model_.BRAND).get(Brand_.ID), filter.getBrand_Id()));

                // get model in list
                if (filter.getModel_Id_In() != null && filter.getModel_Id_In().length != 0) {
                    predicates.add(
                            cb.in(root.get(Car_.MODEL).get(Model_.ID)).value(Arrays.asList(filter.getModel_Id_In())));

                }
            }

            if (filter.getFeature_Id_in() != null && filter.getFeature_Id_in().length != 0) {
                Join<Feature, Car> carFeature = root.join(Car_.FEATURES);
                predicates.add(
                        cb.in(carFeature.get(Feature_.ID))
                                .value(Arrays.asList(filter.getFeature_Id_in())));
            }

            if (filter.getCity() != null && filter.getCity().getId() != null && filter.getCity().getId() != 0) {
                predicates.add(
                        cb.equal(root.get(Car_.ADDRESS).get(Address_.CITY).get(City_.ID), filter.getCity().getId()));
            }

            return cb.and(predicates.toArray(new Predicate[0]));
        };
    }

}
