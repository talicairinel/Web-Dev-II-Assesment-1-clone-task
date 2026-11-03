import Header from './components/Header.jsx';
import Article from './components/Article.jsx';
import AlbumGallery from './components/AlbumGallery.jsx';
import AuthorBio from './components/AuthorBio.jsx';
import Comments from './components/Comments.jsx';
import Footer from './components/Footer.jsx';
import { article, albums, author, comments } from './data/content.js';

/**
 * Root component: assembles the page from its sections.
 * The white "content" column (<main>) is centred and capped in width, while
 * the header sits above it and the footer spans the full page width below.
 */
export default function App() {
  return (
    <>
      <Header />
      <main className="content">
        <Article {...article} />
        <AlbumGallery albums={albums} />
        <AuthorBio {...author} />
        <Comments comments={comments} />
      </main>
      <Footer />
    </>
  );
}
