import React from "react";
import Hero from "./Hero";
import Gallery from "./Gallery";

import '../styles/Css/main.css'

const Main = () => {
  return (
    <>
      <main className="main">
        <Hero />
        <nav className="main_nav">
          <ul className="main_ul">
            <li>Início</li>
            <div className="main_separator"></div>
            <li>Explorar</li>
          </ul>
          <div className="main_span"></div>
        </nav>
        <Gallery/>
      </main>
    </>
  );
};

export default Main;
