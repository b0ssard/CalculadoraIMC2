function Calculator(props) {
  const bmi = props.weight / Math.pow(props.height, 2);
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
}

export default Calculator;
