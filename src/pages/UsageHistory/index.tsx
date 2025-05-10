import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { fetchPayments } from '@/api/payments';
import { useEffect, useState } from 'react';
import { defaultFilter, PaymentFilter } from './Filter';
import { useNavigate, useSearchParams } from 'react-router-dom';

export interface PaymentItemType {
  id: string;
  date: string;
  store: string;
  amount: number;
}

const PaymentItem = ({ date, store, amount }: { date: string; store: string; amount: number }) => (
  <div style={{ borderBottom: '1px solid #eee', padding: '10px 0' }}>
    <div>{date}</div>
    <div>{store}</div>
    <div>{amount.toLocaleString()}원</div>
  </div>
);

const UsageHistoryComponent = () => {
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
      <h1>사용내역</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>총 {payments?.length ?? 0}건</span>
        <button onClick={() => navigate('/history/filter')}>필터</button>
      </div>

      <div>{payments?.map((item) => <PaymentItem key={item.id} {...item} />)}</div>
    </div>
  );
};

const UsageHistory = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <UsageHistoryComponent />
    </QueryClientProvider>
  );
};

export default UsageHistory;
