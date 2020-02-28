import React from "react";
import TitleExpIn from "./experienceInternationale/title";
import Counts from "./experienceInternationale/count";
import MapExp from "./experienceInternationale/map";

const ExperienceInternationale = () => (
  <section >
    <div className="container">
      <div className="row justify-content-center">
        <div className=" col-sm-12 p0 col-lg-10">
          <TitleExpIn />
          <Counts />
        </div>
        <MapExp />
      </div>
    </div>
  </section>
);

export default ExperienceInternationale;
