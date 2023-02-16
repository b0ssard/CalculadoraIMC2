import React, { useState } from "react";
import { Container, Col } from "reactstrap";

function Form(props) {
  const [bmiValue, setBmiValue] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBmiValue((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  return (
    <form>
      <div className="mb-3">
        <Container>
          <Col xs={4}>
            <label htmlFor={props.inputHeight} className="form-label">
              {props.label}
            </label>
            <input
              type="number"
              step=".01"
              className="form-control"
              value={bmiValue[props.name] || ""}
              id={props.inputHeight}
              aria-describedby={props.inputHeight}
              name={props.name}
              placeholder={props.placeholder}
              onChange={handleChange}
            />
          </Col>
        </Container>
      </div>
    </form>
  );
}

export default Form;
