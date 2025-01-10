const isCardNumberValid = (cardNumber: string) => {
  const cardNumberRegex = /^[0-9]{16}$/;
  return cardNumberRegex.test(cardNumber);
};

const isNameValid = (name: string) => {
  const nameRegex = /^[a-zA-Z ]+$/;
  return nameRegex.test(name);
};

const isMonthValid = (month: string) => {
  const monthRegex = /^[0-9]{2}$/;
  return monthRegex.test(month);
};

const isYearValid = (year: string) => {
  const yearRegex = /^[0-9]{4}$/;
  return yearRegex.test(year);
};

const isCvvValid = (cvv: string) => {
  const cvvRegex = /^[0-9]{3}$/;
  return cvvRegex.test(cvv);
};

export { isCardNumberValid, isNameValid, isMonthValid, isYearValid, isCvvValid };