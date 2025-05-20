import * as styles from '@/styles/Payment.css';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.resultContainer}>
      <h1 className={styles.resultMessage}>결제가 완료되었습니다 🎉</h1>
      <button onClick={() => { navigate('/') }}>홈으로</button>
    </div >
  );
};

export default Success;
