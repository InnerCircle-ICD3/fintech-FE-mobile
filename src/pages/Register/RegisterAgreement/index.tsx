import BackIcon from '@/assets/img/back-icon.svg?react';
import * as styles from '@/styles/Register.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterAgreement = () => {
  const navigate = useNavigate();

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);

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
        <div className={styles.agreementItem}>
          <div className={styles.agreementItemOption}>(필수)</div>
          <div className={styles.agreementItemTitle}>오픈뱅킹 출금 이체 동의</div>
          <button
            className={!check1 ? styles.agreementItemUnCheck : styles.agreementItemCheck}
            onClick={() => {
              setCheck1(!check1);
            }}
          >
            ✓
          </button>
        </div>
        <div className={styles.agreementItem}>
          <div className={styles.agreementItemOption}>(필수)</div>
          <div className={styles.agreementItemTitle}>전자금융거래 이용 약관 동의</div>
          <button
            className={!check2 ? styles.agreementItemUnCheck : styles.agreementItemCheck}
            onClick={() => {
              setCheck2(!check2);
            }}
          >
            ✓
          </button>
        </div>
        <div className={styles.agreementItem}>
          <div className={styles.agreementItemOption}>(필수)</div>
          <div className={styles.agreementItemTitle}>개인정보 제3자 제공 동의</div>
          <button
            className={!check3 ? styles.agreementItemUnCheck : styles.agreementItemCheck}
            onClick={() => {
              setCheck3(!check3);
            }}
          >
            ✓
          </button>
        </div>
        <div className={styles.agreementItem}>
          <div className={styles.agreementItemOption}>(필수)</div>
          <div className={styles.agreementItemTitle}>은행 출금이체 약관</div>
          <button
            className={!check4 ? styles.agreementItemUnCheck : styles.agreementItemCheck}
            onClick={() => {
              setCheck4(!check4);
            }}
          >
            ✓
          </button>
        </div>
        <div className={styles.agreementItem}>
          <div className={styles.agreementItemOption}>(필수)</div>
          <div className={styles.agreementItemTitle}>본인 확인 및 인증 동의</div>
          <button
            className={!check5 ? styles.agreementItemUnCheck : styles.agreementItemCheck}
            onClick={() => {
              setCheck5(!check5);
            }}
          >
            ✓
          </button>
        </div>
      </div>

      <button
        className={styles.button}
        onClick={() => {
          if (!check1) {
            alert('오픈뱅킹 출금 이체에 동의해주세요.');
            return;
          }
          if (!check2) {
            alert('전자금융거래 이용 약관에 동의해주세요.');
            return;
          }
          if (!check3) {
            alert('개인정보 제3자 제공에 동의해주세요.');
            return;
          }
          if (!check4) {
            alert('은행 출금 이체에 동의해주세요.');
            return;
          }
          if (!check5) {
            alert('본인 확인 및 인증에 동의해주세요.');
            return;
          }

          navigate('/register');
        }}
      >
        다음
      </button>
    </div>
  );
};

export default RegisterAgreement;
