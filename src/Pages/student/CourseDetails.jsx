import React, { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import humanizeDuration from "humanize-duration";

const CourseDetails = () => {
  const { id } = useParams();
  const { allCourses, calculateRating, currency } = useContext(AppContext);

  // Find course
  const courseData = useMemo(() => {
    if (!allCourses || allCourses.length === 0) return null;
    return allCourses.find((course) => course._id === id) || null;
  }, [allCourses, id]);

  if (!courseData) {
    return (
      <div className="px-6 md:px-20 py-10">
        <p className="text-gray-500 text-lg">Loading course...</p>
      </div>
    );
  }

  // ---------- Rating, Price, Students ----------
  const rating = calculateRating(courseData);
  const finalPrice = (
    courseData.coursePrice -
    (courseData.discount * courseData.coursePrice) / 100
  ).toFixed(2);
  const enrolled = courseData.studentsEnrolled ?? 0;
  const totalRatings = courseData.courseRatings?.length || 0;

  // ---------- Duration + Total Lectures ----------
  const totalMinutes =
    courseData.courseContent?.reduce((chapterSum, chapter) => {
      const minutes =
        chapter?.chapterContent?.reduce((sum, lecture) => {
          return sum + Number(lecture?.lectureDuration || 0);
        }, 0) || 0;

      return chapterSum + minutes;
    }, 0) || 0;

  const durationLabel = humanizeDuration(totalMinutes * 60 * 1000, {
    units: ["h", "m"],
    round: true,
  });

  const totalLectures =
    courseData.courseContent?.reduce((count, chapter) => {
      return count + (chapter?.chapterContent?.length || 0);
    }, 0) || 0;

  return (
    <div className="min-h-screen bg-white">
      {/* ===== TOP HERO SECTION ===== */}
      <section className="bg-gradient-to-b from-cyan-100 to-white border-b">
        <div className="max-w-5xl mx-auto px-6 md:px-10 py-10 md:py-16">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {courseData.courseTitle}
          </h1>

          {/* Description */}
          <div
            className="mt-3 text-sm md:text-base text-gray-700 leading-relaxed space-y-2"
            dangerouslySetInnerHTML={{ __html: courseData.courseDescription }}
          />

          {/* ===== META DETAILS ===== */}
          <div className="mt-4 space-y-1 text-sm text-gray-700">
            {/* Row 1: Rating + ratings count + students */}
            <div className="flex flex-wrap items-center gap-3">
              {/* rating number */}
              <p className="font-medium">{rating.toFixed(1)}</p>

              {/* stars */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => {
                  const filled = i < Math.floor(rating);
                  return (
                    <span
                      key={i}
                      className={`w-4 h-4 text-sm leading-4 ${
                        filled ? "text-yellow-400" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  );
                })}
              </div>

              {/* total ratings */}
              <p className="text-gray-500">({totalRatings} ratings)</p>

              {/* separator */}
              <span className="text-gray-300">•</span>

              {/* students enrolled */}
              <p className="text-gray-600">
                {enrolled.toLocaleString()} students enrolled
              </p>
            </div>

            {/* Row 2: Instructor */}
            <p className="text-gray-700">
              Created by{" "}
              <span className="font-medium">
                {courseData.educator?.name || "Unknown instructor"}
              </span>
            </p>

            {/* Row 3: Duration + lectures */}
            <p className="text-gray-600">
              ⏱ {durationLabel} • {totalLectures} lectures
            </p>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-6">
        

        {/* Price */}
        <p className="text-2xl font-semibold text-blue-600 mt-6">
          {currency}
          {finalPrice}
        </p>
      </section>
    </div>
  );
};

export default CourseDetails;
