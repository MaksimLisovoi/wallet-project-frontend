import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import SwitchToggle from '../SwitchToggle/SwitchToggle';
import style from './AddTransactionForm.module.css';

const AddTransactionForm = () => {
  const [category, setCategory] = useState('');
  const updateCategory = e => {
    setCategory(e.target.value);
  };

  const [amount, setAmount] = useState('');
  const updateAnmount = e => {
    setAmount(e.target.value);
  };

  const currentDate = new Date()
    .toLocaleDateString()
    .split('.')
    .reverse()
    .join('-');
  const [date, setDate] = useState(currentDate);
  const updateDate = e => {
    setDate(e.target.value);
  };

  const [comments, setComment] = useState('');
  const updateComment = e => {
    setComment(e.target.value);
  };

  const updateTypeOfTransiction = e => {
    setCategory('');
    setAmount('');
    setDate(currentDate);
    setComment('');
  };

  return (
    <div className={style.container}>
      <h2 className={style.title}>Добавить транзакцию</h2>
      <SwitchToggle onChange={updateTypeOfTransiction} />

      <Formik>
        {({ isSubmitting }) => (
          <Form>
            <Field
              className={style.inputNumber}
              type="number"
              placeholder="0.00"
              min="1"
              pattern="\d+"
              maxLength="12"
              required
              value={amount}
              onChange={updateAnmount}
            />
            <Field
              id="date"
              type="date"
              className={style.inputDate}
              // min={new Date().toISOString().slice(0, -14)}
              value={date}
              onChange={updateDate}
            />
            <Field
              placeholder="Комментарий"
              type="text"
              name="comment"
              maxLength="30"
              className={style.textarea}
              value={comments}
              onChange={updateComment}
            />

            <ErrorMessage name="password" component="div" />
            <div>
              <button
                type="submit"
                className={style.addTrans}
                disabled={isSubmitting}
              >
                Add transaction
              </button>
              <button type="submit" className={style.cancel}>
                Cancel
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddTransactionForm;
