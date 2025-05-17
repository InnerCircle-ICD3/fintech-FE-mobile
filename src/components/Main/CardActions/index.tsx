import * as styles from '@/styles/Main.css';

const CardActions = () => {
  return (
    <div className={styles.cardActionWrapper}>
      <button className={styles.cardActionButton}>카드 추가</button>
      <button className={styles.cardActionButton}>카드 관리</button>
    </div>
  );
};

export default CardActions;
