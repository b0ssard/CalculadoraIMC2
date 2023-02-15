import React, { useState } from "react";
import { Container, Col } from "reactstrap";
import Calculator from "./Calculator";

function Form() {
  const [heightValue, setHeightValue] = useState("");

  const handleHeightChange = (event) => {
    setHeightValue(event.target.value);
  };

  const [weightValue, setWeightValue] = useState("");

  const handleWeightChange = (event) => {
    setWeightValue(event.target.value);
  };
  return (
    <form>
      <div className="mb-3">
        <Container>
          <Col xs={4}>
            <label htmlFor="inputHeight" className="form-label">
              Altura (em metros)
            </label>
            <input
              type="number"
              step=".01"
              placeholder="Ex: 1.80"
              className="form-control"
              id="inputHeight"
              aria-describedby="inputHeight"
              name="height"
              value={heightValue}
              onChange={handleHeightChange}
            />
          </Col>
        </Container>
      </div>
      <div className="mb-3">
        <Container>
          <Col xs={4}>
            <label htmlFor="inputWeight" className="form-label">
              Peso (em kilogramas)
            </label>
            <input
              type="number"
              step=".01"
              placeholder="Ex: 80.50"
              className="form-control"
              id="inputWeight"
              aria-describedby="inputWeight"
              name="weight"
              value={weightValue}
              onChange={handleWeightChange}
            />
          </Col>
        </Container>
      </div>
      <Calculator weight={weightValue} height={heightValue} />
      <Container>
        <Col xs={4}>
          <button type="submit" className="btn btn-primary">
            Calcular
          </button>
        </Col>
      </Container>
    </form>
  );
}

export default Form;
