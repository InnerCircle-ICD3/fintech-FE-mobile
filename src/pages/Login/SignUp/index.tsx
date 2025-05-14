import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as styles from '@/styles/Signup.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // 회원가입 처리 로직 (ex. fetch or axios)
    console.log('회원가입');
    navigate('/login'); // 가입 완료 후 로그인 페이지로 이동
  };

  const formatPhoneNumber = (value: string) => {
    const numbersOnly = value.replace(/\D/g, '');

    if (numbersOnly.length < 4) return numbersOnly;
    if (numbersOnly.length < 7) {
      return `${numbersOnly.slice(0, 3)}-${numbersOnly.slice(3)}`;
    }
    return `${numbersOnly.slice(0, 3)}-${numbersOnly.slice(3, 7)}-${numbersOnly.slice(7, 11)}`;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>회원가입</h1>
      <form onSubmit={handleSignUp}>
        <input
          className={styles.input}
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <input
          className={styles.input}
          type="tel"
          placeholder="전화번호"
          value={formatPhoneNumber(phone)}
          onChange={(e) => {
            const onlyNums = e.target.value.replace(/\D/g, '');
            setPhone(onlyNums);
          }}
          required
        />
        <br />
        <input
          className={styles.input}
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          className={styles.input}
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit" className={styles.button}>
          회원가입
        </button>
      </form>
    </div>
  );
};

export default SignUp;
