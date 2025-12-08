import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
import { Link } from 'react-router-dom'
import humanizeDuration from "humanize-duration";

const CourseCard = ({ course }) => {
  const { currency, calculateRating } = useContext(AppContext)

  // --------------------------
  // Calculate Total Course Duration
  // --------------------------
  const calculateCourseDuration = (course) => {
    const totalMinutes =
      course?.courseContent?.reduce((chapterSum, chapter) => {
        const chapterMinutes =
          chapter?.chapterContent?.reduce((lectureSum, lecture) => {
            return lectureSum + Number(lecture.lectureDuration || 0)
          }, 0) || 0

        return chapterSum + chapterMinutes
      }, 0) || 0

    return humanizeDuration(totalMinutes * 60 * 1000, {
      units: ["h", "m"],
      round: true
    })
  }

  // --------------------------
  // Total Lectures
  // --------------------------
  const totalLectures =
    course?.courseContent?.reduce((count, chapter) => {
      return count + (chapter?.chapterContent?.length || 0)
    }, 0) || 0

  return (
    <Link
      to={'/course/' + course._id}
      onClick={() => scrollTo(0, 0)}
      className="border border-gray-200 overflow-hidden rounded-lg flex flex-col h-full bg-white"
    >
      <img
        className="w-full h-44 sm:h-48 md:h-52 object-cover block rounded-t-lg"
        src={course.courseThumbnail}
        alt="thumbnail."
      />

      <div className="p-3 text-left flex flex-col flex-grow">
        <h3 className="font-semibold text-base line-clamp-2">
          {course.courseTitle}
        </h3>

        <p className="text-gray-500 mt-1">{course.educator.name}</p>

        {/*  ADDING Duration + Lectures HERE */}
        <p className="text-gray-600 text-sm mt-1">
          ⏱ {calculateCourseDuration(course)} • {totalLectures} lectures
        </p>

        <div className="mt-auto w-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0">
            
            <div className="flex items-center gap-2">
              <p className="text-sm">{calculateRating(course)}</p>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => {
                  const filled = i < Math.floor(calculateRating(course))
                  return (
                    <span
                      key={i}
                      className={`w-4 h-4 text-sm leading-4 ${
                        filled ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    >
                      ★
                    </span>
                  )
                })}
              </div>

              <p className="text-gray-500 text-sm">
                ({course.courseRatings.length})
              </p>
            </div>

            <p className="text-base font-semibold text-gray-800 whitespace-nowrap md:mt-0">
              {currency}
              {(course.coursePrice - course.discount * course.coursePrice / 100).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CourseCard
