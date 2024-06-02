"use client"
const isAuthenticated = () => {
  if (window === undefined) return;
    return localStorage.getItem('user');
  }
export default isAuthenticated;
