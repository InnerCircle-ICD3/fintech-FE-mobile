import { useNavigate } from 'react-router-dom';
import * as styles from '@/styles/Payment.css';
import { useState } from 'react';
import CardSlider from '@/components/CardSlider';
import Text from '@/components/ui/text';
import Flex from '@/components/layout/flex';

export type Order = {
  amount: number;
  merchant_order_id: string;
  merchant_id: string;
  productName: string;
};

const Payment = ({ amount, merchant_order_id, merchant_id, productName }: Order) => {
  const [selectedCardNumber, setSelectedCardNumber] = useState('');

  const navigate = useNavigate();

  const handleClickPay = () => {
    if (!selectedCardNumber) {
      alert('결제 카드를 선택해 주세요.');
      return;
    }

    navigate('/payment/password', {
      state: {
        store: productName,
        amount: amount,
        cardNumber: selectedCardNumber,
      },
    });
  };

  return (
    <div className={styles.payContainer}>
      <h1 className={styles.payTitle}>상품 결제</h1>
      <div className={styles.payInfoBox}>
        <Flex direction={'column'} gap={'4px'} justify={'center'} align={'center'}>
          <Text size={'xs'}>{productName}</Text>
          <Text size={'md'} weight={'bold'}>{amount.toLocaleString()}원</Text>
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
