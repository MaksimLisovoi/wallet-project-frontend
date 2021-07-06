import React from 'react';
import { Formik, Field, Form } from 'formik';
import BasicFormSchema from './schemRegistration';
import s from './registration.module.css';
// import s from '../styles/base.module.css';

// const RegisterPage = () => {
//   return (
//     <>
//       <h1>This is RegisterPage</h1>
//     </>
//   );
// };

const RegisterPage = () => (
  <div className="container">
    <h1>Wallet</h1>
    <Formik
      //инициализируем значения input-ов
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
      }}
      //подключаем схему валидации, которую описали выше
      validationSchema={BasicFormSchema}
      //определяем, что будет происходить при вызове onsubmit

      onSubmit={(values, { resetForm }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 4));
          resetForm();
        }, 500);
      }}
      //свойство, где описывыем нашу форму
      //errors-ошибки валидации формы
      //touched-поля формы, которые мы "затронули",
      //то есть, в которых что-то ввели
      render={({ errors, touched }) => (
        <Form className={s.wrraper}>
          {/* <label htmlFor="email">Email</label> */}
          <Field
            name="email"
            placeholder="E-mail "
            type="email"
            className={s.email}
          />
          {/* <img src={like} alt="like" /> */}
          {
            //если в этом поле возникла ошибка и
            //если это поле "затронуто, то выводим ошибку
            errors.email && touched.email && (
              <div className="field-error">{errors.email}</div>
            )
          }

          {/* <label htmlFor="password">Password</label> */}
          <Field
            name="password"
            placeholder="Пароль"
            type="password"
            className={s.password}
          />

          {errors.password && touched.password && (
            <div className="field-error">{errors.password}</div>
          )}

          <Field
            name="confirmPassword"
            placeholder="Подтвердите пароль"
            type="password"
            className={s.password}
          />

          {errors.password && touched.password && (
            <div className="field-error">{errors.password}</div>
          )}

          <Field
            name="firstName"
            placeholder="Ваше Имя"
            type="firstName"
            className={s.password}
          />

          {errors.firstName && touched.firstName && (
            <div className="field-error">{errors.firstName}</div>
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
);

export default RegisterPage;
