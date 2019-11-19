import React, {Component} from "react";
import Boton from "../Button";

class Juego extends Component {
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
        <h1>Hola, {this.props.jugador}!</h1>
        {this.renderBoton(this.state.eleccionJugador)}
      </div>
    );
  }
}

export default Juego;