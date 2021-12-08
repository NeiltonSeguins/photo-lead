import React from "react";
import logo from "../img/logo.svg";
import upload from "../img/upload.svg";
import "../styles/Css/header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div>
          <img className="header_img" src={logo} alt="Logotipo da Photolead" />
          <nav className="header_nav">
            <ul className="header_ul">
              <li className="header_li">Explorar</li>
              <li className="header_li">Entrar</li>
            </ul>
            <img className="header_icon" src={upload} alt="Clique aqui para fazer upload de uma foto" />
            <button className="header_button">Upload</button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
