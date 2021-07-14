import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import SwitchToggle from '../SwitchToggle/SwitchToggle';
import style from './AddTransactionForm.module.css';
import Select from 'react-select';

// const options = [
//   { value: 'Основные расходы', label: 'Основные расходы' },
//   { value: 'Продукты', label: 'Продукты' },
//   { value: 'Авто', label: 'Авто' },
//   { value: 'Забота о себе', label: 'Забота о себе' },
//   { value: 'Дети', label: 'Дети' },
//   { value: 'Дом', label: 'Дом' },
//   { value: 'Образование', label: 'Образование' },
//   { value: 'Досуг', label: 'Досуг' },
//   { value: 'Другие расходы', label: 'Другие расходы' },
// ];

// const TransCategory = () => (
//   <Select options={options} formatGroupLabel={formatGroupLabel} />
// );

// const formatGroupLabel = data => (
//   <div>
//     <span>{data.label}</span>
//   </div>
// );

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

  const [comments, setComments] = useState('');
  const updateComment = e => {
    setComments(e.target.value);
  };

  const [type, setType] = useState('');
  const updateType = e => {
    setType(e.target.value);
  };

  const updateTypeOfTransiction = e => {
    setAmount('');
    setDate(currentDate);
    setComments('');
    setCategory('');
    setType('');
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
