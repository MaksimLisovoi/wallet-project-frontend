import React, { useState } from 'react';
import Modal from 'react-modal';
import s from './BtnAddTransc.module.css';

Modal.setAppElement('#root');

const BtnAddTransc = () => {
  const [modaIsOpen, setModalisOpen] = useState(false);
  return (
    <div>
      <button className={s.btnAdd} onClick={() => setModalisOpen(true)}>
        +
      </button>
      <Modal
        isOpen={modaIsOpen}
        onRequestClose={() => setModalisOpen(false)}
        className={s.modalContent}
        overlayClassName={s.modalOverlay}
      >
        <h2>Добавить транзакцию</h2>
        <p>здесь будет форма</p>
        <h3>цвет окна - рабочая версия</h3>
      </Modal>
    </div>
  );
};

export default BtnAddTransc;
