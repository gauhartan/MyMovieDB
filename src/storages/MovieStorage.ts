import {create} from 'zustand';
import MovieType from '../models/movieType'

type MovieStorage = {
    movies: MovieType[],
    loadMovies: (movies: MovieType[]) => void,
    updateMovie: (movies: MovieType) => boolean,
    removeMovie: (movies: MovieType[]) => void,
    addMovie: (movies: MovieType) => void
}

const useMovieStorage = create<MovieStorage>((set) => ({
    movies: [],
    loadMovies: (movies) => {
        set({movies: movies})
    },
    updateMovie: (movie) => {
        var updated = false;
        set(state => ({
            movies: state.movies.map(currentMovie => {
                    if (movie.imdbid === currentMovie.imdbid) {
                        updated = true
                        return movie;
                    }
                    return currentMovie;
                }
            )
        }))
        return updated;
    },
    removeMovie: (movies) => {
        set(state => ({
                    movies: state.movies.filter(movieListItem =>
                        movies.find(item => item.imdbid == movieListItem.imdbid) === undefined
                    )
                }
            )
        )
    },
    addMovie: (movies) => {
        set(state => ({
            movies: [...state.movies, movies]
        }))

    }
}))

export default useMovieStorage;
