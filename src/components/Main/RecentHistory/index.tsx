import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { fetchPayments } from '@/api/payments';
import { PaymentItemType } from '@/pages/UsageHistory';
import { defaultFilter } from '@/pages/UsageHistory/Filter';
import * as styles from '@/styles/Main.css';

const RecentHistory = () => {
  const {
    data: payments,
    isLoading,
    error,
  } = useQuery<PaymentItemType[]>({
    queryKey: ['payments', defaultFilter],
    queryFn: () => fetchPayments(defaultFilter),
  });

  const recentPayments = payments?.slice(0, 2) ?? [];

  return (
    <section className={styles.historyWrapper}>
      <div className={styles.historyHeader}>
        <span className={styles.historyTitle}>최근 이용 내역</span>
        <button className={styles.viewAllHistory}>전체보기 &gt;</button>
      </div>

      {isLoading && <div className={styles.historyLoading}>불러오는 중...</div>}
      {error && <div className={styles.historyError}>이용 내역을 불러올 수 없습니다.</div>}

      {!isLoading && !error && (
        <ul className={styles.historyList}>
          {recentPayments.map((item) => (
            <li key={item.id} className={styles.historyItem}>
              <div className={styles.historyIcon}>💳</div>
              <div className={styles.historyDetails}>
                <div className={styles.historyStore}>{item.store}</div>
                <div className={styles.historyInfoRow}>
                  <span className={styles.historyAmount}>{item.amount.toLocaleString()}원</span>
                  <span className={styles.historyDate}>{item.date}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default RecentHistory;
