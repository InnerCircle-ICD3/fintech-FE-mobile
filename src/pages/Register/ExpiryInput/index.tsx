import { useRef, useState } from 'react';
import * as styles from '@/styles/Register.css';

interface Props {
  onChange: (expiry: string) => void;
}

export function ExpiryInput({ onChange }: Props) {
  const [expiry, setExpiry] = useState({ mm: '', yy: '' });
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (index: number, newVal: string) => {
    const val = newVal.replace(/\D/g, '').slice(0, 2);
    const newExpiry = { ...expiry, [index === 0 ? 'mm' : 'yy']: val };

    setExpiry(newExpiry);

    onChange(newExpiry.mm + newExpiry.yy);

    if (val.length === 2 && index === 0) {
      inputsRef.current[1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace') {
      const current = index === 0 ? expiry.mm : expiry.yy;
      if (current === '' && index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    }
    if (e.key === 'ArrowLeft' && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
    if (e.key === 'ArrowRight' && index < 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  return (
    <div className={styles.expiryBlockContainer}>
      <input
        ref={(el) => {
          inputsRef.current[0] = el;
        }}
        type="password"
        inputMode="numeric"
        maxLength={2}
        placeholder="MM"
        className={styles.expiryBlock}
        value={expiry.mm}
        onChange={(e) => handleChange(0, e.target.value)}
        onKeyDown={(e) => handleKeyDown(e, 0)}
      />
      <span className={styles.slash}>/</span>
      <input
        ref={(el) => {
          inputsRef.current[1] = el;
        }}
        type="password"
        inputMode="numeric"
        maxLength={2}
        placeholder="YY"
        className={styles.expiryBlock}
        value={expiry.yy}
        onChange={(e) => handleChange(1, e.target.value)}
        onKeyDown={(e) => handleKeyDown(e, 1)}
      />
    </div>
  );
}
