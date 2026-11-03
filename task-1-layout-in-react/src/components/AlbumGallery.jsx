import './AlbumGallery.css';

/**
 * Album gallery rendered with CSS Grid: one large featured album on the left
 *  and four smaller albums in a 2x2 block on the right.
 */
export default function AlbumGallery({ albums }) {
  return (
    <section className="album-gallery" aria-label="Featured albums">
      {albums.map((album) => (
        <img
          key={album.alt}
          className={
            album.featured
              ? 'album-gallery__item album-gallery__item--featured'
              : 'album-gallery__item'
          }
          src={album.src}
          alt={album.alt}
        />
      ))}
    </section>
  );
}
