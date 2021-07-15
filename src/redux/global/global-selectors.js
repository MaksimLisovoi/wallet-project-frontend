// --- Селектор на взятие из State всех транзакций
export const getTransactions = state => state.global.data;

// --- Селектор на взятие из State isModalLogoutOpen
export const getModalLogout = state => state.global.isModalLogoutOpen;

// --- Селектор на взятие из State isModalAddTransactionOpen
export const getisModalAddTransaction = state =>
  state.global.isModalAddTransactionOpen;
// --- Селектор на взятие из State isLoading
export const isLoading = state => state.global.isLoading;
