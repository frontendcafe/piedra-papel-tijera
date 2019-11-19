import React from "react";
import "./style.scss";

class Boton extends React.Component {
  constructor(props) {
    super(props);
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
        <div>RETURN</div>
    );
  }
}

export default Boton;