import React from "react";
import TitleExpertises from "./expertise/title";
import Bloc1 from "./expertise/bloc1";
import Bloc2 from "./expertise/bloc2";
import OffreExpertises from "./expertise/offre";
import Bloc3 from "./expertise/bloc3";

const ExpertisePage = () => (
  <div>
    <TitleExpertises />
    <section>
      <div className="container ">
        <div className="row justify-content-between">
          <Bloc1 />
          <OffreExpertises />
        </div>
      </div>
      <div className="container se-au ">
        <div className="row justify-content-between">
          <OffreExpertises />
          <Bloc2 />
        </div>
      </div>
      <div className="container se-au ">
        <div className="row justify-content-between">
          <Bloc3 />
          <OffreExpertises />
        </div>
      </div>
    </section>
  </div>
);
export default ExpertisePage;
