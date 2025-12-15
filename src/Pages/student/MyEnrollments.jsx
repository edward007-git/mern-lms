import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import humanizeDuration from "humanize-duration";

const MyEnrollments = () => {
  const { enrolledCourses } = useContext(AppContext);

  return (
    <div className="px-6 py-6">
      <h1 className="text-2xl font-semibold mb-4">My Enrollments</h1>

      {enrolledCourses.length === 0 ? (
        <p className="text-gray-500">You have not enrolled in any courses yet.</p>
      ) : (
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Course</th>
              <th className="px-4 py-3 text-left font-semibold">Duration</th>
              <th className="px-4 py-3 text-left font-semibold">Completed</th>
              <th className="px-4 py-3 text-left font-semibold">Status</th>
            </tr>
          </thead>

          <tbody>
            {enrolledCourses.map((course) => {
              // total duration
              const totalMinutes =
                course.courseContent?.reduce((chapterSum, chapter) => {
                  return (
                    chapterSum +
                    chapter.chapterContent?.reduce(
                      (lectureSum, lecture) =>
                        lectureSum + Number(lecture.lectureDuration || 0),
                      0
                    )
                  );
                }, 0) || 0;

              const completed = course.progress || 0;

              return (
                <tr key={course._id} className="border-t">
                  <td className="px-4 py-3 font-medium">
                    {course.courseTitle}
                  </td>

                  <td className="px-4 py-3">
                    {humanizeDuration(totalMinutes * 60 * 1000, {
                      units: ["h", "m"],
                      round: true,
                    })}
                  </td>

                  <td className="px-4 py-3">{completed}%</td>

                  <td
                    className={`px-4 py-3 font-medium ${
                      completed === 100
                        ? "text-green-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {completed === 100 ? "Completed" : "In Progress"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyEnrollments;
