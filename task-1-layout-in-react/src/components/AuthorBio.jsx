import SocialLinks from './SocialLinks.jsx';
import { profilePicture } from '../data/content.js';
import './AuthorBio.css';

/** "The Author" panel: bio text, 200px circular photo and social icons. */
export default function AuthorBio({ heading, bio, photoAlt }) {
  return (
    <section className="author">
      <div className="author__text">
        <h2>{heading}</h2>
        <p>{bio}</p>
      </div>
      <img className="author__photo" src={profilePicture} alt={photoAlt} />
      <SocialLinks direction="column" />
    </section>
  );
}
