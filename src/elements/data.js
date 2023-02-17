const weightClasses = [
  {
    class: "Abaixo do peso",
    bmiMin: 0,
    bmiMax: 18.5,
    image: "public/Images/class1.png",
    def: "Pessoas que estão abaixo do peso recomendável podem apresentar quadros de desnutrição. Além disso, é importante verificar se não há alguma patologia por trás do peso baixo, principalmente se o emagrecimento aconteceu de maneira repentina.",
    key: "class1",
  },
  {
    class: "Peso normal",
    bmiMin: 18.6,
    bmiMax: 24.9,
    image: "public/Images/class2.png",
    def: "",
    key: "class2",
  },
  {
    class: "Sobrepeso",
    bmiMin: 25,
    bmiMax: 29.9,
    image: "public/Images/class3.png",
    def: "Esse é o primeiro sinal de alerta, pois já é considerado pré-obesidade e muitas pessoas já podem apresentar doenças relacionadas ao peso, como diabetes e hipertensão. Quem tem sobrepeso deve rever hábitos e contar com apoio de profissionais que possam reverter esse quadro.",
    key: "class3",
  },
  {
    class: "Obesidade Grau I",
    bmiMin: 30,
    bmiMax: 34.9,
    image: "public/Images/class4.png",
    def: "Para as pessoas que estão nesse estágio, já existe uma série de cuidados que podem ser tomados. Fazer mudanças alimentares, com acompanhamento de um nutricionista, e estabelecer uma rotina de exercícios físicos é fundamental. Os tratamentos mais extremos, como a cirurgia bariátrica, não costumam ser recomendados para pacientes no grau 1 de obesidade, ainda que cada caso deva ser estudado individualmente.",
    key: "class4",
  },
  {
    class: "Obesidade Grau II",
    bmiMin: 35,
    bmiMax: 39.9,
    image: "public/Images/class5.png",
    def: "Nesse estágio, também conhecido como obesidade moderada, os riscos para a saúde são mais elevados e, por isso, é recomendado fazer um acompanhamento médico mais rigoroso, com o apoio de um endocrinologista, por exemplo. A rotina de exercícios físicos, com foco nos aeróbicos para aumentar o gasto calórico, e o acompanhamento de uma mudança profunda nos hábitos alimentares já se faz necessária para reverter a situação da obesidade grau 2.",
    key: "class5",
  },
  {
    class: "Obesidade Grau III",
    bmiMin: 40,
    bmiMax: Number.POSITIVE_INFIN,
    image: "public/Images/class6.png",
    def: "É o grau mais agressivo, também conhecido como obesidade mórbida ou grave. A realização de um tratamento adequado pode ajudar a melhorar a qualidade de vida da pessoa, mas é provável que já existam mais de uma doença associada ao peso. Existem algumas opções cirúrgicas para a obesidade mórbida, como a cirurgia bariátrica. Porém, cada caso deve ser analisado individualmente por uma equipe multidisciplinar que envolvem nutricionistas, médicos especialistas e psicólogos. Apenas com o acordo desses profissionais é possível indicar o melhor tratamento para cada pessoa que tenha obesidade grau 3.",
    key: "class6",
  },
];

export default weightClasses;
