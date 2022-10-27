import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import GetDate from "../../../components/DateRange";
import Load from "../../../components/Load";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useDispatch } from "react-redux";
import { postBookCar } from "../../../store/actions/user.action";
import { useIsLogin } from "../../../hooks/useIsLogin";

function CarDetail() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { carID } = useParams();
    const { loading } = useIsLogin();
    const [carDetail, setCarDetail] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useStare(null);
    const numDate = moment(endDate, "DD/MM/YYYY").diff(
        moment(startDate, "DD/MM/YYYY"),
        "days"
    );
    useEffect(() => {
        const getAccountInfo = async () => {
            axios({
                method: "GET",
                url: `${process.env.REACT_APP_API_URL}/car/details/${carId}`,
            })
                .then((res) => {
                    setCarDetail(res.data);
                })
                .catch((err) => {
                    console.error(err);
                });
        };
        getAccountInfo();
    })
}