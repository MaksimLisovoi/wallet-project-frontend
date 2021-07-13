const getisAuthenticated = state => state.auth.isAuthenticated;
//console.log(this.props.state);
const getUserName = state => state.auth.user.name;
export default { getisAuthenticated, getUserName };
