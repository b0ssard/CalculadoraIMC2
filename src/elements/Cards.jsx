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
          <CardText>
            Para mais informações:{" "}
            <a href="https://bvsms.saude.gov.br/obesidade-18/#:~:text=A%20obesidade%20%C3%A9%20o%20ac%C3%BAmulo,que%20o%20gasto%20energ%C3%A9tico%20correspondente.">
              Ministério da Saúde
            </a>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default Cards;
