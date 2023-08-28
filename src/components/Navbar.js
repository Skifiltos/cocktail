import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LinkComponent, SocialComponent } from "../utils/links";


const Navbar = () => {
  return (
    <nav className="nav">
      {/* LA CLASSE CONTAINER CONSENTE DI AVERE SEMPRE CORRETTAMENTE
      ALLINEATI OGNI ELEMENTO ALLA STESSA ALTEZZA */}
      <div className="container nav-container">
        <header className="nav-header">
          <Link to="/" className="nav-brand">
            <h3>
              Wiki Drink
            </h3>
            <div >
              <button className="icon-btn btn nav-toggler">
                <FaBars className="nav-icon" />
              </button>
            </div>
          </Link>
        </header>
        <LinkComponent classLink="nav-link" />
        <SocialComponent classSocial="socialTop" />
      </div>
    </nav>
  );
};

export default Navbar;
