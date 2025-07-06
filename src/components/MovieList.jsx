import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.length ? (
        movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))
      ) : (
        <p>No movies match your filters.</p>
      )}
    </div>
  );
};

export default MovieList;
