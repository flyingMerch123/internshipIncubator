export const validateForm = (form: { [key: string]: string | Date }, validator: Function): void => {
  for (const field in form) {
    if (form[field]) {
      validator(field)
    }
  }
}
