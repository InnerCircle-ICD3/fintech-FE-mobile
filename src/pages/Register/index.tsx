import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { CardNumberInput } from './CardNumberInput';
import { ExpiryInput } from './ExpiryInput';
import * as styles from '@/styles/Register.css';
import { CardForm, card } from '@/api/card';
import PasswordInput from './PasswordInput';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [showPasswordInput, setShowPasswordInput] = useState(false);

  const [form, setForm] = useState<CardForm>({
    cardNumber: '',
    expiry: '',
    birth: '',
    password2Digits: '',
    cvc: '',
    paymentPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numeric = e.target.value.replace(/\D/g, '');
    setForm({ ...form, [e.target.name]: numeric });
  };

  const mutation = useMutation({
    mutationFn: (data: CardForm) => {
      return fetch('/api/card', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.cardNumber.length !== 16) {
      alert('카드번호를 입력해주세요.');
      return;
    }
    if (form.expiry.length !== 4) {
      alert('유효기간을 입력해주세요.');
      return;
    }
    if (form.birth.length !== 6) {
      alert('생년월일을 입력해주세요.');
      return;
    }
    if (form.password2Digits.length !== 2) {
      alert('카드 비밀번호 앞 2자리를 입력해주세요.');
      return;
    }
    if (form.cvc.length !== 3) {
      alert('cvc 번호를 입력해주세요.');
      return;
    }

    setShowPasswordInput(true);
  };

  return (
    <div>
      {!showPasswordInput ? (
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>
            카드번호
            <CardNumberInput
              value={form.cardNumber}
              onChange={(val) => {
                setForm({ ...form, cardNumber: val });
              }}
            />
          </label>

          <label className={styles.label}>
            유효기간 (MM/YY)
            <ExpiryInput
              onChange={(val) => {
                setForm({ ...form, expiry: val });
              }}
            />
          </label>

          <label className={styles.label}>
            생년월일 (6자리)
            <input
              type="password"
              name="birth"
              inputMode="numeric"
              maxLength={6}
              value={form.birth}
              onChange={handleChange}
              className={styles.input}
            />
          </label>

          <label className={styles.label}>
            카드 비밀번호 앞 2자리
            <input
              type="password"
              name="password2Digits"
              inputMode="numeric"
              maxLength={2}
              value={form.password2Digits}
              onChange={handleChange}
              className={styles.input}
            />
          </label>

          <label className={styles.label}>
            CVC
            <input
              type="password"
              name="cvc"
              inputMode="numeric"
              maxLength={3}
              value={form.cvc}
              onChange={handleChange}
              className={styles.input}
            />
          </label>

          <button type="submit" className={styles.button}>
            등록하기
          </button>
        </form>
      ) : (
        <PasswordInput
          onSubmit={(value) => {
            setForm({ ...form, paymentPassword: value });
            card.register(form);
            alert('카드 정보가 등록되었습니다.');
            navigate('/');
          }}
        />
      )}
    </div>
  );
};

export default Register;
