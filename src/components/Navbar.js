import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';
import styles from './Link.module.css';

const Navbar = () => (
  <header>
    <div className="header-container1">
      <div className="logo">BookStore AS</div>
      <nav>
        <ul>
          <li><Link to="/" className={styles.link}>Books</Link></li>
          <li><Link to="/Catogeries" className={styles.link}>Catogeries</Link></li>
        </ul>
      </nav>
    </div>
    <div className="header-container2">
      <FaUserCircle />
    </div>
  </header>
);
export default Navbar;
