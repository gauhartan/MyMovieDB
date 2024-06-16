import React from 'react';
import './styles/AddMoviePage.css';
import RestHandler from "../RestHandler.ts";
import {Link} from "react-router-dom";

type Props = {
    apikey: string,
}

function AddMoviePage({apikey}: Props) {

    const restHandler = new RestHandler(apikey)

    const handleAddMovie = (f: React.FormEvent<HTMLFormElement>) => {
        f.preventDefault();
        let title = (document.getElementById("title") as HTMLInputElement);
        let poster = (document.getElementById("poster") as HTMLInputElement);
        let trailer = (document.getElementById("trailer") as HTMLInputElement);
        restHandler.addMovie(title.value, poster.value, trailer.value)

        f.currentTarget.reset()
    };

    return (
        <div>
            <div>
                <div><Link to="/" className="home-link">&lt;&lt; Back</Link></div>
            </div>
            <div className="add-movie-page">
                <div className="add-movie-content">
                    <h2>Add Movie</h2>
                    <form onSubmit={handleAddMovie}>
                        <div className="input-container">
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" placeholder="Enter title:" required minLength={3}/>
                        </div>
                        <div className="input-container">
                            <label htmlFor="poster">Poster</label>
                            <input type="url" id="poster" placeholder="Enter poster url:" required/>
                        </div>
                        <div className="input-container">
                            <label htmlFor="trailer">Trailer</label>
                            <input type="url" id="trailer" placeholder="Enter trailer url:" required/>
                        </div>
                        <button type="submit" className="add-button">Add Movie</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddMoviePage