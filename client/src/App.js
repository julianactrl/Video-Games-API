import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Home from './components/Home';
import CardDetails from './components/CardDetails'
import FormGame from './components/FormGame';

function App() {
  return (
    <div className="App">
      <>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/details" render={({ match }) => <CardDetails id={match.params.id} />} />
        <Route exact path="/form" component={FormGame} />
      </>
    </div>
  );
}

export default App;
