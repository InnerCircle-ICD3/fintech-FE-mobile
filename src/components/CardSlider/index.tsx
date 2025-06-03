import { cardInfos } from '@/api/card';
import * as styles from '@/styles/Main.css';

interface Props {
  selectable: boolean;
  selectedCardNumber: string;
  onSelected: (cardNumber: string) => void;
}

const CardSlider = ({ selectable, selectedCardNumber, onSelected }: Props) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.scrollArea}>
        {cardInfos.map((card) => {
          const isSelected = selectable && selectedCardNumber == card.cardNumber;

          return (
            <div
              className={isSelected ? styles.selected : styles.card}
              onClick={() => {
                if (selectable && onSelected) {
                  onSelected(card.cardNumber);
                }
              }}
            >
              <span className={styles.cardNumber}>
                {card.cardNumber.slice(0, 4) + '- **** - **** - ****'}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardSlider;
