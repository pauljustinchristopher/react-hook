import React, { useState } from 'react';

const AddMovie = ({ onAdd }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie(prev => ({
      ...prev,
      [name]: name === 'rating' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(newMovie);
    setNewMovie({ title: '', description: '', posterURL: '', rating: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={newMovie.title} onChange={handleChange} placeholder="Title" required />
      <input name="description" value={newMovie.description} onChange={handleChange} placeholder="Description" required />
      <input name="posterURL" value={newMovie.posterURL} onChange={handleChange} placeholder="Poster URL" required />
      <input name="rating" type="number" min="0" max="5" value={newMovie.rating} onChange={handleChange} placeholder="Rating" required />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
