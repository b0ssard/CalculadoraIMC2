import React from "react";
import { Container, Col, Form, FormGroup, Label, Input } from 'reactstrap';

function Switch(props) {
  const { system, toggleSystem } = props;

  return (
    <div className="mb-3">
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
