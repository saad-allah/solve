import React from "react";
import TitleContact from "./contacts/title";
import InoContact from "./contacts/info";
import FormsContact from "./contacts/form";
import FollowUs from "./contacts/followUs";

const ContactPage = () => (
  <div>
    <section className="no-contact-top">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 p0 col-lg-10">
            <TitleContact />
          </div>
        </div>
      </div>
    </section>
    <section className="no-contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-sm-12 ">
            <div className="se_contact_excerpt no-bg row justify-content-center ">
              <FormsContact />
              <FollowUs />
              <InoContact />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
export default ContactPage;
