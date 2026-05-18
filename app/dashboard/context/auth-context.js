'use client';

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    id: 'user_1',
    name: 'Alex Johnson',
    email: 'alex@reelspandigital.com',
    role: 'admin', // 'admin', 'employee', 'client'
    avatar: 'AJ',
  });

  const [darkMode, setDarkMode] = useState(false);

  const logout = () => {
    setUser(null);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, darkMode, setDarkMode, toggleDarkMode, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
