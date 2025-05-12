import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { CardNumberInput } from './CardNumberInput';
import { ExpiryInput } from './ExpiryInput';
import * as styles from '@/styles/Register.css';

type CardForm = {
  cardNumber: string;
  expiry: string;
  birth: string;
  password2Digits: string;
  cvc: string;
};

const Register = () => {
  const [form, setForm] = useState<CardForm>({
    cardNumber: '',
    expiry: '',
    birth: '',
    password2Digits: '',
    cvc: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
    mutation.mutate(form);
  };

  return (
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
  );
};

export default Register;
