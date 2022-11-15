import React from "react";
export const Star = ({ count, saveRate, id, changeCount, changeSaveRate }) => {
  const handleMouseOver = () => {
    changeCount(id);
  };
  const handleMouseLeave = () => {
    changeCount(0);
  };
  const onChangeSaveRate = () => {
    changeSaveRate(id);
  };
  return (
    <svg height="25" width="23" data-rating="1">
      <polygon
        fill={id <= count || id <= saveRate ? "rgb(0, 165, 80)" : "#666"}
        points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        onClick={onChangeSaveRate}
      />
    </svg>
  );
};
