import Button from './Button.jsx';
import './MovieCard.css';

/**
 * A single movie card: poster, title, description and a "Watch now" button.
 *
 * `layout` selects the desktop arrangement:
 *   - "featured": wide banner (poster on top, text and button side by side)
 *   - "tall":     poster on top, text, button at the bottom
 *   - "wide":     poster on the left, text and button on the right
 * On tablet and mobile all cards use the "tall" arrangement.
 */
export default function MovieCard({ movie, layout }) {
  const { title, year, poster, description } = movie;

  return (
    <article className={`movie-card movie-card--${layout}`}>
      <img
        className="movie-card__poster"
        src={poster}
        alt={`Poster for ${title}`}
      />
      <div className="movie-card__body">
        <div className="movie-card__text">
          <h2 className="movie-card__title">
            {title} ({year})
          </h2>
          <p>{description}</p>
        </div>
        <Button className="movie-card__button">Watch now</Button>
      </div>
    </article>
  );
}
