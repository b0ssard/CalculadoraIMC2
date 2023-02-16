import React from "react";
import Form from "./Form";
import SubmitButton from "./button";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div>
      <Form
        inputHeight={"inputHeight"}
        label={"Altura (em metros)"}
        placeholder={"Ex: 1.80"}
        id={"inputHeight"}
        ariaDescribedby={"inputHeight"}
        name={"height"}
      />
      <Form
        inputWeight={"inputWeight"}
        label={"Peso (em kilos)"}
        placeholder={"Ex: 80.75"}
        id={"inputWeight"}
        ariaDescribedby={"inputWeight"}
        name={"weight"}
      />
      <SubmitButton buttonText={"Calcular"} />
    </div>
  );
}

export default App;
