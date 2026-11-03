import { navLinks } from '../data/content.js';
import './NavLinks.css';

/**
 * Horizontal list of site navigation links.
 * Re-used by the header and the footer; the parent decides the width, and
 * Flexbox spreads the links evenly across it.
 */
export default function NavLinks({ label }) {
  return (
    <nav aria-label={label} className="nav-links">
      <ul>
        {navLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
