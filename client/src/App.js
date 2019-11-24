import React, {Component} from 'react';

/* COMPONENTES */ 
import Boton from './components/Button';
import Header from './components/Header';

class App extends Component {

  /** @description Definimos nuestro contrador
   *  @params el cual inicializamos en 0 para que luego vaya sumando.
   */
  state = {
    counter: 0
  }

  /** @description Definimos nuestra función que controle nuestro Score
   *  @params y setearle el estado para que vaya sumando en uno
   */
  handleCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  /** @description Crear dos componentes llamados 'Header' y 'Boton'.
   *  @params Header debe recibir como props a nuestro State
   *  @params Boton debe recibir como props a nuestra función
   */
  render() {
    return (
      <div className="App">
        <Header counter={this.state.counter} />
        <Boton handleCounter={this.handleCounter} />
        
      </div>
    );
  }
}

export default App;
