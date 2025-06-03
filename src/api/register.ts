export type CardForm = {
  cardNumber: string;
  expiry: string;
  birth: string;
  password2Digits: string;
  cvc: string;
  paymentPassword: string;
};

const cardInfos: CardForm[] = [
  {
    cardNumber: '1234123412341234',
    expiry: '0526',
    birth: '990113',
    password2Digits: '12',
    cvc: '123',
    paymentPassword: '123456',
  },
];

export const register = (card: CardForm) => {
  cardInfos.push(card);
};
