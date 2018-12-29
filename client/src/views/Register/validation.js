import axios from 'axios';
import environment from '../../environment';

export const validate = values => {
  const errors = {};
  if (values.passwordConfirm && values.password !== values.passwordConfirm) {
    errors.passwordConfirm = 'Passwords do not match';
  }
};

export const serverValidate = values => {
  axios.post(`${environment.endpoint}/users`, values);
};
