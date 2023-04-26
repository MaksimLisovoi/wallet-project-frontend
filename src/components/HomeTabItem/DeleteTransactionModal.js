import React from 'react';
import Modal from 'react-modal';
import styles from './styles.module.css';
import {
  deleteTransaction,
  fetchBalance,
  fetchStatictic,
} from '../../redux/global/global-operation';
import { useDispatch, useSelector } from 'react-redux';
import { statisticDate } from '../../redux/global/global-selectors';

Modal.setAppElement('#root');

export default function App({ transaction }) {
  const dispatch = useDispatch();
  const dateStatistic = useSelector(statisticDate);

  const deleteContact = async id => {
    await dispatch(deleteTransaction(id));
    await dispatch(fetchStatictic(dateStatistic));
    await dispatch(fetchBalance());
  };

  const { _id } = transaction;

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button className={styles.redTrash} onClick={openModal}></button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.modalContent}
        contentLabel="Example Modal"
      >
        <h3>Вы действительно хотите удалить транзакцию</h3>
        <div className={styles.positionBtn}>
          <button onClick={closeModal} className={styles.buttonCloseNo}>
            НЕТ
          </button>
          <button
            type="button"
            onClick={() => deleteContact(_id)}
            className={styles.buttonCloseYes}
          >
            ДА
          </button>
        </div>
      </Modal>
    </div>
  );
}
