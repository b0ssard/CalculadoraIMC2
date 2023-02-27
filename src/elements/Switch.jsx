import React from "react";
import { Container, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import "./Form.css";

function Switch(props) {
  const { system, toggleSystem } = props;

  return (
    <div className="mb-3 formulary">
      <Container>
        <Col xs={4}>
          <Form>
            <FormGroup switch>
              <Input
                type="checkbox"
                checked={system === "imperial"}
                onChange={toggleSystem}
                className="form-check-input"
                id="toggleSystem"
              />
              <Label check>Usar sistema imperial</Label>
            </FormGroup>
          </Form>
        </Col>
      </Container>
    </div>
  );
}

export default Switch;
