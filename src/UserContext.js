import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

// This is a "provider" — it wraps your app and shares user data everywhere
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // Simple login: checks localStorage for saved users
  const login = (username, password) => {
    const users = JSON.parse(localStorage.getItem('shopUsers') || '{}');

    if (!users[username]) {
      return { success: false, message: 'User not found. Please sign up first.' };
    }
    if (users[username].password !== password) {
      return { success: false, message: 'Wrong password. Try again.' };
    }

    setCurrentUser(username);
    return { success: true };
  };

  // Simple signup: saves to localStorage
  const signup = (username, password) => {
    if (username.trim() === '' || password.trim() === '') {
      return { success: false, message: 'Please fill in both fields.' };
    }

    const users = JSON.parse(localStorage.getItem('shopUsers') || '{}');

    if (users[username]) {
      return { success: false, message: 'Username already taken. Pick another one.' };
    }

    users[username] = { password: password, cart: [] };
    localStorage.setItem('shopUsers', JSON.stringify(users));
    setCurrentUser(username);
    return { success: true };
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <UserContext.Provider value={{ currentUser, login, signup, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook — makes it easy to use in any component
export const useUser = () => useContext(UserContext);