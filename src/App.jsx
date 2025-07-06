import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A thief steals corporate secrets through dreams.",
      posterURL: "https://i.imgur.com/8UG2uNt.jpg",
      rating: 5,
    },
    {
      title: "The Matrix",
      description: "A hacker discovers reality is a simulation.",
      posterURL: "https://i.imgur.com/qmJ5BBV.jpg",
      rating: 4,
    },
  ]);

  const [filter, setFilter] = useState({ title: '', rating: 0 });

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
    movie.rating >= filter.rating
  );

  return (
    <div>
      <h1>🎬 Movie App</h1>
      <Filter setFilter={setFilter} />
      <AddMovie onAdd={handleAddMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
