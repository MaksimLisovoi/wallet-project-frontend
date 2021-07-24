import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Введите валидный email')
    .required('Укажите адрес электронной почты'),

  password: Yup.string('Пожалуйста, введите пароль')
    .min(6, 'Пароль должен состоять не менее чем из 6 символов')
    .max(12, 'Пароль должен содержать до 12 символов')
    .required('Требуется пароль'),

  confirmPassword: Yup.string('Пожалуйста, повторите пароль')
    .required('Необходим пароль')
    .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать'),

  name: Yup.string('Введите свое имя')
    .min(2, 'Пароль должен состоять не менее чем из 3 символов')
    .max(16, 'Пароль должен содержать до 12 символов')
    .required('Требуется имя'),
});

export default SignupSchema;
