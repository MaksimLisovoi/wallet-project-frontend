import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import styles from './ModalLogout.module.css';
import { getModalLogout } from '../../redux/global/global-selectors';
import { isModalLogoutClose } from '../../redux/global/global-action';
import * as operations from '../../redux/auth/auth-operations';

Modal.setAppElement('#root');

export default function ModalLogout() {
  const dispatch = useDispatch();

  const ModalLogoutClose = () => dispatch(isModalLogoutClose());

  const onLogout = useCallback(() => {
    dispatch(operations.logOut());
    ModalLogoutClose();
  }, [ModalLogoutClose, dispatch]);

  const modalLogout = useSelector(getModalLogout);

  return (
    <Modal
      isOpen={modalLogout}
      onRequestClose={ModalLogoutClose}
      className={styles.modalContent}
      overlayClassName={styles.modalOverlay}
    >
      <h3>Вы действительно хотите выйти</h3>
      <div className={styles.positionBtn}>
        <button onClick={ModalLogoutClose} className={styles.buttonCloseNo}>
          НЕТ
        </button>
        <button
          type="button"
          onClick={onLogout}
          className={styles.buttonCloseYes}
        >
          ДА
        </button>
      </div>
    </Modal>
  );
}
