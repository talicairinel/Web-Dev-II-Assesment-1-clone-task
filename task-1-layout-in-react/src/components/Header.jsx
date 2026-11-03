import NavLinks from './NavLinks.jsx';
import { logo } from '../data/content.js';
import './Header.css';

/** Page header: centred 200px logo with the main navigation underneath. */
export default function Header() {
  return (
    <header className="site-header">
      <img className="site-header__logo" src={logo} alt="Erased Tapes logo" />
      {/* Nav is the same width as the content column below it */}
      <div className="site-header__nav">
        <NavLinks label="Main navigation" />
      </div>
    </header>
  );
}
