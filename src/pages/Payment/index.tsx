import { useNavigate } from 'react-router-dom';
import * as styles from '@/styles/Payment.css';

const Payment = () => {
  const navigate = useNavigate();

  const handleClickPay = () => {
    navigate('/enter-password');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>상품 결제</h1>
      <div className={styles.infoBox}>
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
