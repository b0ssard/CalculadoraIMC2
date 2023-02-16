import { Container, Button } from "reactstrap";

function SubimitButton(params) {
  return (
    <Container>
        <Button
          color="primary"
          tag="input"
          type="submit"
          value={params.buttonText}
        />
    </Container>
  );
}

export default SubimitButton;
