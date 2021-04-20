import { Link } from "react-router-dom";
import './styles.css'
import videogame from './../../assets/videogame.png';

const Landing = () => (
    <div className="container">
        <img src={videogame} alt="portada"/>
        <h2 className="init_title">Henry Videogames</h2>
        <Link to="/home">
          <button className="button" type="submit">LEST ´S GO PLAY</button>
        </Link>
    </div>
)

export default Landing