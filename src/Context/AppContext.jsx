/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useMemo } from 'react';

export const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
  const value = useMemo(() => ({}), []);
  console.log('AppContextProvider mounted');
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
