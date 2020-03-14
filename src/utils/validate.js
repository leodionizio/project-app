import { messages } from '../constants/index';

const validators = {
  formValidate: (form, errors) => {
    for (const key in form) {
      if (!form[key]) {
        errors = { ...errors, [key]: messages.empty[key] };
      } else {
        delete errors[key];
      }
    }

    return errors;
  }
};

export default validators;
