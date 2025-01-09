import styles from './Header.module.css'

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <img
        src='https://itukraine.org.ua/wp-content/uploads/2023/11/ITSA_l.png'
        alt='Itstep'
        className = {styles.imglogo}
        />
        <nav className={styles.navbar}>
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
        </nav>
        <button className={styles.btnsignup}>
            SIGN UP
        </button>
      </header>
    </>

  );
}
