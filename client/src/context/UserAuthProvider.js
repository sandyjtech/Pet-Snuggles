import React, { createContext, useContext, useState } from 'react';

// Create a context for user authentication
const UserAuthContext = createContext();

// Custom hook to access the UserAuthContext
export const useUserAuth = () => {
  return useContext(UserAuthContext);
};

// User authentication provider component
const UserAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [signUp, setSignUp] = useState(false);

  // Function to handle user login and signup
  const handleLoginSubmit = async (values, actions) => {
    try {
      // Make API call to your backend for login or signup
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values), // values contain username and password
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('An error occurred');
    }
  };

  // Function to handle user logout
  const handleLogout = async () => {
    try {
      // Make API call to your backend for logout
      await fetch('/logout', {
        method: 'DELETE',
      });

      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Function to toggle between login and signup
  const handleClick = () => {
    setSignUp(!signUp);
    setError(null);
  };

  // Context value to provide to consuming components
  const contextValue = {
    user,
    error,
    signUp,
    handleLoginSubmit,
    handleLogout,
    handleClick,
  };

  return (
    <UserAuthContext.Provider value={contextValue}>
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthProvider;
