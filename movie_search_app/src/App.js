import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg"; 
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // updated import
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    searchMovies("harry");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search || []); 
  };

  const toggleFavorite = (movie) => {
    const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);
    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.imdbID !== movie.imdbID));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchMovies(searchTerm);
    }
  };

  return (
    <Router>
      <div className="app">
        
        <h1>Movie App</h1>

        <nav className="navbar">
          <Link to="/" className="navbar-link">HOME</Link> 
          <Link to="/favorites" className="navbar-link">FAVORITES</Link> 
        </nav>

        <div className="search">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for movies"
            onKeyPress={handleKeyPress} 
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)} 
          />
        </div>

        <Routes> 
          <Route path="/" element={
            movies?.length > 0 ? (
              <div className="container">
                {movies.map((movie) => (
                  <MovieCard
                    key={movie.imdbID}
                    movie={movie}
                    isFavorite={favorites.some((fav) => fav.imdbID === movie.imdbID)}
                    toggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
            ) : (
              <div className="empty">
                <h1>No movies found</h1>
              </div>
            )
          } />

          <Route path="/favorites" element={
            <div className="container">
              {favorites.map((movie) => (
                <MovieCard
                  key={movie.imdbID}
                  movie={movie}
                  isFavorite={true}
                  toggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
