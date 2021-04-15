import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Inicio from './components/Inicio';


function App() {
  return (
    <div className="App">
      <>
        <Route exact path="/" component={Home} />
        <Route exact path="/inicio" component={Inicio} />
      </>
    </div>
  );
}

export default App;
