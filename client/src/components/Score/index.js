import React from "react";

const Score = ({score}) => {

  return(
    <React.Fragment>
      <div className="counter-title">
        <h4>{score}</h4>
      </div>
    </React.Fragment>
  )
};

export default Score;
