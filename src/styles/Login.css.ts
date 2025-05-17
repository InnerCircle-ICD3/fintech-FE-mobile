import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2rem 1rem',
  maxWidth: '480px',
  margin: '0 auto',
});

export const title = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
});

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const input = style({
  width: '100%',
  padding: '0.75rem',
  fontSize: '1rem',
  borderRadius: '8px',
  border: '1px solid #ccc',
});

export const button = style({
  width: '100%',
  padding: '0.75rem',
  fontSize: '1rem',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  marginBottom: '1rem',
});

export const secondaryButton = style({
  backgroundColor: 'transparent',
  color: '#007bff',
  border: 'none',
  textDecoration: 'underline',
  cursor: 'pointer',
  fontSize: '0.9rem',
});
