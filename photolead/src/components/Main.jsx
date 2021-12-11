import React, { useEffect, useState } from "react";
import svg from "../img/search.svg";

import "../styles/Css/main.css";
import "../styles/Css/gallery.css";
import "../styles/Css/hero.css";

const Main = () => {
  const apiKey = "563492ad6f9170000100000173af64a66faf4b31b2cc80228e87b170";
  const URL = `https://api.pexels.com/v1/curated?page=1&per_page=30`;

  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [url, setUrl] = useState(URL);

  const getDados = async (url) => {
    const resp = await fetch(url, {
      headers: {
        Authorization: apiKey,
      },
    });
    const data = await resp.json();
    const dados = data.photos;
    setResult(dados);
  };

  useEffect(() => {
    getDados(url);
  }, [url]);

  const handleOnChange = (event) => {
    const search = event.target.value;
    setSearch(search);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const url = `https://api.pexels.com/v1/search/?page=1&per_page=50&query=${search}`;
    setUrl(url);
  };

  return (
    <>
      <main id="main" className="main">
        <section id="hero" className="hero">
          <h1 className="hero_title">
            Fotos profissionais gratuitas e imagens compartilhadas por criadores
            para você utilizar em seus projetos
          </h1>
          <form onSubmit={handleOnSubmit} className="hero_form">
            <label for="hero"></label>
            <input
              id="hero"
              onChange={handleOnChange}
              className="hero_input"
              type="text"
              value={search}
              placeholder="Busque imagens gratuitas"
            />
            <button type="submit" className="hero_button">
              <img src={svg} alt="Botão para pesquisar imagens" />
            </button>
          </form>
        </section>
        <nav className="main_nav">
          <ul className="main_ul">
            <li>Explorar</li>
            <div className="main_separator"></div>
            <li>Surpreenda-me</li>
          </ul>
          <div className="main_span"></div>
        </nav>
        <section className="gallery">
          <div className="gallery_section">
            {result.map((photo, index) => {
              return (
                <div className="gallery_container" key={index}>
                  <img
                    loading="lazy"
                    className="gallery_photo"
                    src={photo.src.original}
                    alt=""
                  />
                  <div className="gallery_author">
                    <h2>Foto: {photo.photographer}</h2>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
