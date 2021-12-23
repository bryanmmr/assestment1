import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const NavBar = () => (
  <nav className="navbar">
    <ul className='navbar__list'>
      <li className="navbar__element">
        <Link to='/'>
          Home
        </Link>
      </li>
      <li className="navbar__element">
        <Link to='/about'>
          About
        </Link>
      </li>
    </ul>
  </nav>
)
export default NavBar;
