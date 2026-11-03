import { socialLinks } from '../data/content.js';
import './SocialLinks.css';

/**
 * Row/column of social media icon links.
 * The supplied Twitter icon is white, so on light backgrounds it is inverted to black.
 */
export default function SocialLinks({ direction = 'column', onDark = false }) {
  const classes = [
    'social-links',
    `social-links--${direction}`,
    onDark ? '' : 'social-links--on-light',
  ].join(' ');

  return (
    <ul className={classes}>
      {socialLinks.map((link) => (
        <li key={link.name}>
          <a href={link.href} aria-label={link.name}>
            <img
              className={link.whiteIcon ? 'social-links__icon--white' : ''}
              src={link.icon}
              alt=""
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
