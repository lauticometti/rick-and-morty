import styles from './Landing.module.css'
import { Navbar } from '../../components/'
import rick from '../../assets/images/rick.png'
import { Link } from 'react-router-dom'

export function Landing() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <Navbar />
      </header>
      <main className={styles.main}>
        <div className={styles.left}>
          <p className={styles.leftParagraph}>
            Discover, collect, and create Rick and Morty's characters
          </p>
          <Link to="/characters" className={styles.leftButtonLink}>
            <button className={styles.leftButton}>Explore now</button>
          </Link>
        </div>
        <div className={styles.right}>
          <div className={styles.cardContainer}>
            <div className={styles.cardImageContainer}>
              <img src={rick} alt="" className={styles.cardImage} />
            </div>
            <h3 className={styles.cardTitle}>Rick Sanchéz</h3>
            <div className={styles.cardDetails}>
              <p>Human</p>
              <p>Male</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
