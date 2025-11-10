import React, { memo } from "react";
import Banner from "../components/Banner";
import LatestVehicles from "../components/LatestVehicles";
import TopCategoriesSection from "./TopCategoriesSection";

const Home = () => {
  return (
    <>
      <Banner />
      <LatestVehicles />
      <TopCategoriesSection />
    </>
  );
};

export default memo(Home);
