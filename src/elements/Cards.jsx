import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";

function Cards(props) {
  return (
    <div>
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
            Altura: {props.height} Peso: {props.weight}
          </CardText>
          <CardText>
            Seu IMC é de {props.bmi}. Você está na faixa definida como{" "}
            {props.title}.
          </CardText>
          <CardText>{props.def}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default Cards;
