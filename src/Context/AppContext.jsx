/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useMemo, useState, useCallback } from 'react';
import { dummyCourses } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

export const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
  const [allCourses, setAllCourses] = useState([]);

  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();

  useEffect(() => {
    Promise.resolve().then(() => {
      setAllCourses(dummyCourses);
    });
  }, []);

  //calculating average rating
  const calculateRating = useCallback((course) => {
    if (course.courseRatings.length === 0) return 0;

    let totalRating = 0;
    course.courseRatings.forEach(rating => {
      totalRating += rating.rating;
    });

    return totalRating / course.courseRatings.length;
  }, []);

  const value = useMemo(
    () => ({ currency, allCourses, setAllCourses, navigate, calculateRating }),
    [currency, allCourses, navigate, calculateRating]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
