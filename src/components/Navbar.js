import { FaUserCircle } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import styles from './Link.module.css';

const Navbar = () => (
  <header>
    <div className="header-container1">
      <div className="logo"><a href="/">BookStore AS</a></div>
      <nav>
        <ul>
          <li><NavLink exact to="/" className={styles.link}>Books</NavLink></li>
          <li><NavLink to="/Catogeries" className={styles.link}>Categories</NavLink></li>
        </ul>
      </nav>
    </div>
    <div className="header-container2">
      <Link to="/"><FaUserCircle /></Link>
    </div>
  </header>
);

export default Navbar;
