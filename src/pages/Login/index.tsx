import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as styles from '@/styles/Login.css';
import { auth } from '@/api/auth';
import { useAuthStore } from '@/store/useAuthStore';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const setUser = useAuthStore((state) => state.setUser);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = auth.login(email, password);

    if (user) {
      setUser({ email: user.email, name: user.name });
      alert('login 성공!');
      navigate('/', { replace: true });
    } else {
      alert('login 실패!');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>로그인</h1>
      <form className={styles.form} onSubmit={handleLogin}>
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
          로그인
        </button>
      </form>
      <button className={styles.secondaryButton} onClick={() => navigate('/signup')}>
        회원가입
      </button>{' '}
    </div>
  );
};

export default Login;
