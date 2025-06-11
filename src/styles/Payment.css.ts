import { style } from '@vanilla-extract/css';

export const payContainer = style({
  padding: '24px',
  fontSize: '16px',
});

export const payTitle = style({
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '16px',
});

export const payInfoBox = style({
  marginBottom: '24px',
});

export const buttonGroup = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '8px',
});

export const payButton = style({
  width: '100%',
  padding: '12px',
  backgroundColor: '#18254C',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '16px',
  borderRadius: '8px',
  border: 'none',
});

export const cancelButton = style({
  width: '100%',
  padding: '12px',
  backgroundColor: 'gray',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '16px',
  borderRadius: '8px',
  border: 'none',
});

// export const passwordGrid = style({
//   display: 'grid',
//   gridTemplateColumns: 'repeat(3, 1fr)',
//   gap: '12px',
//   marginTop: '24px',
// });

export const passwordGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '16px',
  marginTop: '16px',
  width: '100%',
  maxWidth: '280px',
});

export const passwordKey = style({
  padding: '16px 0',
  fontSize: '20px',
  textAlign: 'center',
  borderRadius: '8px',
  border: '1px solid #ddd',
  backgroundColor: '#f9f9f9',
  ':active': {
    backgroundColor: '#e0e0e0',
  },
});


// export const passwordContainer = style({
//   padding: '24px',
// });
//
// export const passwordTitle = style({
//   fontSize: '20px',
//   fontWeight: 'bold',
//   marginBottom: '16px',
// });

export const passwordContainer = style({
  padding: '48px 24px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const passwordTitle = style({
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '24px',
  textAlign: 'center',
});

export const passwordInputBox = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '8px',
  marginBottom: '24px',
});

export const passwordDigit = style({
  width: '40px',
  height: '40px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  backgroundColor: '#fff',
});

export const passwordFilled = style({
  backgroundColor: '#000',
});

export const resultContainer = style({
  padding: '24px',
  textAlign: 'center',
});

export const messageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '25%',
});

export const resultMessage = style({
  fontSize: '24px',
  fontWeight: 'bold',
});

export const homeButton = style({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  alignItems: 'center',
  height: '64px',
  fontSize: '1rem',
  background: '#18254C',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  margin: '1rem',
});



export const passwordDotWrapper = style({
  display: 'flex',
  gap: '12px',
  marginBottom: '16px',
});

export const passwordDot = style({
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  backgroundColor: '#E5E7EB',
});

export const passwordDotFilled = style({
  backgroundColor: '#111827',
});

export const passwordAttempt = style({
  color: '#EF4444',
  fontSize: '14px',
  fontWeight: 'bold',
  marginBottom: '16px',
});

export const passwordHint = style({
  fontSize: '13px',
  color: '#9CA3AF',
  marginBottom: '16px',
});



