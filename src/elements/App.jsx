import React, { useState } from "react";
import Form from "./Form";
import SubmitButton from "./Button";
import Calculator from "./Calculator";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [interpretation, setInterpretation] = useState("");

  const handleInputChange = (name, value) => {
    if (name === "height") {
      setHeight(value);
    } else if (name === "weight") {
      setWeight(value);
    }
  };

  const calculateBmi = (event) => {
    event.preventDefault();
    const interpretation = <Calculator height={height} weight={weight} />;
    setInterpretation(interpretation);
  };

  return (
    <div>
      <Form
        inputId="inputHeight"
        label="Altura (em metros)"
        placeholder="Ex: 1.80"
        name="height"
        value={height}
        onChange={handleInputChange}
      />
      <Form
        inputId="inputWeight"
        label="Peso (em kilos)"
        placeholder="Ex: 80.75"
        name="weight"
        value={weight}
        onChange={handleInputChange}
      />
      <SubmitButton buttonText="Calcular" onClick={calculateBmi} />
      {interpretation && <p>{interpretation}</p>}
    </div>
  );
}

export default App;
