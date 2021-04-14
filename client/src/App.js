import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <>
        <Router path="/" exact component={Home}/>  
        <Home />
      </>
    </div>
  );
}

export default App;
