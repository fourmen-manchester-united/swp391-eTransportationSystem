import React, { useState } from "react";
import { useEffect } from "react";
import { DateRange } from "react-date-range";
import * as locales from "react-date-range/dist/locale";
import "./styles.css";

function GetDate(props) {
  const [dates, setDates] = useState({});
  // const test = [new Date(), new Date("2022-11-01")];
  useEffect(() => {
    setDates({
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    });
  }, []);

  const handleDateChange = (item) => {
    props.onDateChange(item.selection);
    setDates(item.selection);
  };

  return (
    <DateRange
      dateDisplayFormat={"dd/MM/yyyy"}
      onChange={handleDateChange}
      moveRangeOnFirstSelection={false}
      ranges={[dates]}
      // disabledDates={test}
      locale={locales["vi"]}
      rangeColors={["#00a550"]}
      {...props}
    />
  );
}

export default GetDate;
