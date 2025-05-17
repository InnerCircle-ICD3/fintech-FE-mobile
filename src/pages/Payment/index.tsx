import { useNavigate } from 'react-router-dom';
import * as styles from '@/styles/Payment.css';

const Payment = () => {
  const navigate = useNavigate();

  const handleClickPay = () => {
    navigate('/payment/password');
  };

  return (
    <div className={styles.payContainer}>
      <h1 className={styles.payTitle}>상품 결제</h1>
      <div className={styles.payInfoBox}>
        <p>상품명: 무선 이어폰</p>
        <p>금액: 59,000원</p>
      </div>
      <button className={styles.payButton} onClick={handleClickPay}>
        결제하기
      </button>
    </div>
  );
};

export default Payment;
