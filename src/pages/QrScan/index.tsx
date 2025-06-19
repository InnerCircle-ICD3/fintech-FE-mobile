import { useEffect, useRef, useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import * as styles from '@/styles/QrScan.css';
import BottomNav from '@/components/Main/BottomNav';
import Text from '@/components/ui/text';
import Payment, { Order } from '../Payment';

const QrScan = () => {
  const [qrData, setQrData] = useState<string | null>(null);
  const [order, setOrder] = useState<Order | null>(null);
  const hasScannedRef = useRef(false); // 중복 스캔 방지

  useEffect(() => {
    try {
      const parsed: Order = JSON.parse(qrData ?? '');
      setOrder(parsed);
    } catch {
      setOrder(null);
    }
  }, [qrData]);

  const handleScan = (detectedCodes: { rawValue: string }[]) => {
    if (!hasScannedRef.current && detectedCodes.length > 0) {
      hasScannedRef.current = true;
      setQrData(detectedCodes[0].rawValue);
    }
  };

  const handleConfirm = () => {
    alert(`결제 요청 완료\nQR 데이터: ${qrData}`);
    resetScanner();
  };

  const handleCancel = () => {
    alert('결제가 취소되었습니다.');
    resetScanner();
  };

  const resetScanner = () => {
    setQrData(null);
    hasScannedRef.current = false;
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>QR결제</h1>
      </header>
      {!qrData ? (
        <div className={styles.ScannerWrapper}>
          <p className={styles.ScannerInfo}><Text weight={'medium'}>화면에 맞게 QR코드를 스캔해주세요.</Text></p>
          <Scanner
            styles={{
              video: {
                width: '80%',
                height: '80%',
                borderRadius: '12px',
              },
            }}
            onScan={handleScan}
            constraints={{ facingMode: 'environment' }}
            onError={(error) => console.error('QR 스캔 에러:', error)}
          />
        </div>
      ) : (
        <Payment
          amount={order?.amount ?? 0}
          merchant_order_id={order?.merchant_order_id ?? ''}
          merchant_id={order?.merchant_id ?? ''}
          productName={order?.productName ?? ''}
        />
      )}
      <BottomNav />
    </div>
  );
};

export default QrScan;
