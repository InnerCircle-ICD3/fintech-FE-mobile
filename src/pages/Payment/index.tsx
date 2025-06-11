import { useNavigate } from 'react-router-dom';
import * as styles from '@/styles/Payment.css';
import { useState } from 'react';
import CardSlider from '@/components/CardSlider';
import Text from '@/components/ui/text';
import Flex from '@/components/layout/flex';

const Payment = () => {
  const [selectedCardNumber, setSelectedCardNumber] = useState('');

  const navigate = useNavigate();

  const handleClickPay = () => {
    if (!selectedCardNumber) {
      alert('결제 카드를 선택해 주세요.');
      return;
    }

    navigate('/payment/password', {
      state: {
        store: '네이버 스토어',
        amount: 59000,
        cardNumber: selectedCardNumber,
      },
    });
  };

  return (
    <div className={styles.payContainer}>
      <h1 className={styles.payTitle}>상품 결제</h1>
      <div className={styles.payInfoBox}>
        <Flex direction={'column'} gap={'4px'} justify={'center'} align={'center'}>
          <Text size={'xs'}>[2PACK] 싱글 에어그램 반팔 티셔츠</Text>
          <Text size={'md'} weight={'bold'}>59,000원</Text>
        </Flex>
          <CardSlider
            selectable={true}
            selectedCardNumber={selectedCardNumber}
            onSelected={(val) => {
              setSelectedCardNumber(val);
            }}
          />
      </div>
      <div className={styles.buttonGroup}>
        <button className={styles.payButton} onClick={handleClickPay}>
          결제하기
        </button>
        <button className={styles.cancelButton} onClick={() => navigate('/payment/fail')}>
          취소
        </button>
      </div>
    </div>
  );
};

export default Payment;
