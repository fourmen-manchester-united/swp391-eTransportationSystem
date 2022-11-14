import React from "react";
import RenderCarActive from "../../../components/RenderCarActive";
import { NotificationContainer } from "react-notifications";
// import Airport from "./airport";
import BannerHome from "./bannerHome";
import City from "./city";
import Features from "./features";
import Owner from "./owner";
import Tutorial from "./tutorial";

function Home() {
  return (
    <section className="body">
      <BannerHome />
      <Features />
      <Tutorial />
      <City />
      {/* <Airport /> */}
      <Owner />
      <RenderCarActive />
      <NotificationContainer />
    </section>
  );
}

export default Home;
