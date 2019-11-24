import React from "react";

const Title = props => {
  const { rock, paper, scissors, lizard, spock } = props;

  return (
    <div className="title">
      <h4>
        {rock} <br /> {paper} <br /> {scissors} <br /> {lizard} <br /> {spock}
      </h4>
    </div>
  );
};

export default Title;
