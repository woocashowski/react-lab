import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";

function App() {
    const [title, setTitle] = useState('Wall-E');

    const movies = [
        {title: "Wall-E"},
        {title: "Pulp Fiction"},
        {title: "Matrix"},
        {title: "1670"},
    ];

    function handleChange(event) {
        setTitle(event.target.value);
    }

    // function addMovies() {
    //     movies.map((title) => {movies})
    // }

    let message;
    if(title.length <= 0) {
        message = 'Please enter a title';
    }
    else if(title.length < 5) {
        message = 'Title must be at least 5 characters';
    }
    else if(title.length < 15) {
        message = 'Title good';
    }
    else{
        message = 'Title too long';
    }

    let myFavouriteMovie;
    if(title.length > 0) {
        myFavouriteMovie = "My favourite movie for today is " + title;
    }
    else{
        myFavouriteMovie = null;
    }

    return (
        <div className="container">
            <h1>My favourite movies to watch test</h1>
            <h2>{myFavouriteMovie}</h2>
            <h2>{message}</h2>
            <input type='text' onChange={handleChange} />
            <button type="button" onClick={() => alert(title)}>
                Wyświetl film
            </button>

            <ul>
                {movies.map((movie) => <li key={movie.title}>{movie.title}</li>)}
            </ul>
        </div>
    );
}

export default App;
