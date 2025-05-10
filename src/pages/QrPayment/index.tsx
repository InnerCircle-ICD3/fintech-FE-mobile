import { useRef, useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';

const QrPayment = () => {
  const [qrData, setQrData] = useState<string | null>(null);
  const hasScannedRef = useRef(false); // 중복 스캔 방지

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
    <div>
      <h1>QR 결제</h1>
      {!qrData ? (
        <div style={{ width: '100%', maxWidth: 400 }}>
          <Scanner
            onScan={handleScan}
            constraints={{ facingMode: 'environment' }}
            onError={(error) => console.error('QR 스캔 에러:', error)}
          />
        </div>
      ) : (
        <div>
          <p>
            <strong>QR 데이터:</strong> {qrData}
          </p>
          <button onClick={handleConfirm}>확인</button>
          <button onClick={handleCancel}>취소</button>
        </div>
      )}
    </div>
  );
};

export default QrPayment;
