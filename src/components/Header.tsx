import { Link } from 'react-router-dom'
import styles from './styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.container}>
      <img src="/src/assets/paimon.png" alt="logo" className={styles.logo} />

      <h3 className={styles.title}>
        <Link to={'/'}>
          Genshin APP
        </Link>
      </h3>
      <nav className={styles.navigate}>
        <li className={styles.item}>
          <Link to={'/characters'} key={'characters'}>
            Characters
          </Link>
        </li>
        <li className={styles.item}>
          <Link to={'/weapons'} key={'weapons'}>
            Weapons
          </Link>
        </li>
      </nav>
    </header>
  )
}

export default Header