export const required = (value) => {
  if (value) return "error message";
  return "Field is required";
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) return ` Max symbols is ${maxLength} symbols`;
  return undefined;
};
