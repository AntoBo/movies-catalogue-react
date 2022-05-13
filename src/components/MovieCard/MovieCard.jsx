import { BASE_IMG_URL } from '../../service/fetchAPI';

const MovieCard = ({ movie }) => {
  const { title, poster_path, vote_average, overview, genres } = movie;

  return (
    <div className="movie-card-wrapper">
      <img src={BASE_IMG_URL + poster_path} width="300" alt={title}></img>
      <h1>{title}</h1>
      <p>User score: {vote_average * 10}%</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>
        {genres.map(genre => (
          <span key={genre.id} className="genre">
            {genre.name}
          </span>
        ))}
      </p>
    </div>
  );
};

export default MovieCard;
