import React from "react";

// Heart button to toggle favorites
const FavoriteButton = ({ isFavorite, onClick }) => (
  <button className={`favorite-button ${isFavorite ? "favorite" : ""}`} onClick={onClick}>
    ♥
  </button>
);

const MovieCard = ({ movie, isFavorite, toggleFavorite }) => {
  return (
    <div className="movie">
    <div>
      <p>{movie.Year}</p>
    </div>

    <div>
      <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} />
    </div>

    <div>
      <span>{movie.Type}</span>
      <h3>{movie.Title}</h3>
      <FavoriteButton isFavorite={isFavorite} onClick={() => toggleFavorite(movie)} />
    </div>
  </div>
  );
};

export default MovieCard;
