import { Navbar } from '../../components'
import styles from './Characters.module.css'

export function Characters() {
  return (
    <div>
      <header className={styles.header}>
        <Navbar />
      </header>
    </div>
  )
}
