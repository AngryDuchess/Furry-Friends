const isAuthenticated = (user) => {
    if (window !== undefined) {
      localStorage.getItem('user') ?? localStorage.setItem('user', JSON.stringify(user))
    }
    return localStorage.getItem('user')
  }
export default isAuthenticated;