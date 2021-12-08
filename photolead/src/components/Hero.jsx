import React from "react";
import search from '../img/search.svg'
import "../styles/Css/hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <h1 className="hero_title">
          Fotos profissionais gratuitas e imagens compartilhadas por criadores
          para você utilizar em seus projetos
        </h1>
        <form action="" className="hero_form">
          <label htmlFor="hero"></label>
          <input name="hero"
            className="hero_input"
            type="text"
            placeholder="Busque imagens gratuitas"
          />
          <button className="hero_button"><img src={search} alt='Botão para pesquisar imagens'/></button>
        </form>
      </section>
    </>
  );
};

export default Hero;
