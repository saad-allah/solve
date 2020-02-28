import React from "react";

const FormsContact = () => (
  <div className="col-12 col-lg-6 ">
    <div className="card hasbg-ovelay ">
      <h2 className="se_contact_title ">Laisser un message</h2>
      <form
        className="contact-form"
        name="contact-form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <div className="contact-name">
        <label for="name">
          <input name="name" id="name" type="text" placeholder="Nom Complet" />
          </label>
        </div>
        <div className="contact-email">
        <label for="email">
          <input name="email" id="email" type="email" placeholder="Email" />
       </label>
        </div>
        <div className="contact-sujet">
          <select className="custom-select" name="departement" id="departement">
            <option>Choisir département</option>
            <option value="Département Marketing">Département Marketing</option>
            <option value="Département Juridique">Département Juridique</option>
            <option value="Département Finance">Département Finance</option>
            <option value="Département Commercial">
              Département Commercial
            </option>
          </select>
        </div>
        <div className="contact-message">
          <textarea
            id="message"
            name="message"
            rows="4"
            required="required"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="text-right">
          <button className="send">Envoyer</button>
        </div>
      </form>
    </div>
  </div>
);

export default FormsContact;
