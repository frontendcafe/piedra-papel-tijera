import React from 'react';
import './App.css';
import Home from './components/Home';
import Juego from './components/Juego';
import Boton from './components/Button';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Juego />
        <Boton />
      </div>
    );
  }
}

export default App;
