export const validateForm = (form: { [key: string]: Date | string }, validator: Function): void => {
  for (const field in form) {
    if (form[field]) {
      validator(field)
    }
  }
}
