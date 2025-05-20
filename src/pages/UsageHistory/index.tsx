import { useQuery } from '@tanstack/react-query';
import { fetchPayments } from '@/api/payments';
import { useEffect, useState } from 'react';
import { defaultFilter, PaymentFilter } from './Filter';
import { useNavigate, useSearchParams } from 'react-router-dom';
import * as styles from '@/styles/UsageHistory.css';
import BottomNav from '@/components/Main/BottomNav';

export interface PaymentItemType {
  id: string;
  date: string;
  store: string;
  amount: number;
}

const PaymentItem = ({ date, store, amount }: { date: string; store: string; amount: number }) => (
  <div className={styles.paymentList}>
    <div className={styles.paymentDate}>{date}</div>
    <div className={styles.paymentName}>{store}</div>
    <div className={styles.paymentAmount}>{amount.toLocaleString()}원</div>
  </div>
);

const UsageHistory = () => {
  const [searchParams] = useSearchParams();
  const [filter, setFilter] = useState<PaymentFilter>(defaultFilter);
  const navigate = useNavigate();

  const startDate = searchParams.get('startDate') || undefined;
  const endDate = searchParams.get('endDate') || undefined;
  const sortBy = (searchParams.get('sortBy') as 'date') || undefined;

  useEffect(() => {
    setFilter({
      startDate: startDate,
      endDate: endDate,
      sortBy: sortBy,
    });
  }, [searchParams]);

  const {
    data: payments,
    isLoading,
    error,
  } = useQuery<PaymentItemType[]>({
    queryKey: ['payments', filter],
    queryFn: () => fetchPayments(filter),
  });

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>💳</div>
        <h1 className={styles.title}>사용내역</h1>
        <div className={styles.rightSpace}></div>
      </header>

      <div className={styles.HistoryInfo}>
        <span>총 {payments?.length ?? 0}건</span>
        <button className={styles.filterButton} onClick={() => navigate('/history/filter?' + searchParams.toString())}>필터</button>
      </div>

      <div>{payments?.map((item) => <PaymentItem key={item.id} {...item} />)}</div>

      <BottomNav />
    </div>
  );
};

export default UsageHistory;
