import { React, Component } from 'react';
import { connect, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import authOperations from '../../../redux/auth/auth-operations';
import { Formik, Field, Form, useFormik } from 'formik';
import BasicFormSchema from './schemRegistration';
import Logos from '../../../components/Logos/Logos';
import BlueStain from '../../../icons/blueStain/blueStain';
import PinkStain from '../../../icons/pinkStain/pinkStain';
import Girl from '../../../icons/girlMain/girl';
import Envelope from '../../../icons/envelopeData/envelope';
import Lock from '../../../icons/lock/lock';
import Name from '../../../icons/name/name';
import s from './registration.module.css';

export default function RegisterPage() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
    },

    validation: Yup.object().shape({
      username: Yup.string().required('Пожалуйста, введите имя пользователя'),
      email: Yup.string()
        .email()
        .required('Пожалуйста, введите свой адрес электронной почты'),
      confirmEmail: Yup.string(
        'Пожалуйста, введите свой адрес электронной почты',
      )
        .email('Пожалуйста,ведите действующий адрес электронной почты')
        .required('Требуется электронная почта')
        .oneOf([Yup.ref('email'), null], 'Электронные письма должны совпадать'),
      password: Yup.string('Пожалуйста, введите пароль')
        .min(7, 'Пароль должен состоять не менее чем из 7 символов')
        .max(26, 'Пароль должен содержать до 12 символов')
        .required('Требуется пароль'),

      confirmPassword: Yup.string('Пожалуйста, повторите пароль')
        .required('Требуется пароль')
        .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать'),

      name: Yup.string('Пожалуйста введите свое имя')
        .min(3, 'Пароль должен состоять не менее чем из 3 символов')
        .max(12, 'Пароль должен содержать до 12 символов')
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
        <Formik
          render={({
            errors,
            touched,
            isSubmitting,
            email,
            password,
            name,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <Form className={s.wrraper} onSubmit={formik.handleSubmit}>
              {/* <label htmlFor="email">Email</label> */}
              <label className={s.envelopePos}>
                <Field
                  name="email"
                  placeholder="E-mail"
                  type="email"
                  className={s.email}
                  value={formik.email}
                  onChange={formik.handleChange}
                  onBlur={handleBlur}
                />
                <Envelope />
              </label>
              {/* <img src={like} alt="like" /> */}
              {
                //если в этом поле возникла ошибка и
                //если это поле "затронуто, то выводим ошибку
                errors.email && touched.email && (
                  <div className="field-error">{errors.email}</div>
                )
              }
              {/* <label htmlFor="password">Password</label> */}
              <label className={s.passwordPhoto}>
                <Field
                  name="password"
                  placeholder="Пароль"
                  type="password"
                  className={s.password}
                  value={formik.password}
                  onChange={formik.handleChange}
                />
                <Lock />
              </label>
              {errors.password && touched.password && (
                <div className="field-error">{errors.password}</div>
              )}
              <label className={s.confPasswordPh}>
                <Field
                  name="confirmPassword"
                  placeholder="Подтвердите пароль"
                  type="password"
                  className={s.password}
                  value={formik.confirmPassword}
                  onChange={formik.handleChange}
                />
                <Lock />
              </label>
              {errors.confirmPassword && touched.confirmPassword && (
                <div className="field-error">{errors.confirmPassword}</div>
              )}
              <label className={s.namPh}>
                <Field
                  name="name"
                  placeholder="Ваше Имя"
                  type="name"
                  className={s.password}
                  value={formik.name}
                  onChange={formik.handleChange}
                />
                <Name />
              </label>
              {errors.name && touched.name && (
                <div className="field-error">{errors.name}</div>
              )}
              <button type="submit" className={s.enter}>
                <span className={s.text}> Регистрация</span>
              </button>
              <button type="submit" className={s.registration}>
                <span className={s.textRegistration}>Вход</span>
              </button>
            </Form>
          )}
        />
      </div>
    </>
  );
}
