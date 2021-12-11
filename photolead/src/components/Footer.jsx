import React from "react";
import instagram from "../img/instagram.svg";
import github from "../img/github.svg";
import linkedin from "../img/linkedin.svg";

import "../styles/Css/footer.css";

const Footer = () => {
  return (
    <>
      <section id="footer" className="footer">
        <div className="footer_principal">
          <div className="footer_empresa">
            <h3>Empresa</h3>
            <ul>
              <li>Quem somos</li>
              <li>Junte-se ao time</li>
              <li>Contacte-nos</li>
              <li>Ajuda</li>
            </ul>
          </div>
          <div className="footer_comunidade">
            <h3>Comunidade</h3>
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
          <h4>Neilton Seguins All Rigth Reserved &copy;</h4>
          <div className="footer_icons">
            <a href="https://www.instagram.com/ncode.io/">
              <img src={instagram} alt="" />
            </a>
            <a href="https://github.com/NeiltonSeguins">
              <img src={github} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/ne%C3%ADlton-seguins-bb8786a6/">
              <img src={linkedin} alt="" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
