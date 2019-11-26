import React from 'react';
import "./style.scss"

class Rules extends React.Component {
  handleClick(){

  }


  
  render() {
    return (
      <button className="button-rules" onClick={()=> this.handleClick()}>
        RULES
      </button>
    );
  }
}

export default Rules;
