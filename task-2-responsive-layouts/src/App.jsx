import Header from './components/Header.jsx';
import MovieList from './components/MovieList.jsx';
import { movies } from './data/movies.js';

/** Root component: site header followed by the grid of movie cards. */
export default function App() {
  return (
    <>
      <Header />
      <main>
        <MovieList movies={movies} />
      </main>
    </>
  );
}
