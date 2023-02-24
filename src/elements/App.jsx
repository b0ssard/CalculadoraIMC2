import React, { useState } from "react";
import { Row, Col, Container} from "reactstrap";
import Form from "./Form";
import SubmitButton from "./Button";
import weightClasses from "./data";
import Cards from "./Cards";
import Switch from "./Switch";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [bmi, setBmi] = useState("");
  const [weightClass, setWeightClass] = useState("");
  const [system, setSystem] = useState("metric");

  const handleInputChange = (name, value) => {
    if (name === "height") {
      setHeight(value);
    } else if (name === "weight") {
      setWeight(value);
    }
  };

  const toggleSystem = () => {
    setSystem(system === "metric" ? "imperial" : "metric");
  };

  const calculateBmi = (event) => {
    event.preventDefault();
    let bmi;
    if (system === "metric") {
      bmi = parseFloat((weight / (height * height)).toFixed(2));
    } else {
      bmi = parseFloat(((weight * 703) / (height * height)).toFixed(2));
    }
    const calculatedWeightClass = weightClasses.find(
      (wc) => bmi >= wc.bmiMin && bmi <= wc.bmiMax
    );
    if (calculatedWeightClass) {
      setWeightClass(calculatedWeightClass);
      setBmi(bmi);
      setShowCard(true);
    }
  };

  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col>
            <Switch system={system} toggleSystem={toggleSystem} />
            <Form
              inputId="inputHeight"
              label={`Altura (em ${
                system === "metric" ? "metros" : "polegadas"
              })`}
              placeholder={`Ex: ${system === "metric" ? "1.80" : "70"}`}
              name="height"
              value={height}
              onChange={handleInputChange}
            />
            <Form
              inputId="inputWeight"
              label={`Peso (em ${system === "metric" ? "kilos" : "libras"})`}
              placeholder={`Ex: ${system === "metric" ? "80.75" : "150"}`}
              name="weight"
              value={weight}
              onChange={handleInputChange}
            />
            <SubmitButton buttonText="Calcular" onClick={calculateBmi} />
          </Col>
          <Col>
            {showCard && weightClass && (
              <Cards
                img={weightClass.image}
                title={weightClass.class}
                min={weightClass.bmiMin}
                max={weightClass.bmiMax}
                bmi={bmi}
                weight={weight}
                height={height}
                def={weightClass.def}
                system={system}
              />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;