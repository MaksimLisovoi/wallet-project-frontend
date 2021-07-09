import React, { useState } from 'react';
import Modal from 'react-modal';
import s from './BtnAddTransc.module.css';
import AddTransactionForm from '../AddTransactionForm/AddTransactionForm';

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
        <AddTransactionForm />
      </Modal>
    </div>
  );
};

export default BtnAddTransc;
