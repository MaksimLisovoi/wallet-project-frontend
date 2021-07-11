import React from 'react';

import { Formik, Field, Form } from 'formik';
import BasicFormSchema from './schemaForForm';

import Logos from '../../../components/Logos/Logos';
import s from './login.module.css';

import BlueStain from '../../../icons/blueStain/blueStain';
import PinkStain from '../../../icons/pinkStain/pinkStain';
import MainPhoto from '../../../icons/mainPhotoComp/mainPhotoComp';
import Envelope from '../../../icons/envelopeData/envelope';
import Lock from '../../../icons/lock/lock';

function LoginPage() {
  return (
    <>
      <BlueStain />
      <PinkStain />
      <MainPhoto />
      <div className={s.container}>
        <div className={s.contForHead}>
          {/* <MainPhoto />
      <BlueStain />
      <PinkStain /> */}
          <Logos />
          {/* <BlueStain /> */}
        </div>

        <Formik
          //инициализируем значения input-ов
          initialValues={{
            email: '',
            password: '',
          }}
          //подключаем схему валидации, которую описали выше
          validationSchema={BasicFormSchema}
          //определяем, что будет происходить при вызове onsubmit

          onSubmit={(values, { resetForm }) => {
            setTimeout(() => {
              console.log(JSON.stringify(values, null, 2));
              resetForm();
            }, 500);
          }}
          //свойство, где описывыем нашу форму
          //errors-ошибки валидации формы
          //touched-поля формы, которые мы "затронули",
          //то есть, в которых что-то ввели
          render={({ errors, touched }) => (
            <Form className={s.formContainer}>
              {/* <label htmlFor="email">Email</label> */}
              <label className={s.posRelative}>
                <Field
                  name="email"
                  placeholder="E-mail "
                  type="email"
                  className={s.email}
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
              <label className={s.posRelative}>
                <Field
                  name="password"
                  placeholder="Пароль"
                  type="password"
                  className={s.password}
                />
                <Lock />
              </label>

              {errors.password && touched.password && (
                <div className="field-error">{errors.password}</div>
              )}

              <button type="submit" className={s.enter}>
                <span className={s.text}>Вход</span>
              </button>
              <button type="submit" className={s.registration}>
                <span className={s.textRegistration}>Регистрация</span>
              </button>
            </Form>
          )}
        />
      </div>
    </>
  );
}
console.log(LoginPage());
export default LoginPage;
