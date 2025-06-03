import { cardInfos } from '@/api/card';
import * as styles from '@/styles/Main.css';

const CardSlider = () => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.scrollArea}>
        {cardInfos.map((card) => (
          <div className={styles.card}>
            <span className={styles.cardNumber}>
              {card.cardNumber.slice(0, 4) + '- **** - **** - ****'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
