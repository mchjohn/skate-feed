import logo from '../../assets/skate-logo.svg';

import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo Skate Feed" />
    </header>
  )
}