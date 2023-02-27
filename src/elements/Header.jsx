import React from "react";
import "./Header.css";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import email from "../assets/email.png";
import whatsapp from "../assets/whatsapp.png";
import { Col, Container } from "reactstrap";

function Header() {
  return (
    <Container>
      <div className="navbar">
        <span className="calculadora-de-imc">CALCULADORA DE IMC</span>
        <Col xs={24} lg={12}>
          <span className="por-victor-bossard">Por Victor Bossard</span>
        </Col>
        <div className="contacts">
          <Col xs={24} lg={12}>
            <a
              href="https://www.linkedin.com/in/victorbossard/"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="LinkedIn" className="image-1" src={linkedin} />
            </a>

            <a
              href="https://github.com/b0ssard"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="GitHub" className="image-1" src={github} />
            </a>
            <a
              href="mailto:victorquindere@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="E-Mail" className="image-1" src={email} />
            </a>
            <a
              href="https://wa.me/5585988812838"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="WhatsApp" className="image-1" src={whatsapp} />
            </a>
          </Col>
        </div>
      </div>
    </Container>
  );
}

export default Header;
