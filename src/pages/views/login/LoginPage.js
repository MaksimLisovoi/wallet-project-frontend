// import React from 'react';
import { NavLink } from 'react-router-dom';

//import { useFormik } from 'formik';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';

import * as authOperations from '../../../redux/auth/auth-operations';
import SchemaValidation from './SignUpSchema';
import s from './login.module.css';
import Logos from '../../../components/Logos/Logos';
import Envelope from '../../../icons/envelopeData/envelope';
import LockConfirmPassword from '../../../icons/lock/lockConfirmPassword';

const LoginPage = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const { email, password } = values;
    dispatch(authOperations.logIn({ email, password }));
    resetForm({});
  };
  return (
    <>
      <div className={s.container}>
        <div className={s.contForHead}>
          <Logos />
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={SchemaValidation}
        >
          {({
            isSubmitting,
            errors,
            touched,
            values,
            handleChange,
            handleBlur,
          }) => (
            <Form>
              <label htmlFor="email" className={s.posRelative}>
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="E-mail"
                  className={s.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {touched.email && errors.email ? (
                  <div className={s.textStyleError}>{errors.email}</div>
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
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {touched.password && errors.password ? (
                  <div className={s.textStyleErrorPass}>{errors.password}</div>
                ) : null}
                <LockConfirmPassword />
              </label>
              <button type="submit" className={s.enter}>
                <span className={s.text}>Вход</span>
              </button>
            </Form>
          )}
        </Formik>

        <NavLink
          to={{
            pathname: '/register',
          }}
          className={s.registration}
        >
          <span className={s.textRegistration}> Регистрация</span>
        </NavLink>
      </div>
    </>
  );
};

export default LoginPage;
