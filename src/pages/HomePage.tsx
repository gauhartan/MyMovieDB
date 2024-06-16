import './styles/HomePage.css';
import logo from '../assets/logo.png';
import MovieList from "../components/MovieList.tsx";
import {Link} from "react-router-dom";

function HomePage() {
    return (
        <div className="home-page">
            <div className="nav-bar">
                <div>
                    <a href="/">MyMovieDB</a>
                </div>
                <div className="margin-left">
                    <Link to="/signin">Sign In</Link>/<Link to="/signup">Sign Up</Link>/<Link to="/addmovie">Add
                    Movie</Link>
                </div>
            </div>
            <img src={logo} alt="Movie Center Logo"/>
            <div className="movie-list">
                <MovieList/>
            </div>
        </div>
    );
}

export default HomePage;