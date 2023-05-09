import { FaUserCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import styles from './Link.module.css';

const Navbar = () => (
  <header>
    <div className="header-container1">
      <div className="logo"><a href="/">BookStore AS</a></div>
      <nav>
        <ul>
          <li><NavLink exact="true" to="/" className={styles.link}>Books</NavLink></li>
          <li><NavLink exact="true" to="/Catogeries" className={styles.link}>Categories</NavLink></li>
        </ul>
      </nav>
    </div>
    <div className="header-container2">
      <a href="/">
        <FaUserCircle />
      </a>
    </div>
  </header>
);

export default Navbar;
