//import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
// ../../redux/auth
// import { isModalLogoutOpen } from '../../redux/global/global-action';
import styles from './UserMenu.module.css';
//===================================
import React, { useState } from 'react';
import Modal from 'react-modal';
//import s from './UserMenu.module.css';
Modal.setAppElement('#root');
const UserMenu = ({ onLogout }) => {
  const dispatch = useDispatch();
  const [modaIsOpen, setModalisOpen] = useState(false);
  const name = useSelector(getUserName);
  // const operation = dispatch(authOperations.logOut());
  // const [modalIsOpen, setIsOpen] = React.useState(false);
  // const ModalLogoutOpen = () => dispatch(isModalLogoutOpen());
  function closeModal() {
    setModalisOpen(false);
  }
  return (
    <div className={styles.user_menu_container}>
      <span className={styles.user_name}>{name}</span>
      <span className={styles.user_name_2}>|</span>
      <button
        className={styles.out_icon}
        type="button"
        onClick={() => setModalisOpen(true)}
      ></button>
      <Modal
        isOpen={modaIsOpen}
        onRequestClose={() => setModalisOpen(false)}
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
      >
        <button
          // isOpen={modaIsOpen}
          onClick={closeModal}
          className={styles.buttonClose}
        >
          Закрытие модалки
        </button>
        <button
          // isOpen={modaIsOpen}
          // onClick={closeModal}
          type="button"
          onClick={onLogout}
          className={styles.buttonClose}
        >
          Полностью выход
        </button>

        {/* <AddTransactionForm /> */}
      </Modal>
      {/* <button
        className={styles.out_icon}
        type="button"
        onClick={ModalLogoutOpen}
      ></button> */}
      <span className={styles.user_out}>Выйти</span>
    </div>
  );
};

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(null, mapDispatchToProps)(UserMenu);
// export default UserMenu;
