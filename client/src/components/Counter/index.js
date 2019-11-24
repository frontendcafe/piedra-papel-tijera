import React from "react";

const Counter = ({ handleCounter }) => {
  return (
    <div className="counter-number">
      <button onClick={handleCounter}>
        <h2>{handleCounter}</h2>
      </button>
    </div>
  );
};

export default Counter;
