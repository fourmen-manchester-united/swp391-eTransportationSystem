import React, { useState } from "react";
import { useEffect } from "react";
import { DateRange } from "react-date-range";
import * as locales from "react-date-range/dist/locale";
import "./styles.css";

function GetDate(props) {
  const [dates, setDates] = useState({});

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
      minDate={new Date()}
      moveRangeOnFirstSelection={false}
      ranges={[dates]}
      locale={locales["vi"]}
      rangeColors={["#00e1d6"]}
      {...props}
    />
  );
}

export default GetDate;
