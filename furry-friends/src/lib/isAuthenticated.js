const isAuthenticated = () => {
    return localStorage.getItem('user');
  }
export default isAuthenticated;
