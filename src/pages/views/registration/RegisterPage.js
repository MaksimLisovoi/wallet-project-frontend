import { React } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import * as authOperations from '../../../redux/auth/auth-operations';
import { Formik, Form, Field } from 'formik';
import SignupSchema from './RegisterSchema';

import Logos from '../../../components/Logos/Logos';
import BlueStain from '../../../icons/blueStain/blueStain';
import PinkStain from '../../../icons/pinkStain/pinkStain';
import Girl from '../../../icons/girlMain/girl';
import Envelope from '../../../icons/envelopeData/envelope';
import Lock from '../../../icons/lock/lock';
import LockConfirmPassword from '../../../icons/lock/lockConfirmPassword';
import Name from '../../../icons/name/name';
import PasswordStrengthMeter from './PasswordStrengthMeter.js';
import s from './registration.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  };
  const handleSubmit = async (values, { resetForm }) => {
    const { email, password, name } = values;
    await dispatch(authOperations.register({ email, password, name }));
    resetForm({});
  };

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
          validationSchema={SignupSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched, values, handleChange }) => (
            <Form>
              <label className={s.envelopePos}>
                <Field
                  id="email"
                  name="email"
                  type="text"
                  placeholder="E-mail"
                  className={s.email}
                  value={values.email}
                  onChange={handleChange}
                />
                {touched.email && errors.email ? (
                  <div className={s.errorEmail}>{errors.email}</div>
                ) : null}
                <Envelope />
              </label>
              <label htmlFor="password" className={s.passwordPhoto}>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Пароль"
                  className={s.password}
                  value={values.password}
                  onChange={handleChange}
                />

                {touched.password && errors.password ? (
                  <div className={s.errorLock}>{errors.password}</div>
                ) : null}
                <Lock />
                <PasswordStrengthMeter password={values.password} />
              </label>
              <label htmlFor="confirmPassword" className={s.passwordPhoto}>
                <Field
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Подтвердите пароль"
                  className={s.password}
                  value={values.confirmPassword}
                  onChange={handleChange}
                />
                {touched.confirmPassword && errors.confirmPassword ? (
                  <div className={s.error}>{errors.confirmPassword}</div>
                ) : null}
                <LockConfirmPassword />
              </label>
              <label htmlFor="name" className={s.namPh}>
                <Field
                  id="name"
                  name="name"
                  type="name"
                  placeholder="Ваше Имя"
                  className={s.password}
                  value={values.name}
                  onChange={handleChange}
                />
                {touched.name && errors.name ? (
                  <div className={s.error}>{errors.name}</div>
                ) : null}
                <Name />
              </label>
              <button type="submit" className={s.registration}>
                <span className={s.textRegistration}> Регистрация</span>
              </button>
            </Form>
          )}
        </Formik>
        <NavLink
          to={{
            pathname: '/login',
          }}
          className={s.enter}
        >
          <span className={s.text}>Вход</span>
        </NavLink>
      </div>
    </>
  );
};

export default RegisterPage;
