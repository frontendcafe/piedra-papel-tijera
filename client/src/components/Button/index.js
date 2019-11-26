import React from "react";
import "./style.scss";

class Boton extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      // eleccion=""
    }
  }

  handleClick(e){
   console.log(this.props.eleccion) 

  }


  render() {
    let img = "";

    switch (this.props.eleccion) {
        case "piedra":
            break;
        case "tijera":
            break;
        case "papel":
            break;
        default:
            break;
    }

    return (

        <button className="button-option" onClick={(e)=>this.handleClick(e)}>RETURN OPCIONES</button>
    );
  }
}

export default Boton;