export default function Validation(form) {
  const errors = {};
  if (!form.name) {
    errors.name = "Campo vacio";
  }
  if (!form.lastname) {
    errors.lastname = "Campo vacio";
  }
  if (!form.nickname) {
    errors.nickname = "Campo vacio";
  }
  if (!form.email) {
    errors.email = "Campo vacio";
  }
  if (!form.birthDate) {
    errors.birthDate = "Campo vacio";
  }
  if (!form.address) {
    errors.address = "Campo vacio";
  }
  if (!form.password) {
    errors.password = "Campo vacio";
  }
  return errors;
}
