import React from "react";
import BannerHome from "../bannerHome";
import City from "../city";
import CarByCity from "./carByCity";

function CityCode() {
  return (
    <section class="body">
      <BannerHome />
      <City />
      <CarByCity />
    </section>
  );
}

export default CityCode;
