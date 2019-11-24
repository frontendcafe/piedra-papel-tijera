import React, {Component} from 'react';

/* COMPONENTES */ 
import Home from './components/Home';
import Juego from './components/Juego';
import Boton from './components/Button';
import Header from './components/Header';

class App extends Component {

  //Definimos nuestro contador
  state = {
    counter: 0
  }

  handleCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }


  render() {
    return (
      <div className="App">
        <Header counter={this.state.counter} title = "Rock" />
        <Boton handleCounter={this.handleCounter} counter={this.counter} />
        
      </div>
    );
  }
}

export default App;
