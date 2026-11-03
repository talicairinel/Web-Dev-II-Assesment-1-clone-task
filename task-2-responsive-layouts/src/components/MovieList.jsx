import MovieCard from './MovieCard.jsx';
import { layoutForIndex } from '../data/movies.js';
import './MovieList.css';

/**
 * The primary content container. It is a CSS Grid; the number of columns and
 * how wide each card spans changes with the screen size .
 */
export default function MovieList({ movies }) {
  return (
    <section className="movie-list" aria-label="Movies">
      {movies.map((movie, index) => (
        <MovieCard key={movie.title} movie={movie} layout={layoutForIndex(index)} />
      ))}
    </section>
  );
}
