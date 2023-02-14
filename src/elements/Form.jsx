import React from "react";
import { Container, Col } from "reactstrap";

function Form() {
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
            />
          </Col>
        </Container>
      </div>
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
