import React from "react";

const MyEnrollments = () => {
  return (
    <div className="px-6 py-6">
      <h1 className="text-2xl font-semibold mb-4">My Enrollments</h1>

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
          <tr className="border-t">
            <td className="px-4 py-3">React Basics</td>
            <td className="px-4 py-3">6h 30m</td>
            <td className="px-4 py-3">80%</td>
            <td className="px-4 py-3 text-green-600 font-medium">
              In Progress
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyEnrollments;
