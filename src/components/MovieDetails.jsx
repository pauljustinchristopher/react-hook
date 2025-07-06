import { useParams, Link } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find(m => m.title === decodeURIComponent(title));

  if (!movie) {
    return <div className="text-center text-red-400">Movie not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-md shadow-md">
      <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>
      <p className="text-gray-300 mb-4">{movie.description}</p>
      <div className="aspect-video mb-4">
        <iframe
          className="w-full h-full rounded-md"
          src={movie.trailer}
          title={movie.title}
          allowFullScreen
        ></iframe>
      </div>
      <Link to="/" className="text-blue-400 underline hover:text-blue-300">
        ← Back to Home
      </Link>
    </div>
  );
};

export default MovieDetails;
