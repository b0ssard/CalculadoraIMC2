import weightClasses from "./data";

function Calculator(props) {
  const bmi = parseFloat((props.weight / (props.height * props.height)).toFixed(2));
  const weightClass = weightClasses.find(
    (wc) => bmi >= wc.bmiMin && bmi <= wc.bmiMax
  );
  const interpretation =
    "Seu IMC é " +
    bmi.toFixed(2) +
    ", você está na faixa " +
    weightClass.class +
    ".";

  console.log(interpretation);
}

export { Calculator as default };
