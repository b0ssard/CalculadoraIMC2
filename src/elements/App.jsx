import React, { useState } from "react";
import Form from "./Form";
import SubmitButton from "./Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import Calculator from "./Calculator";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const handleInputChange = (name, value) => {
    if (name === "height") {
      setHeight(value);
    } else if (name === "weight") {
      setWeight(value);
    }
  };

  const calculateBmi = (event) => {
    event.preventDefault();
    const bmi = weight / Math.pow(height, 2);
    let interpretation;

    if (bmi < 18.5) {
      interpretation =
        "Seu IMC é " + bmi.toFixed(2) + ", você está abaixo do peso ideal.";
    } else if (bmi > 24.9) {
      interpretation =
        "Seu IMC é " + bmi.toFixed(2) + ", você está acima do peso ideal.";
    } else {
      interpretation =
        "Seu IMC é " + bmi.toFixed(2) + ", você está dentro do peso ideal.";
    }

    console.log(interpretation);
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
    </div>
  );
}

export default App;
