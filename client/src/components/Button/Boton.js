import React from "react";
import "./style.scss";

class Boton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let img = "";

    switch (this.props.eleccionJugada) {
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
        <img src={} />
    );
  }
}

export default Boton;