// import React from 'react';

import { Formik, Field, Form, useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import BasicFormSchema from './schemaForForm';
import * as yup from 'yup';
import { authOperations } from '../../../redux/auth';
import s from './login.module.css';

import Logos from '../../../components/Logos/Logos';
import BlueStain from '../../../icons/blueStain/blueStain';
import PinkStain from '../../../icons/pinkStain/pinkStain';
import MainPhoto from '../../../icons/mainPhotoComp/mainPhotoComp';
import Envelope from '../../../icons/envelopeData/envelope';
import Lock from '../../../icons/lock/lock';

export default function LoginPage() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validation: yup.object({
      username: yup.string().required('Пожалуйста, введите имя пользователя'),
      email: yup
        .string()
        .email()
        .required('Пожалуйста, введите свой адрес электронной почты'),

      password: yup
        .string('Пожалуйста, введите пароль')
        .min(7, 'Пароль должен состоять не менее чем из 6 символов')
        .max(26, 'Пароль должен содержать до 12 символов')
        .required('Требуется пароль'),
    }),

    //   onSubmit: ({ email, password, name }) => {
    //     dispatch(authOperations.register({ name, email, password }));
    //   },
    // });
    onSubmit: (values, { resetForm }) => {
      const { email, password, name } = values;
      dispatch(authOperations.logIn({ email, password, name }));
      resetForm();
      //resetForm({});
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

        <form className={s.formContainer} onSubmit={formik.handleSubmit}>
          <label className={s.posRelative}>
            <input
              name="email"
              placeholder="E-mail "
              type="email"
              className={s.email}
              value={formik.email}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ''}
            <Envelope />
          </label>

          <label className={s.posRelative}>
            <input
              name="password"
              placeholder="Пароль"
              type="password"
              className={s.password}
              value={formik.password}
              onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password
              ? formik.errors.password
              : ''}
            <Lock />
          </label>

          <button type="submit" className={s.enter}>
            <span className={s.text}>Вход</span>
          </button>
          <button type="submit" className={s.registration}>
            <span className={s.textRegistration}>Регистрация</span>
          </button>
        </form>
      </div>
    </>
  );
}
