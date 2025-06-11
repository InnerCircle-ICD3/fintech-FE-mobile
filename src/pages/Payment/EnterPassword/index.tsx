import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PasswordKeypad from '@/components/PasswordKeypad';
import * as styles from '@/styles/Payment.css';
import { mockData } from '@/api/payments';
import { card } from '@/api/card';
import {
  passwordAttempt,
  passwordContainer,
  passwordDot,
  passwordDotFilled,
  passwordDotWrapper, passwordHint,
  passwordTitle,
} from '@/styles/Payment.css';

const MAX_ATTEMPTS = 5;

const EnterPassword = () => {
  const [password, setPassword] = useState('');
  const [attempts, setAttempts] = useState(0);
  const navigate = useNavigate();

  const location = useLocation();
  const { store, amount, cardNumber } = location.state;

  const correctPassword = card.get(cardNumber)?.paymentPassword;

  useEffect(() => {
    if (password.length === 6) {
      setTimeout(() => {
        if (password === correctPassword) {
          const today = new Date();
          const year = today.getFullYear().toString();
          const month = (today.getMonth() + 1).toString().padStart(2, '0');
          const day = today.getDate().toString().padStart(2, '0');
          const dateStr = `${year}-${month}-${day}`;

          mockData.push({ id: '3', date: dateStr, store, amount });
          navigate('/payment/success', { replace: true });
        } else {
          const newAttempts = attempts + 1;
          setAttempts(newAttempts);
          setPassword('');

          if (newAttempts >= MAX_ATTEMPTS) {
            navigate('/payment/fail', { replace: true });
          }
        }
      }, 300);
    }
  }, [password]);

  const getTitleText = () => {
    if (attempts === 0) return '비밀번호를 입력하세요';
    return '비밀번호를 다시 입력해주세요';
  };

  return (
    <div className={passwordContainer}>
      <h2 className={passwordTitle}>{getTitleText()}</h2>

      <div className={passwordDotWrapper}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`${styles.passwordDot} ${
              password.length > i ? styles.passwordDotFilled : ''
            }`}
          />
        ))}
      </div>

      {attempts > 0 && (
        <div className={passwordAttempt}> {`${attempts}/${MAX_ATTEMPTS}`} </div>
      )}

      <div className={passwordHint}>비밀번호를 잊어버렸어요.</div>

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
