import React from "react";
// import Airport from "./airport";
import BannerHome from "./bannerHome";
import City from "./city";
import Features from "./features";
import Owner from "./owner";
import Tutorial from "./tutorial";

function Home() {
  return (
    <section class="body">
      <BannerHome />
      <Features />
      <Tutorial />
      <City />
      {/* <Airport /> */}
      <Owner />
    </section>
  );
}

export default Home;
