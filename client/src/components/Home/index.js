import { Link } from "react-router-dom";
import './styles.css'
import videogame from './../../assets/videogame.png';

const Home = () => (
    <div className="container">
        <img src={videogame} alt="portada"/>
        <h2>Henry Videogames</h2>
        <Link to="/inicio">
          <button className="button" type="submit">LEST ´S GO PLAY</button>
        </Link>
    </div>
)

export default Home