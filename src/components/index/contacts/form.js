import React from "react";
import Fade from "react-reveal/Fade";

const FormsContact = () => (
  <div className="col-12 col-lg-6 ">
    <div className="card hasbg-ovelay ">
      <Fade bottom>
        <h2 className="se_contact_title ">Laisser un message</h2>
      </Fade>
      <form
        className="contact-form"
        name="contact-form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <Fade bottom>
          <div className="contact-name">
            <label>
              <span className="hide-text">Nom Complet</span>
              <input name="name" type="text" placeholder="Nom Complet" />
            </label>
          </div>
        </Fade>
        <Fade bottom>
          <div className="contact-email">
            <label>
              <span className="hide-text">Email</span>
              <input name="email" type="email" placeholder="Email" />
            </label>
          </div>
        </Fade>
        <Fade bottom>
          <div className="contact-sujet">
            <label>
              <span className="hide-text">Choisir département</span>
              <select className="custom-select" name="departement">
                <option>Choisir département</option>
                <option value="Département Marketing">
                  Département Marketing
                </option>
                <option value="Département Juridique">
                  Département Juridique
                </option>
                <option value="Département Finance">Département Finance</option>
                <option value="Département Commercial">
                  Département Commercial
                </option>
              </select>
            </label>
          </div>
        </Fade>
        <div>
          <Fade bottom>
            <label className="hide-text" htmlFor="message">
              Message
            </label>
            <div className="contact-message">
              <textarea
                name="message"
                rows="4"
                id="message"
                required="required"
                placeholder="Message"
              ></textarea>
            </div>
          </Fade>
        </div>
        <Fade bottom>
          <div className="text-right">
            <button className="send">Envoyer</button>
          </div>
        </Fade>
      </form>
    </div>
  </div>
);

export default FormsContact;
