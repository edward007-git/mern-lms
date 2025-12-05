import React, { useContext } from 'react'
import { assets } from '../../assets/assets.js'
import { AppContext } from '../../Context/AppContext'
import { Link } from 'react-router-dom'

const CourseCard = ({ course }) => {
  const { currency,calculateRating } = useContext(AppContext)

  return (
    // Make card a column flex and allow it to stretch to full height
    <Link
      to={'/course/' + course._id}
      onClick={() => scrollTo(0, 0)}
      className="border border-gray-200 overflow-hidden rounded-lg flex flex-col h-full bg-white"
    >
      {/* responsive thumbnail: fills top, no tiny gap */}
      <img
        className="w-full h-44 sm:h-48 md:h-52 object-cover block rounded-t-lg"
        src={course.courseThumbnail}
        alt="thumbnail."
      />

      {/* content area: grows so bottom row can stick to bottom (mt-auto) */}
      <div className="p-3 text-left flex flex-col flex-grow">
        <h3 className="font-semibold text-base line-clamp-2">
          {course.courseTitle}
        </h3>

        <p className="text-gray-500 mt-1">{course.educator.name}</p>

        
        <div className="mt-auto w-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0">

        
            <div className="flex items-center gap-2">
              <p className="text-sm">{calculateRating(course)}</p>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={i<Math.floor(calculateRating(course)) ? assets.star : assets.star_blank} alt="" className="w-4 h-4" />
                ))}
              </div>

              <p className="text-gray-500 text-sm">{course.courseRatings.length}</p>
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
