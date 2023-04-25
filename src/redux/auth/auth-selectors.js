export const getisAuthenticated = state => state.auth.isLoggedIn;
//console.log(this.props.state);
export const getUserName = state => state.auth.user.name;
export const getError = state => state.auth.error;
