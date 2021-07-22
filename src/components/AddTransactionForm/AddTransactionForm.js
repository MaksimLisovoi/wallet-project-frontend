import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import SwitchToggle from '../SwitchToggle/SwitchToggle';
import style from './AddTransactionForm.module.css';
import { addNewTransaction } from '../../redux/global/global-operation';
import { isModalAddTransactionClose } from '../../redux/global/global-action';

export default function AddTransactionForm() {
  const [type, setType] = useState('+');
  const [category, setCategory] = useState('Доход');

  const dispatch = useDispatch();

  const currentDate = new Date()
    .toLocaleDateString()
    .split('.')
    .reverse()
    .join('-');
  const [date, setDate] = useState(currentDate);
  const updateDate = e => {
    setDate(e.target.value);
  };

  const [sum, setSum] = useState('');
  const updateSum = e => {
    setSum(e.target.value);
  };

  const [comments, setComment] = useState(' ');
  const updateComment = e => {
    setComment(e.target.value);
  };

  const updateTypeOfTransiction = e => {
    setCategory(e.label);
    setType('minus');
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addNewTransaction({ date, type, category, comments, sum }), [
      dispatch,
      sum,
      category,
      comments,
      date,
    ]);
    dispatch(isModalAddTransactionClose());
  };

  const handleClose = e => {
    e.preventDefault();
    dispatch(isModalAddTransactionClose());
  };

  return (
    <div className={style.container}>
      <h2 className={style.title}>Добавить транзакцию</h2>
      <SwitchToggle updateSwitcher={updateTypeOfTransiction} />

      <Formik>
        {({ isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              className={style.inputNumber}
              type="number"
              placeholder="0.00"
              min="1"
              pattern="\d+"
              maxLength="12"
              required
              value={sum}
              onChange={updateSum}
            />
            <Field
              id="date"
              type="date"
              className={style.inputDate}
              max={new Date().toISOString().slice(0, -14)}
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
                ДОБАВИТЬ
              </button>
              <button className={style.cancel} onClick={handleClose}>
                ОТМЕНА
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
