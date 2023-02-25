import * as React from "react";
import "./Card1.css";

const Card = (props) => {
  const isClass6 = props.min === 40;

  return (
    <div className={`card ${props.className || ""}`}>
      <div className="card-background">
        <img className="image" alt="Sample" src={props.img} />
        <div className="flex-container">
          <span className="sobrepeso">{props.title}</span>
          <span className="de-123-at-124">
            {isClass6
              ? `A partir de ${props.min}`
              : `De ${props.min} até ${props.max}`}
          </span>
          <span className="seu-imc-de-2778-voc">
            Seu IMC é de {props.bmi}. Você está na faixa definida como{" "}
            {props.title}.
          </span>
          <span className="esse-o-primeiro-sin">{props.def}</span>
          <span className="saiba-mais">
            <a
              href="https://bvsms.saude.gov.br/obesidade-18/#:~:text=A%20obesidade%20%C3%A9%20o%20ac%C3%BAmulo,que%20o%20gasto%20energ%C3%A9tico%20correspondente."
              target="_blank"
              rel="noreferrer"
            >
              Saiba mais.
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
