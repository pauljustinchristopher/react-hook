import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';

function App() {
  // const [movies, setMovies] = useState([...]); // include trailer and description
  const [movies, setMovies] = useState([
  {
    title: "Inception",
    description: "A thief who steals corporate secrets through dream-sharing technology.",
    posterURL: "https://i.imgur.com/8UG2uNt.jpg",
    rating: 5,
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
  },
  {
    title: "The Matrix",
    description: "A hacker discovers reality is a simulation controlled by machines.",
    posterURL: "https://i.imgur.com/qmJ5BBV.jpg",
    rating: 4,
    trailer: "https://www.youtube.com/embed/vKQi3bBA1y8"
  }
]);

  const [filter, setFilter] = useState({ title: '', rating: 0 });

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
    movie.rating >= filter.rating
  );

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <h1 className="text-4xl font-bold text-center mb-6">🎬 Movie App</h1>
        <Routes>
          <Route path="/" element={
            <>
              <Filter setFilter={setFilter} />
              <AddMovie onAdd={newMovie => setMovies([...movies, newMovie])} />
              <MovieList movies={filteredMovies} />
            </>
          } />
          <Route path="/movie/:title" element={<MovieDetails movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
