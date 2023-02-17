import weightClasses from "./data";

function Calculator(props) {
  const bmi = props.weight / Math.pow(props.height, 2);
  const weightClass = weightClasses.find(
    (wc) => bmi >= wc.bmiMin && bmi <= wc.bmiMax
  );
  let interpretation =
      "Seu IMC é " +
      bmi.toFixed(2) +
      ", você está na faixa " +
      weightClass.class +
      ".";

  console.log(interpretation);
}

export default Calculator;
