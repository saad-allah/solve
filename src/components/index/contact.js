
import { StaticQuery, graphql } from "gatsby";
import React from "react";
import InoContact from "./contacts/info";
import FormsContact from "./contacts/form";

const ContactIndex = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: { eq: 2 }) {
          acf {
            paragraphe_qsn
            title_qsn
            sub_title_qsn
          }
        }
      }
    `}
    render={data => (
      <section className="no-contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 ">
            <div className="se_contact_excerpt row justify-content-center has-ovlay ">
              <div className="bg-ovelay"></div>
              <div className="col-6 ">
              <FormsContact />
              alert
              </div>
              <InoContact />
             
         
            </div>
          </div>
        </div>
      </div>
    </section>
    )}
  />
);
export default ContactIndex;
