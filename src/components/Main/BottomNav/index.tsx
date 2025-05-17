import * as styles from '@/styles/Main.css';

const BottomNav = () => {
  return (
    <nav className={styles.nav}>
      <button className={styles.sideButton}>홈</button>
      <button className={styles.qrButton}>QR</button>
      <button className={styles.sideButton}>마이</button>
    </nav>
  );
};

export default BottomNav;
