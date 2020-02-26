
import React from "react";
import TitleClients from "./clients/title";
import LogoClients from "./clients/logos";

const Client = () => (
  <section className="no-Partenaires">
    <div className="container">
      <div className="row justify-content-center">
        <TitleClients />
        <LogoClients />
      </div>
    </div>
  </section>
)

export default Client
