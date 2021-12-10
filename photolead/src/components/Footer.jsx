import React from "react";
import instagram from "../img/instagram.svg";
import facebook from "../img/facebook.svg";
import twitter from "../img/twitter.svg";

import "../styles/Css/footer.css";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="footer_principal">
          <div className="footer_empresa">
            <h4>Empresa</h4>
            <ul>
              <li>Quem somos</li>
              <li>Junte-se ao time</li>
              <li>Contacte-nos</li>
              <li>Ajuda</li>
            </ul>
          </div>
          <div className="footer_comunidade">
            <h4>Comunidade</h4>
            <ul>
              <li>Contribua</li>
              <li>Explore</li>
              <li><a href="#main">Surpreeda-me</a></li>
              <li>
                <a href="#inicio">Início</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_credits">
          <a href="https://www.pexels.com">Photos provided by Pexels</a>
        </div>
        <div className="footer_div"></div>
        <div className="footer_redes-sociais">
          <h5>Neilton Seguins All Rigth Reserved &copy;</h5>
          <div className="footer_icons">
            <a href="https://www.instagram.com/ncode.io/">
              <img src={instagram} alt="" />
            </a>
            <a href="#">
              <img src={twitter} alt="" />
            </a>
            <a href="#">
              <img src={facebook} alt="" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
