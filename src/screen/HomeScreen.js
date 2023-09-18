import React, { useEffect, useState } from "react";
import { Hero, Cocktails, Loading, ErrorMessage } from "../components";
import { FaSearch } from "react-icons/fa";
import Lottie from "react-lottie";
import animationData from "../assets/animation/drink-animation.json";
import { Link } from "react-router-dom";


const HomeScreen = () => {
  return <>
    <Hero>
      <div className="home-hero">
        <div className="home-hero-text">
          <div className="home-hero-title">
            <h2 className="brand-color">
              WIKI DRINK
            </h2>
            <h4>Tutti i cocktail del mondo a portata di click!</h4>
          </div>
          <p>
            Wiki Drink è un database internazionale che mette a tua
            disposizione, in maniera <span className="brand-color">Gratuita</span>, le ricette dei più importanti e
            diffusi cocktail al mondo.
          </p>
          <Link to="/about" className="btn btn-primary">
            Scopri di più
          </Link>
        </div>
        <div className="home-hero-img">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              reverse: true,
              animationData: animationData,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
              }
            }}
            height={350}
          // width={400}
          />
        </div>
      </div>
    </Hero>

  </>;
};

export default HomeScreen;
