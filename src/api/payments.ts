import { PaymentItemType } from '@/pages/UsageHistory';

export const fetchPayments = async (): Promise<PaymentItemType[]> => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve([
        {
          id: '1',
          date: '2025-05-01',
          store: '스타벅스 강남점',
          amount: 4800,
        },
        {
          id: '2',
          date: '2025-05-03',
          store: '이마트24 삼성점',
          amount: 2300,
        },
      ]);
    }, 500)
  );
};
