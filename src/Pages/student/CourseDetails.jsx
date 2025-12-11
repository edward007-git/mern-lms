import React, { useContext, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import humanizeDuration from "humanize-duration";

const CourseDetails = () => {
  const { id } = useParams();
  const { allCourses, calculateRating, currency } = useContext(AppContext);
  const [openChapters, setOpenChapters] = useState([]);
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false);

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

  const oldPrice = courseData.coursePrice?.toFixed
    ? courseData.coursePrice.toFixed(2)
    : courseData.coursePrice;

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

  // ---------- Accordion state for Course Structure ----------
  const toggleChapter = (index) => {
    setOpenChapters((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-100 to-white">
      {/* ===== TOP HERO + SIDE CARD ===== */}
      <section className="border-b">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-6 md:py-8 flex flex-col lg:flex-row lg:items-start lg:gap-10">
          {/* LEFT: Title + meta */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {courseData.courseTitle}
            </h1>

            <p className="mt-3 text-sm md:text-base text-gray-700 max-w-2xl">
              Learn the fundamentals of {courseData.courseTitle} including core
              concepts, practical examples, and real-world applications.
            </p>

            {/* META DETAILS */}
            <div className="mt-4 space-y-1 text-sm text-gray-700">
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-medium">{rating.toFixed(1)}</p>

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

                <p className="text-gray-500">({totalRatings} ratings)</p>
                <span className="text-gray-300">•</span>
                <p className="text-gray-600">
                  {enrolled.toLocaleString()} students enrolled
                </p>
              </div>

              <p className="text-gray-700">
                Course by{" "}
                <span className="font-medium text-blue-600">
                  {courseData.educator?.name || "Unknown instructor"}
                </span>
              </p>

              <p className="text-gray-600">
                ⏱ {durationLabel} • {totalLectures} lectures
              </p>

              {/* COURSE STRUCTURE (Accordion) */}
               <div className="mt-12 lg:mt-20 mb-10">
                <h2 className="text-xl md:text-2xl font-semibold mb-4">
                  Course Structure
                </h2>

                <div className="space-y-3">
                  {courseData.courseContent?.map((chapter, index) => {
                    const isOpen = openChapters[index];

                    const chapterMinutes =
                      chapter.chapterContent?.reduce((sum, lecture) => {
                        return sum + Number(lecture.lectureDuration || 0);
                      }, 0) || 0;

                    const formattedDuration = humanizeDuration(
                      chapterMinutes * 60 * 1000,
                      { units: ["h", "m"], round: true }
                    );

                    const lectureCount = chapter.chapterContent?.length || 0;

                    return (
                      <div
                        key={index}
                        className="bg-white border rounded-xl shadow-sm"
                      >
                        {/* Header row */}
                        <button
                          type="button"
                          onClick={() => toggleChapter(index)}
                          className="w-full flex items-center justify-between px-4 py-3"
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className={`text-gray-400 text-lg transform transition-transform ${
                                isOpen ? "rotate-90" : ""
                              }`}
                            >
                              ▸
                            </span>
                            <p className="font-medium text-gray-800">
                              {chapter.chapterTitle}
                            </p>
                          </div>

                          <p className="text-sm text-gray-500 whitespace-nowrap">
                            {lectureCount} lectures • {formattedDuration}
                          </p>
                        </button>

                        {/* Lectures list */}
                        {isOpen && (
                          <div className="border-t px-4 py-3 space-y-2">
                            {chapter.chapterContent?.map((lecture, i) => (
                              <div
                                key={i}
                                className="flex items-center justify-between text-sm text-gray-700"
                              >
                                <span>
                                  {i + 1}. {lecture.lectureTitle}
                                </span>
                                <span className="text-gray-500">
                                  {lecture.lectureDuration} min
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              
            </div>
          </div>

          {/* RIGHT: Course summary card */}
          <aside className="mt-8 lg:mt-0 lg:w-72 lg:shrink-0">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="w-full h-32 bg-white flex items-center justify-center overflow-hidden">
                <img
                  src={courseData.courseThumbnail}
                  alt={courseData.courseTitle}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CARD CONTENT */}
              <div className="p-4 space-y-3">
                <p className="text-xs text-rose-500 font-medium flex items-center gap-1">
                  ⏰ Limited time price!
                </p>

                <div className="flex items-end gap-2">
                  <span className="text-2xl font-bold">
                    {currency}
                    {finalPrice}
                  </span>

                  {oldPrice && (
                    <span className="text-slate-400 line-through text-xs">
                      {currency}
                      {oldPrice}
                    </span>
                  )}

                  {courseData.discount > 0 && (
                    <span className="text-green-500 text-xs font-semibold">
                      {courseData.discount}% off
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setIsAlreadyEnrolled(true)}
                  disabled={isAlreadyEnrolled}
                  className={`
        w-full py-3 rounded md:mt-6 mt-4 font-medium text-white 
    ${isAlreadyEnrolled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}
  `}
                >
                  {isAlreadyEnrolled ? "Already Enrolled" : "Enroll Now"}
                </button>

                <div className="flex flex-wrap items-center gap-3 text-[11px] text-gray-600 pt-2 border-t">
                  <span>⭐ {rating.toFixed(1)}</span>
                  <span>• {durationLabel}</span>
                  <span>• {totalLectures} lessons</span>
                  <span>• {enrolled.toLocaleString()} students</span>

                  <div className="pt-6">
                    <p className="md:text-xl text-lg font-medium text-gray-800">
                      What's in the course?
                    </p>
                    <ul className="ml-4 pt-2 text-sm md:text-default list-disc text-gray-500">
                      <li>Lifetime access with free updates.</li>
                      <li>Step-by-step, hands-on project guidance.</li>
                      <li>Downloadable resources and source code.</li>
                      <li>Quizzes to test your knowledge.</li>
                      <li>Certificate of completion.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* COURSE DESCRIPTION BELOW THE CARD  */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Course Description
        </h2>
        <div
          className="text-sm md:text-base text-gray-700 leading-relaxed space-y-2 bg-white p-6 rounded-lg shadow-sm"
          dangerouslySetInnerHTML={{ __html: courseData.courseDescription }}
        />
      </section>
    </div>
  );
};

export default CourseDetails;
