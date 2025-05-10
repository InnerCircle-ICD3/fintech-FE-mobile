import { useRef, useState, useEffect } from 'react';
import * as styles from '@/styles/Register.css';

interface Props {
  value: string;
  onChange: (cardNumber: string) => void;
}

export function CardNumberInput({ value, onChange }: Props) {
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const [blocks, setBlocks] = useState(['', '', '', '']);

  // 부모가 value를 바꿨을 경우 로컬 상태도 동기화
  useEffect(() => {
    if (value.length === 16) {
      setBlocks([value.slice(0, 4), value.slice(4, 8), value.slice(8, 12), value.slice(12, 16)]);
    }
  }, [value]);

  const handleChange = (index: number, val: string) => {
    if (!/^\d*$/.test(val)) return;

    const newBlocks = [...blocks];
    newBlocks[index] = val.slice(0, 4);
    setBlocks(newBlocks);

    // 전체 번호를 상위로 전달
    onChange(newBlocks.join(''));

    if (val.length === 4 && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && blocks[index] === '' && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className={styles.cardNumberContainer}>
      {blocks.map((block, i) => (
        <input
          key={i}
          ref={(el) => {
            inputsRef.current[i] = el;
          }}
          type="password"
          inputMode="numeric"
          maxLength={4}
          className={styles.cardNumberInput}
          value={block}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, i)}
        />
      ))}
    </div>
  );
}
