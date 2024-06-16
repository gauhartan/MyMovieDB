import {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import MoviePage from "./pages/MoviePage.tsx";
import AddMoviePage from './pages/AddMoviePage.tsx';
import useApiKeyStorage from "./storages/ApiKeyStorage.ts";
import RestHandler from "./RestHandler.ts";

function App() {

    const {setApiKey} = useApiKeyStorage(state => ({
        setApiKey: state.setApiKey
    }));

    useEffect(() => {
        RestHandler.getKey(setApiKey)
    }, [])

    const {apiKey} = useApiKeyStorage(state => ({
        apiKey: state.apiKey
    }));

    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/signin" element={<SignInPage/>}/>
                    <Route path="/signup" element={<SignUpPage/>}/>
                    <Route path="/addmovie" element={<AddMoviePage apikey={apiKey}/>}/>
                    <Route path="/:imdbid" element={<MoviePage/>}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;