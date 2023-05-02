import styles from './Navbar.module.css'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img src={logo} alt="Rick head as logo" className={styles.logo} />
        </Link>
      </div>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link to="/characters" className={styles.listLink}>
            Search
          </Link>
        </li>
        <li className={styles.listItem}>Create</li>
        <li className={styles.listItem}>Favorites</li>
      </ul>
    </nav>
  )
}
