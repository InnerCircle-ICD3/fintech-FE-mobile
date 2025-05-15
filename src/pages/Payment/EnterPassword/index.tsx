import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PasswordKeypad from '@/components/PasswordKeypad';
import * as styles from '@/styles/Payment.css';

const CORRECT_PASSWORD = '123456'; // 임시 목업 비밀번호

const EnterPassword = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (password.length === 6) {
      setTimeout(() => {
        if (password === CORRECT_PASSWORD) {
          navigate('/payment/success');
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
