import * as styles from '@/styles/Payment.css';

const Success = () => {
  return (
    <div className={styles.successContainer}>
      <h1 className={styles.successMessage}>결제가 완료되었습니다 🎉</h1>
    </div>
  );
};

export default Success;
