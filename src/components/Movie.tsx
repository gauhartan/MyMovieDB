import {Link} from 'react-router-dom';
import MovieType from "../models/movieType.ts";
import favIcon from '../assets/icon-bookmark.png'
import favIconFilled from '../assets/icon-bookmark-filled.png'
import binIcon from '../assets/icon-bin.png'
import RestHandler from "../RestHandler.ts";
import useApiKeyStorage from "../storages/ApiKeyStorage.ts";
import '../pages/styles/Movie.css';

type Props = {
    movie: MovieType
}

function Movie({movie}: Props) {

    const {apiKey} = useApiKeyStorage(state => ({
        apiKey: state.apiKey
    }));

    const restHandler = new RestHandler(apiKey)

    return (
        <div>
            <Link to={`/${movie.imdbid}`}>
                <span className="movie-title0">{movie.title} &nbsp;&nbsp;&nbsp;</span>
            </Link>
            <img src={movie.is_favorite ? favIconFilled : favIcon} alt="Add movie to favorite"
                 className="favorite-movie-icon"
                 onClick={() => {
                     restHandler.addMovie2Favorite(movie.imdbid)
                 }}/>&nbsp;
            <img src={binIcon} alt="Remove movie" className="remove-icon" onClick={() => {
                restHandler.removeMovie(movie.imdbid)
            }}/>
            <Link to={`/${movie.imdbid}`}>
                <div><img src={movie.poster} className="movie-poster0" alt={movie.title}/></div>
            </Link>
        </div>
    )
}

export default Movie;