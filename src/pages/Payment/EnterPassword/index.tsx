import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PasswordKeypad from '@/components/PasswordKeypad';
import * as styles from '@/styles/Payment.css';
import { mockData } from '@/api/payments';

const CORRECT_PASSWORD = '123456'; // 임시 목업 비밀번호

const EnterPassword = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const location = useLocation();
  const { store, amount } = location.state;

  useEffect(() => {
    if (password.length === 6) {
      setTimeout(() => {
        if (password === CORRECT_PASSWORD) {
          if (!store || !amount) {
            navigate('/payment/fail');
          } else {
            const today = new Date();
            const year = today.getFullYear().toString();
            const month = (today.getMonth() + 1).toString().padStart(2, '0');
            const day = today.getDate().toString().padStart(2, '0');
            const dateStr = `${year}-${month}-${day}`;

            mockData.push({
              id: '3',
              date: dateStr,
              store: store,
              amount: amount,
            });
            navigate('/payment/success');
          }
        } else {
          alert('비밀번호가 일치하지 않습니다.');
          setPassword('');
        }
      }, 300);
    }
  }, [password]);

  return (
    <div className={styles.passwordContainer}>
      <h2 className={styles.passwordTitle}>결제 비밀번호 입력</h2>

      <div className={styles.passwordInputBox}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`${styles.passwordDigit} ${password.length > i ? styles.passwordFilled : ''}`}
          />
        ))}
      </div>

      <PasswordKeypad
        onInput={(value) => {
          if (value === 'backspace') {
            setPassword((prev) => prev.slice(0, -1));
          } else if (password.length < 6) {
            setPassword((prev) => prev + value);
          }
        }}
      />
    </div>
  );
};

export default EnterPassword;
