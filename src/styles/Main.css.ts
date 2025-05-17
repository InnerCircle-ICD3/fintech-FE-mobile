import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  paddingBottom: '80px',
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '16px 20px',
  height: '60px',
  backgroundColor: '#ffffff',
  borderBottom: '1px solid #e5e7eb',
  position: 'sticky',
  top: 0,
  zIndex: 10,
});

export const logo = style({
  fontSize: '24px',
});

export const title = style({
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#111827',
});

export const rightSpace = style({
  width: '24px', // 오른쪽 공간 확보용 (아이콘 자리)
});

export const cardWrapper = style({
  padding: '16px 0',
  overflowX: 'auto',
  WebkitOverflowScrolling: 'touch',
});

export const scrollArea = style({
  display: 'flex',
  gap: '12px',
  padding: '0 20px',
});

export const card = style({
  minWidth: '240px',
  height: '140px',
  borderRadius: '12px',
  backgroundColor: '#1D4ED8',
  color: '#fff',
  display: 'flex',
  alignItems: 'flex-end',
  padding: '16px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  flexShrink: 0,
});

export const cardNumber = style({
  fontSize: '16px',
  fontWeight: 'bold',
});

export const nav = style({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  height: '60px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  borderTop: '1px solid #e5e7eb',
  padding: '0 20px',
  zIndex: 10,
});

export const sideButton = style({
  background: 'none',
  border: 'none',
  fontSize: '14px',
  color: '#111827',
});

export const qrButton = style({
  position: 'absolute',
  top: '-25px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '50px',
  height: '50px',
  borderRadius: '25px',
  backgroundColor: '#1D4ED8',
  color: '#fff',
  border: 'none',
  fontSize: '14px',
  zIndex: 11,
});
