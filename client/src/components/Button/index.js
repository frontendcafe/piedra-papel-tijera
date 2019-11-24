import React from "react";

const Boton = ({ handleCounter }) => {
  return (
    <React.Fragment>
      <button onClick={() => handleCounter()}>+</button>
    </React.Fragment>
  );
};

export default Boton;
