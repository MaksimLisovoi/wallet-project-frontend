import { React } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';


import authOperations from '../../../redux/auth/auth-operations';
import { useFormik } from 'formik';


import Logos from '../../../components/Logos/Logos';
import BlueStain from '../../../icons/blueStain/blueStain';
import PinkStain from '../../../icons/pinkStain/pinkStain';
import Girl from '../../../icons/girlMain/girl';
import Envelope from '../../../icons/envelopeData/envelope';
import Lock from '../../../icons/lock/lock';
import Name from '../../../icons/name/name';
import s from './registration.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required('Укажите адрес электронной почты'),

      password: Yup.string('Пожалуйста, введите пароль')
        .min(7, 'Пароль должен состоять не менее чем из 7 символов')
        .max(26, 'Пароль должен содержать до 12 символов')
        .required('Требуется пароль'),

      confirmPassword: Yup.string('Пожалуйста, повторите пароль')
        .required('Необходим пароль')
        .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать'),

      name: Yup.string('Введите свое имя')
        .min(4, 'Пароль должен состоять не менее чем из 3 символов')
        .max(16, 'Пароль должен содержать до 12 символов')
        .required('Требуется имя'),
    }),
    onSubmit: (values, { resetForm }) => {
      const { email, password, name } = values;
      dispatch(authOperations.register({ email, password, name }));
      resetForm({});
    },
  });
  return (
    <>
      <BlueStain />
      <PinkStain />
      <Girl />
      <div className={s.container}>
        <div className={s.headRegistr}>
          <Logos />
        </div>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email" className={s.envelopePos}>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="E-mail"
              className={s.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className={s.textStyleError}>{formik.errors.email}</div>
            ) : null}
            <Envelope />
          </label>
          <label htmlFor="password" className={s.passwordPhoto}>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Пароль"
              className={s.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className={s.textStyleError}>{formik.errors.password}</div>
            ) : null}
            <Lock />
          </label>
          <label htmlFor="confirmPassword" className={s.passwordPhoto}>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Подтвердите пароль"
              className={s.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className={s.textStyleError}>
                {formik.errors.confirmPassword}
              </div>
            ) : null}
            <Lock />
          </label>
          <label htmlFor="name" className={s.namPh}>
            <input
              id="name"
              name="name"
              type="name"
              placeholder="Ваше Имя"
              className={s.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className={s.textStyleError}>{formik.errors.name}</div>
            ) : null}
            <Name />
          </label>
          <button type="submit" className={s.enter}>
            <span className={s.text}> Регистрация</span>
          </button>
          <button type="submit" className={s.registration}>
            <span className={s.textRegistration}>Вход</span>
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
