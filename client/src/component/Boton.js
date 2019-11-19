import React from "react";
import "./Boton.css";

export default class Boton extends React.Component {
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
