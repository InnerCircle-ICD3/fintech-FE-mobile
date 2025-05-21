import { useNavigate } from 'react-router-dom';
import * as styles from '@/styles/Payment.css';

const Payment = () => {
  const navigate = useNavigate();

  const handleClickPay = () => {
    navigate('/payment/password', {
      state: {
        store: '네이버 스토어',
        amount: 59000,
      },
    });
  };

  return (
    <div className={styles.payContainer}>
      <h1 className={styles.payTitle}>상품 결제</h1>
      <div className={styles.payInfoBox}>
        <p>판매처: 네이버 스토어</p>
        <p>금액: 59,000원</p>
      </div>
      <div className={styles.buttonGroup}>
        <button className={styles.payButton} onClick={handleClickPay}>
          결제하기
        </button>
        <button className={styles.cancelButton} onClick={() => navigate('/payment/fail')}>
          취소
        </button>
      </div>
    </div>
  );
};

export default Payment;
