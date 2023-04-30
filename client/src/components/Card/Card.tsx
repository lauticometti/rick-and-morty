import styles from './Card.module.css'

export interface CardProps {
  title: string
  image: string
}

export function Card({ title, image }: CardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={image} alt='' />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.details}>
        <p>Human</p>
        <p>Males</p>
      </div>
    </div>
  )
}
