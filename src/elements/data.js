const weightClasses = [
  {
    class: "Abaixo do peso",
    bmiMin: 0,
    bmiMax: 18.5,
    key: "class1",
  },
  {
    class: "Peso normal",
    bmiMin: 18.6,
    bmiMax: 24.9,
    key: "class2",
  },
  {
    class: "Sobrepeso",
    bmiMin: 25,
    bmiMax: 29.9,
    key: "class3",
  },
  {
    class: "Obesidade Grau I",
    bmiMin: 30,
    bmiMax: 34.9,
    key: "class4",
  },
  {
    class: "Obesidade Grau II",
    bmiMin: 35,
    bmiMax: 39.9,
    key: "class5",
  },
  {
    class: "Obesidade Grau III",
    bmiMin: 40,
    bmiMax: Number.POSITIVE_INFINITY,
    key: "class6",
  },
];

export default weightClasses;