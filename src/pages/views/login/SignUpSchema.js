import * as Yup from 'yup';

const SchemaValidation = Yup.object().shape({
  email: Yup.string().email().required('Введите свой адрес электронной почты'),

  password: Yup.string('Введите пароль')
    .min(6, 'Пароль должен состоять не менее чем из 6 символов')
    .max(12, 'Пароль должен содержать до 12 символов')
    .required('Требуется пароль'),
});

export default SchemaValidation;
