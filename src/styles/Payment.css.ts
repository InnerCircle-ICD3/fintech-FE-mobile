import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '24px',
  fontSize: '16px',
});

export const title = style({
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '16px',
});

export const infoBox = style({
  marginBottom: '24px',
});

export const payButton = style({
  width: '100%',
  padding: '12px',
  backgroundColor: '#007aff',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '16px',
  borderRadius: '8px',
  border: 'none',
});
