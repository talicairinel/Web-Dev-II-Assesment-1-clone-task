import NavLinks from './NavLinks.jsx';
import SocialLinks from './SocialLinks.jsx';
import { copyright } from '../data/content.js';
import './Footer.css';

/** Full-width dark footer: nav links, copyright line and social icons. */
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__nav">
        <NavLinks label="Footer navigation" />
      </div>
      <p className="site-footer__copyright">{copyright}</p>
      <SocialLinks direction="row" onDark />
    </footer>
  );
}
