import {useEffect} from 'react';
import Movie from "./Movie.tsx";
import useApiKeyStorage from "../storages/ApiKeyStorage.ts";
import useMovieStorage from "../storages/MovieStorage.ts";
import RestHandler from "../RestHandler.ts";


function MovieList() {
    const {apiKey} = useApiKeyStorage(state => ({
        apiKey: state.apiKey
    }));
    const {movies} = useMovieStorage(state => ({
        movies: state.movies,
    }));
    const restHandler = new RestHandler(apiKey)

    useEffect(() => {
        if (apiKey != "") {
            restHandler.getMovies()
        }
    }, [apiKey]);

    if (movies.length === 0) {
        return <div>No movies available</div>;
    }

    return (
        <section className="movie-list">
            {movies.map(movie => {
                return <Movie movie={movie} key={movie.imdbid}/>
            })}
        </section>
    );
}

export default MovieList;