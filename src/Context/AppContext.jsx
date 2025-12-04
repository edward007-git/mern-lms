/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useMemo, useState } from 'react';
import { dummyCourses } from '../assets/assets';

export const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
  const [allCourses, setAllCourses] = useState([]);

  const currency = import.meta.env.VITE_CURRENCY;

  useEffect(() => {
    // defer to next microtask so setState isn't called synchronously inside the effect
    Promise.resolve().then(() => {
      setAllCourses(dummyCourses);
    });
  }, []);

  const value = useMemo(
    () => ({ currency, allCourses, setAllCourses }),
    [currency, allCourses]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
