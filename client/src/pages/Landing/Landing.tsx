import styles from './Landing.module.css'
import { Navbar, Card } from '../../components/'
import gradient from '../../assets/images/angular.svg'
import rick from '../../assets/images/rick.png'

export function Landing() {
  return (
    <div>
      <header className={styles.header}>
        <Navbar />
      </header>
      <div className={styles.rightGradientImage}>
        <img src={gradient} alt="" />
      </div>
      <div className={styles.left}>
        <p className={styles.leftParagraph}>
          Discover, collect, and create Rick and Morty's characters
        </p>
        <button className={styles.leftButton}>Explore now</button>
      </div>
      <div className={styles.right}>
        <Card title="Rick Sanchéz" image={rick} />
      </div>
    </div>
  )
}
