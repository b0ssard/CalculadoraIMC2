import React from "react";
import { Container, Col } from "reactstrap";
import "./Form.css";

function Form(props) {
  const { onChange, value, inputId, name, label, placeholder } = props;

  const handleChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  return (
    <form>
      <div className="mb-3 formulary">
        <Container>
            <Col xs={4}>
              <label htmlFor={inputId} className="form-label">
                {label}
              </label>
              <input
                type="number"
                step=".01"
                className="form-control"
                value={value}
                id={inputId}
                aria-describedby={inputId}
                name={name}
                placeholder={placeholder}
                onChange={handleChange}
              />
            </Col>
        </Container>
      </div>
    </form>
  );
}

export default Form;
