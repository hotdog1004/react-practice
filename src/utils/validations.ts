export const isValidName = (value: string): boolean => {
  const pattern = /^[ㄱ-ㅎ가-힣a-zA-Z\s]+$/;
  return pattern.test(value);
};

export const isValidEMail = (value: string): boolean => {
  const pattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  return pattern.test(value);
};
