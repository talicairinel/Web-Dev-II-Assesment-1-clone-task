import Button from './Button.jsx';
import { genres } from '../data/movies.js';
import './Header.css';

/**
 * Site header: logo on the left, genre navigation in the middle and the
 * search button on the right. Laid out with Flexbox.
 */
export default function Header() {
  return (
    <header className="site-header">
      <h1 className="site-header__logo">watch.it</h1>

      {/* Hidden on mobile */}
      <nav className="site-header__nav" aria-label="Genres">
        <ul>
          {genres.map((genre) => (
            <li key={genre}>
              <a href="#">{genre}</a>
            </li>
          ))}
        </ul>
      </nav>

      <Button className="btn--search">Search</Button>
    </header>
  );
}
