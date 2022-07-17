import React from 'react'

import { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {

    const [topMovies, setTopMovies] = useState([]) /*O useState começa com uma array vazia*/

    /*Uma função assincrona*/
    const getTopRatedMovies = async (url) => {

        const res = await fetch(url);
        const data = await res.json();

        setTopMovies(data.results);
    }

    useEffect(() => {

        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

        getTopRatedMovies(topRatedUrl);
    }, [])

    return (
        <div className="container">
            <h2 className="title">Melhores Filmes</h2>
            <div className="movies-contaienr">
                {topMovies.length === 0 && <p>Carregando...</p>} {/*Caso demore para receber aparecerá carregando até aparecer os filmes */}
                {topMovies.length > 0 && topMovies.map((movie) => <MovieCard movie={movie} key={movie.id}/> )}
            </div>
        </div>
    );
};

export default Home