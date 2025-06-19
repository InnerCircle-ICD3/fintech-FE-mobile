import BackIcon from '@/assets/img/back-icon.svg?react';
import * as styles from '@/styles/Register.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AgreementItem = ({
  label,
  isChecked,
  onToggle,
}: {
  label: string;
  isChecked: boolean;
  onToggle: () => void;
}) => (
  <div className={styles.agreementItem}>
    <div className={styles.agreementItemOption}>(필수)</div>
    <div className={styles.agreementItemTitle}>{label}</div>
    <button
      className={!isChecked ? styles.agreementItemUnCheck : styles.agreementItemCheck}
      onClick={onToggle}
    >
      ✓
    </button>
  </div>
);

const RegisterAgreement = () => {
  const navigate = useNavigate();

  const [agreements, setAgreements] = useState({
    openBanking: false,
    electronFinance: false,
    personalInfo: false,
    bankTransfer: false,
    identification: false,
  });

  const updateAgreement = (key: keyof typeof agreements) => {
    setAgreements((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const agreementItems = [
    { key: 'openBanking', label: '오픈뱅킹 출금 이체 동의' },
    { key: 'electronFinance', label: '전자금융거래 이용 약관 동의' },
    { key: 'personalInfo', label: '개인정보 제3자 제공 동의' },
    { key: 'bankTransfer', label: '은행 출금이체 약관 동의' },
    { key: 'identification', label: '본인 확인 및 인증 동의' },
  ];

  const agreementValidations = [
    { key: 'openBanking', message: '오픈뱅킹 출금 이체에 동의해주세요.' },
    { key: 'electronFinance', message: '전자금융거래 이용 약관에 동의해주세요.' },
    { key: 'personalInfo', message: '개인정보 제3자 제공에 동의해주세요.' },
    { key: 'bankTransfer', message: '은행 출금이체 약관에 동의해주세요.' },
    { key: 'identification', message: '본인 확인 및 인증에 동의해주세요.' },
  ];

  const handleNext = () => {
    const uncheckedItem = agreementValidations.find(
      (item) => !agreements[item.key as keyof typeof agreements]
    );

    if (uncheckedItem) {
      alert(uncheckedItem.message);
      return;
    }

    navigate('/register');
  };

  return (
    <div>
      <header className={styles.header}>
        <button className={styles.backButton} onClick={() => navigate('/')}>
          <BackIcon />
        </button>
        <div className={styles.headerName}>카드 등록하기</div>
        <div></div>
      </header>

      <div>
        <h1 className={styles.agreementTitle}>
          {'안전한 결제를 위해 카드 연결 약관에'}
          <br />
          {'동의해주세요.'}
        </h1>

        <div className={styles.agreementDescription}>
          {'카드를 등록하면 원활한 거래 진행을 위해'}
          <br />
          {'안전하게 사용할 수 있습니다.'}
        </div>
      </div>

      <div>
        {agreementItems.map((item) => (
          <AgreementItem
            key={item.key}
            label={item.label}
            isChecked={agreements[item.key as keyof typeof agreements]}
            onToggle={() => updateAgreement(item.key as keyof typeof agreements)}
          />
        ))}
      </div>

      <button className={styles.button} onClick={handleNext}>
        다음
      </button>
    </div>
  );
};

export default RegisterAgreement;
