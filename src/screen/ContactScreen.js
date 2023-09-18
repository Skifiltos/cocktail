import React from "react";
import { Hero } from "../components";
import backImage from "../assets/image/Contact-hero.png";


const ContactScreen = () => {
  return <>
    <Hero image={backImage} disableOverlay />
    <div className="contact-hero container">
      <div contact-hero-text>
        <div className="contact-hero-title">
          <h2 className="contact-title">
            Vorresti aggiungere un Cocktail?
          </h2>
          <h4 className="contact-subtitle">
            Il nostro team è sempre disponibile per valutare possibili
            nuove ricette ed aggiungerle a quelle del nostro database.
          </h4>
        </div>
      </div>
      <div className="contact-form-container container">

        <form
          action="https://formspree.io/f/xoqolkdo"
          method="POST"
          className="contact-form container"
        >

          <div className="form-group">
            <label htmlFor="nome">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              className="input"
              placeholder="Inserisci il tuo nome"
            />
            <hr />
          </div>

          <div className="form-group">
            <label htmlFor="cognome">
              Cognome
            </label>
            <input
              type="text"
              id="cognome"
              name="cognome"
              className="input"
              placeholder="Inserisci il tuo cognome"
            />
            <hr />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="input"
              placeholder="Inserisci la tua email"
            />
            <hr />
          </div>

          <div className="form-group">
            <label htmlFor="telefono">
              Telefono
            </label>
            <input
              type="text"
              id="telefono"
              name="telefono"
              className="input"
              placeholder="Inserisci il tuo telefono"
            />
            <hr />
          </div>

          <div className="form-group">
            <label htmlFor="ricetta">
              La tua ricetta
            </label>
            <input
              type="text"
              id="ricetta"
              name="ricetta"
              className="input"
              placeholder="Describi la tua ricetta"
            />
            <hr />
          </div>

          <button type="submit" className="btn btn-primary">
            Invia la tua ricetta
          </button>

        </form>
      </div >
    </div >
  </>;
};

export default ContactScreen;
