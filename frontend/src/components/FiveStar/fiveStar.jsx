import React from "react";
import { Star } from "../Star/star";

export const FiveStar = ({ saveRate, changeSaveRate }) => {
  const [count, SetCount] = React.useState(0);

  return (
    <>
      {[1, 2, 3, 4, 5].map((item, index) => (
        <Star
          key={item}
          id={item}
          count={count}
          saveRate={saveRate}
          changeCount={(value) => {
            SetCount(value);
          }}
          changeSaveRate={changeSaveRate}
        />
      ))}
    </>
  );
};
