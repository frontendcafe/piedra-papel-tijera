import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root')); OLD!!!!

//Nuevo metodo implementado en la Version 18.0 de React

    const root = document.getElementById('root');
    const container = ReactDOMClient.createRoot(root);
    container.render(<App />)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
