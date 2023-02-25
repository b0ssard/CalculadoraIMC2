import React from "react";
import { Container, Button } from "reactstrap";

function SubmitButton(props) {

  return (
    <Container>
      <Button
        style={{ backgroundColor: "#14C38E" }}
        tag="input"
        type="submit"
        value={props.buttonText}
        onClick={props.onClick}
      />
    </Container>
  );
}


export default SubmitButton;
