import axios from "axios";
import React, { useEffect, useState } from "react";

function City() {
  const [listCity, setListCity] = useState();
  console.log("🚀listCity", listCity);
  useEffect(() => {
    const getAccountInfo = async () => {
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/city`,
      })
        .then((res) => {
          console.log("🚀res", res);
          //   setListCity(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    getAccountInfo();
    // eslint-disable-next-line
  }, []);
  return <div>City</div>;
}

export default City;
