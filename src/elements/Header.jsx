import React from "react";
import "./Header.css";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

function Header() {
  return (
    <div className="navbar">
      <span className="calculadora-de-imc">CALCULADORA DE IMC</span>
      <span className="por-victor-bossard">Por victor Bossard</span>
      <a
        href="https://www.linkedin.com/in/victorbossard/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="LinkedIn" className="image-1" src={linkedin} />
      </a>
      <a href="https://github.com/b0ssard" target="_blank" rel="noreferrer">
        <img alt="GitHub" className="image-1" src={github} />
      </a>
    </div>
  );
}

export default Header;
