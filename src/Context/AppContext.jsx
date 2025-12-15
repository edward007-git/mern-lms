/* eslint-disable react-refresh/only-export-components */
import React, {
  createContext,

  useMemo,
  useState,
  useCallback,
} from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
  const [allCourses, setAllCourses] = useState([]);
  const [iseducator, setEducator] = useState(true);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();

  // Fetch user enrolled courses
  const fetchUserEnrolledCourses = async () => {
    setEnrolledCourses(dummyCourses); 
  };
  


  // Calculate average rating
  const calculateRating = useCallback((course) => {
    if (!course?.courseRatings?.length) return 0;

    const total = course.courseRatings.reduce(
      (sum, rating) => sum + rating.rating,
      0
    );

    return total / course.courseRatings.length;
  }, []);

  const value = useMemo(
    () => ({
      currency,
      allCourses,
      setAllCourses,
      enrolledCourses,          
      setEnrolledCourses,       
      fetchUserEnrolledCourses, 
      navigate,
      calculateRating,
      iseducator,
      setEducator,
    }),
    [
      currency,
      allCourses,
      enrolledCourses,
      navigate,
      calculateRating,
      iseducator,
    ]
  );

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
