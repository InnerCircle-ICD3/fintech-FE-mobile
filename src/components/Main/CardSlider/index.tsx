import * as styles from '@/styles/Main.css';

const dummyCards = [
  { id: '1', number: '**** 1234' },
  { id: '2', number: '**** 5678' },
  { id: '3', number: '**** 9012' },
];

const CardSlider = () => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.scrollArea}>
        {dummyCards.map((card) => (
          <div key={card.id} className={styles.card}>
            <span className={styles.cardNumber}>{card.number}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
