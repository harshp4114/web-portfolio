import Flaps, { flip } from "./Flaps";

const Header = () => (
  <nav className="nav" aria-label="Primary">
    <a className="mark" href="#top" aria-label="Harsh Patadia, home" onMouseEnter={(e) => flip(e.currentTarget)}>
      <span className="logo-flaps" aria-hidden="true"><Flaps text="HP" /></span>
      Harsh Patadia
    </a>
    <ul>
      <li><a href="#departures">Projects</a></li>
      <li><a href="#stack">Stack</a></li>
      <li><a href="#enquiry">Contact</a></li>
    </ul>
  </nav>
);

export default Header;
