// --- Селектор на взятие из State isModalLogoutOpen
export const getModalLogout = state => state.global.isModalLogoutOpen;

export const getAllTransactions = state => state.global.data;

// --- Селектор на взятие из State isModalAddTransactionOpen
export const getisModalAddTransaction = state =>
  state.global.isModalAddTransactionOpen;
