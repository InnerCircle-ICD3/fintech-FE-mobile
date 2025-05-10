import { style } from '@vanilla-extract/css';

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  padding: '20px',
  width: '100%',
  maxWidth: '400px',
  margin: '0 auto',
  boxSizing: 'border-box',
});

export const label = style({
  display: 'flex',
  flexDirection: 'column',
  fontSize: '14px',
  fontWeight: '500',
  color: '#333',
});

export const input = style({
  marginTop: '6px',
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  backgroundColor: '#fff',
  boxSizing: 'border-box',
});

export const button = style({
  padding: '12px',
  fontSize: '16px',
  fontWeight: 'bold',
  color: 'white',
  backgroundColor: '#1e90ff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#187bcd',
  },
});

export const cardNumberContainer = style({
  display: 'flex',
  gap: '8px',
});

export const cardNumberInput = style({
  width: '60px',
  padding: '10px',
  fontSize: '16px',
  textAlign: 'center',
  border: '1px solid #ccc',
  borderRadius: '6px',
  backgroundColor: '#fff',
});
