import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";

function Cards(props) {
  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <img alt="Sample" src={props.img} />
      <CardBody>
        <CardTitle tag="h5">{props.title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          De {props.min} até {props.max}
        </CardSubtitle>
        <CardText>
        <p>Altura: {props.height} Peso: {props.weight}</p>
          <p>
            Seu IMC é de {props.bmi}. Você está na faixa definida como{" "}
            {props.title}.
          </p>
          <p>{props.def}</p>
        </CardText>
      </CardBody>
    </Card>
  );
}

export default Cards;
