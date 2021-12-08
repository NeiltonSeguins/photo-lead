import React from "react";
import Hero from "../components/Hero";
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
        <div className="main_photos"></div>
      </main>
    </>
  );
};

export default Main;
