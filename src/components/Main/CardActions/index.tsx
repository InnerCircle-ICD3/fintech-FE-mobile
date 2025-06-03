import * as styles from '@/styles/Main.css';
import { useNavigate } from 'react-router-dom';

const CardActions = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.cardActionWrapper}>
      <button className={styles.cardActionButton} onClick={() => navigate('/register')}>
        카드 추가
      </button>
      <button className={styles.cardActionButton}>카드 관리</button>
    </div>
  );
};

export default CardActions;
