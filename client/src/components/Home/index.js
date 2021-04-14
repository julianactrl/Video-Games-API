import { Link } from "react-router-dom";
import 'styles'
const Home = () => (
    <div className="container">
      <div className="main">
        <h2>Henry Videogames</h2>
        <Link to="/inicio">
          <button type="submit">LEST ´S GO PLAY</button>
        </Link>
      </div>
    </div>
)

export default Home