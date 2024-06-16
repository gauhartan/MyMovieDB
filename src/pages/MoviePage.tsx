import {Link, useParams} from 'react-router-dom';
import './styles/MoviePage.css';
import RestHandler from "../RestHandler.ts";
import useApiKeyStorage from "../storages/ApiKeyStorage.ts";
import useMovieStorage from "../storages/MovieStorage.ts";
import favIconFilled from "../assets/icon-bookmark-filled.png";
import favIcon from "../assets/icon-bookmark.png";


function MoviePage() {
    const {
        imdbid
    } = useParams();
    const {movies} = useMovieStorage(state => ({
        movies: state.movies
    }))
    const {apiKey} = useApiKeyStorage(state => ({apiKey: state.apiKey}))
    const movie = movies.find(curMovie => (
        curMovie.imdbid === imdbid
    ))
    const restHandler = new RestHandler(apiKey)

    return (
        <section>
            <section className="back-button">
                <Link to="/" className="home-link">&lt;&lt; Back</Link>
            </section>
            <section className="movie-page">
                <div>
                    <h1 className="movie-title">{movie!!.title}&nbsp;&nbsp;
                        <img src={movie.is_favorite ? favIconFilled : favIcon} alt="Add movie to favorite"
                             className="favorite-movie-icon"
                             onClick={() => {
                                 restHandler.addMovie2Favorite(movie.imdbid)
                             }}/></h1>
                </div>
                <div><img className="movie-poster" src={movie!!.poster}></img></div>
                <div>
                    <iframe className='movie-frame' src={movie!!.trailer_link}></iframe>
                </div>
            </section>
        </section>
    );
}

export default MoviePage;