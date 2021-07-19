// import React from 'react';
import { NavLink } from 'react-router-dom';

import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import * as Yup from 'yup';
import authOperations from '../../../redux/auth/auth-operations';

import s from './login.module.css';

import Logos from '../../../components/Logos/Logos';
import BlueStain from '../../../icons/blueStain/blueStain';
import PinkStain from '../../../icons/pinkStain/pinkStain';
import MainPhoto from '../../../icons/mainPhotoComp/mainPhotoComp';
import Envelope from '../../../icons/envelopeData/envelope';
import Lock from '../../../icons/lock/lock';

const LoginPage = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email()
        .required('Введите свой адрес электронной почты'),

      password: Yup.string('Введите пароль')
        .min(6, 'Пароль должен состоять не менее чем из 6 символов')
        .max(12, 'Пароль должен содержать до 12 символов')
        .required('Требуется пароль'),
    }),
    onSubmit: (values, { resetForm }) => {
      const { email, password, name } = values;
      dispatch(authOperations.logIn({ email, password, name }));
      resetForm({});
    },
  });
  return (
    <>
      <BlueStain />
      <PinkStain />
      <MainPhoto />
      <div className={s.container}>
        <div className={s.contForHead}>
          <Logos />
        </div>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email" className={s.posRelative}>
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
          <label htmlFor="password" className={s.posRelative}>
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

          {/* <NavLink exact to="/login"> */}
          <button type="submit" className={s.enter}>
            <span className={s.text}>Вход</span>
          </button>
          {/* </NavLink> */}

          {/* <NavLink exact to="/register"> */}

          {/* </NavLink> */}
        </form>
        {/* onClick по клику поменять историю, history.push 'register' */}
        <button type="button" className={s.registration}>
          <span className={s.textRegistration}> Регистрация</span>
        </button>
      </div>
    </>
  );
};

export default LoginPage;
