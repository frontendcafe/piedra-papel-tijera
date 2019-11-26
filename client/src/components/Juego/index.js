import React from "react";
import Boton from "../Button";
import "./style.scss"

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
      <React.Fragment>
        
        <div className="sup">
      <Boton
        eleccion="piedra"
      />
      </div>
      <div className="inf">
      <Boton
        eleccion="papel"
      />
      <Boton
        eleccion="tijera"
      />
      </div>
      </React.Fragment>
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