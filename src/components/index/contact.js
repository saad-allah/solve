import React from "react";
import InoContact from "./contacts/info";
import FormsContact from "./contacts/form";

const ContactIndex = () => (
  <section className="no-contact">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 ">
          <div className="se_contact_excerpt row justify-content-center has-ovlay ">
            <div className="bg-ovelay"></div>
            <FormsContact />
            <InoContact />
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default ContactIndex;
