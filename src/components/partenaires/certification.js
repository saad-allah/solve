import React from "react";
import TitleCertifications from "./certifications/title";
import CertificationsContent from "./certifications/allcertifications";

const Certification = () => (
  <section className="no-certifications">
    <div className="container">
      <div className="row justify-content-center">
        <TitleCertifications />
        <CertificationsContent />
      </div>
    </div>
  </section>
);

export default Certification;
