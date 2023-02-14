import React from "react";
import data from "./data.json";

function Cards() {
  const classes = data.weightClasses;

  return (
    <P>ANSWERS CARDS</P>
    // <div>
    //   <ul>
    //     {classes.map((classes, key) => (
    //       <li key={classes.key}>
    //         {classes.class} - {classes.bmiMin} - {classes.Max}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
}

export default Cards;
