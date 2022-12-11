import React from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./components/MovieCard";
import { useState, useEffect } from "react";
import "./App.css";
// ead87a94

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`http://www.omdbapi.com?apikey=ead87a94&s=${title}`);
    const data = await response.json();
    setMovies(data);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>Moviverse</h1>
      <div className="search">
        <input
          placeholder="Search for movie"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            searchMovies(searchTerm);
          }}
        />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard film={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
