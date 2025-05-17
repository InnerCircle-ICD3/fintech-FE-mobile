import * as styles from '@/styles/Main.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>💳</div>
      <h1 className={styles.title}>열정페이</h1>
      <div className={styles.rightSpace}></div>
    </header>
  );
};

export default Header;
