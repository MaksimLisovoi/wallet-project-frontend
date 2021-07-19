import React, { useState } from 'react';
import Modal from 'react-modal';
import s from './BtnAddTransc.module.css';
import { useDispatch, useSelector } from 'react-redux';
import AddTransactionForm from '../AddTransactionForm/AddTransactionForm';
import { getisModalAddTransaction } from '../../redux/global/global-selectors';
import {
  isModalAddTransactionOpen,
  isModalAddTransactionClose,
} from '../../redux/global/global-action';

Modal.setAppElement('#root');

export default function BtnAddTransc() {
  const dispatch = useDispatch();
  const ModalAddTransactionClose = () => dispatch(isModalAddTransactionClose());
  const ModalAddTransactionOpen = () => dispatch(isModalAddTransactionOpen());
  const modalAddTransaction = useSelector(getisModalAddTransaction);

  // const [modaIsOpen, setModalisOpen] = useState(false);
  return (
    <div>
      <button className={s.btnAdd} onClick={ModalAddTransactionOpen}>
        +
      </button>
      <Modal
        isOpen={modalAddTransaction}
        onRequestClose={ModalAddTransactionClose}
        className={s.modalContent}
        overlayClassName={s.modalOverlay}
      >
        <AddTransactionForm />
      </Modal>
    </div>
  );
}
