import React from 'react';
import "./style.scss"

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="title">
          <h4>Rock</h4>
          <h4>Paper</h4>
          <h4>Scissors</h4>
          <h4>Lizard</h4>
          <h4>Spock</h4>
        </div>

        <div className="score">
          <div className="counter-title">
            <h4>Score</h4>
          </div>

          <div className="counter-number">
            <h2>12</h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
