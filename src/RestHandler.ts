import axios from "axios";
import useMovieStorage from "./storages/MovieStorage"

class RestHandler {
    private static readonly backendUrl = "http://localhost:8080"
    private apikey: String;
    private store = useMovieStorage(state => ({
        movies: state.movies,
        loadMovies: state.loadMovies,
        updateMovie: state.updateMovie,
        removeMovie: state.removeMovie,
        addMovie: state.addMovie
    }));

    public constructor(apikey: String) {
        this.apikey = apikey;
    }

    public static getKey(onSuccess: (apiKey: string) => void) {
        axios.get(RestHandler.getKeyUrl()).then(
            respose => {
                onSuccess(respose.data.data)
            }
        )
    }

    private static getKeyUrl() {
        return RestHandler.backendUrl + "/api/keys"
    }

    public getMovies() {
        axios.get(this.getUrl(this.apikey)).then(
            respose => {
                this.store.loadMovies(respose.data.data)
            }
        )
    }

    public addMovie2Favorite(imdbid: String) {
        axios.put(this.favoriteMovieUrl(this.apikey, imdbid)).then(
            respose => {
                this.store.updateMovie(respose.data.data)
            }
        )
    }

    public removeMovie(imdbid: String) {
        axios.delete(this.removeMovieUrl(this.apikey, imdbid)).then(
            respose => {
                this.store.removeMovie(respose.data.data)
            }
        )
    }

    public addMovie(title: string, poster: string, trailer: string) {
        axios.post(this.addMovieUrl(this.apikey), {title: title, poster: poster, trailer_link: trailer}).then(
            respose => {
                this.store.addMovie(respose.data.data)
            }
        )
    }

    private getUrl(apikey: String) {
        return RestHandler.backendUrl + `/api/movies?key=${apikey}`
    }

    private addMovieUrl(apikey: String) {
        return RestHandler.backendUrl + `/api/movies?key=${apikey}`
    }

    private removeMovieUrl(apikey: String, imdbid: String) {
        return RestHandler.backendUrl + `/api/movies/${imdbid}?key=${apikey}`
    }

    private favoriteMovieUrl(apikey: String, imdbid: String) {
        return RestHandler.backendUrl + `/api/movies/${imdbid}?key=${apikey}`
    }

}

export default RestHandler