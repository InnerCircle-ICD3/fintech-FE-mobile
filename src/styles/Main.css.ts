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
  display: 'flex',
  overflowX: 'auto',
  scrollbarWidth: 'none',
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

export const cardActionWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '12px',
  padding: '0 20px 16px',
});

export const cardActionButton = style({
  flex: 1,
  height: '44px',
  backgroundColor: '#F3F4F6',
  border: '1px solid #D1D5DB',
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#111827',
});

export const historyWrapper = style({
  padding: '20px',
});

export const historyHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '12px',
});

export const historyTitle = style({
  fontSize: '16px',
  fontWeight: 'bold',
});

export const viewAllHistory = style({
  fontSize: '14px',
  color: '#3B82F6',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
});

export const historyList = style({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const historyItem = style({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#F9FAFB',
  padding: '12px',
  borderRadius: '8px',
});

export const historyIcon = style({
  fontSize: '24px',
  marginRight: '12px',
});

export const historyDetails = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

export const historyCardRow = style({
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '14px',
});

export const historyStore = style({
  fontWeight: 'bold',
});

export const historyInfoRow = style({
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '13px',
  color: '#6B7280',
});

export const historyAmount = style({
  fontWeight: 'bold',
});

export const historyDate = style({
  fontSize: '13px',
});

export const historyLoading = style({
  padding: '12px',
  textAlign: 'center',
  color: '#6B7280',
});

export const historyError = style({
  padding: '12px',
  textAlign: 'center',
  color: '#EF4444',
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
