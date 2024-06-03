"use client"
const isAuthenticated = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('user');
  }
  }
export default isAuthenticated;
