import React from "react";
import "./Juego.css";
import Boton from "./Button";

class Juego extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        eleccionJugador: "",
        eleccionPc: "",
        resultado: "",
        puntaje: ""
    };
  }

  renderBoton(eleccion) {
    return (
      <Boton
        eleccion={eleccion}
      />
    );
  }

  render() {
    return (
      <div>
        <h1>Hola, {this.props.nombreJugador}!</h1>
        {this.renderBoton(this.state.eleccionJugador)}
      </div>
    );
  }
}

export default Juego;