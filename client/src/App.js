import React from 'react';
import './App.css';
import Home from './components/Home';
import Juego from './components/Juego';
import Boton from './components/Button';
import Rules from "./components/Rules";
import Header from "./components/Header"


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Home />
     
       
        <Rules/>
      </div>
    );
  }
}

export default App;
