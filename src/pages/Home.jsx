import React, { memo } from "react";
import Banner from "../components/Banner";
import LatestVehicles from "../components/LatestVehicles";
import TopCategoriesSection from "./TopCategoriesSection";
import AboutTravelEase from "../components/AboutTravelEase";

const Home = () => {
  return (
    <>
      <Banner />
      <LatestVehicles />
      <TopCategoriesSection />
      <AboutTravelEase/>
    </>
  );
};

export default memo(Home);
