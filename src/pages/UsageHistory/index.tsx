import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { fetchPayments } from '@/api/payments';

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
  const {
    data: payments,
    isLoading,
    error,
  } = useQuery<PaymentItemType[]>({
    queryKey: ['payments'],
    queryFn: fetchPayments,
  });

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;

  return (
    <div>
      <h1>사용내역</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>총 {payments?.length ?? 0}건</span>
        <button>필터</button>
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
