import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${encodeURIComponent(movie.title)}`}>
      <div className="bg-gray-800 p-4 rounded-lg shadow-md w-full sm:w-64 hover:bg-gray-700 transition">
        <img src={movie.posterURL} alt={movie.title} className="w-full h-72 object-cover rounded-md mb-4" />
        <h3 className="text-xl font-semibold">{movie.title}</h3>
        <p className="text-yellow-400 font-bold">⭐ {movie.rating}/5</p>
      </div>
    </Link>
  );
};

export default MovieCard;
