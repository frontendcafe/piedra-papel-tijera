import React, {Component} from 'react';

/* COMPONENTES */ 
import Home from './components/Home';
import Juego from './components/Juego';
import Boton from './components/Button';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Juego />
        <Boton />
      </div>
    );
  }
}

export default App;
