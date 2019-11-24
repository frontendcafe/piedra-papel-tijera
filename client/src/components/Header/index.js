import React from "react";

/* COMPONENTS */
import Score from "../Score";
import Title from "../Title";
import Counter from "../Counter";

const Header = props => {
  const { counter } = props;

  return (
    <header className="header">
      <div className="header-container">
        <Title
          rock="rock"
          paper="paper"
          scissors="scissors"
          lizard="lizard"
          spock="spock"
        />

        <div className="score">
          <Score score="Score" />
          <Counter counter={counter} />
        </div>
      </div>
    </header>
  );
};

export default Header;
