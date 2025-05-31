import * as styles from '@/styles/Main.css';
import { useNavigate } from 'react-router-dom';

const BottomNav = () => {
  const navigate = useNavigate();

  return (
    <nav className={styles.nav}>
      <button
        className={styles.sideButton}
        onClick={() => {
          navigate('/');
        }}
      >
        홈
      </button>
      <button
        className={styles.qrButton}
        onClick={() => {
          navigate('/qr');
        }}
      >
        QR
      </button>
      <button
        className={styles.sideButton}
        onClick={() => {
          navigate('/my');
        }}
      >
        마이
      </button>
    </nav>
  );
};

export default BottomNav;
