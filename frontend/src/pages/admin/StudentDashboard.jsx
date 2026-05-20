import { useEffect, useState } from "react";
import axios from "axios";

import {
  Search,
  Eye,
  IndianRupee,
  Users,
} from "lucide-react";

function StudentDashboard() {

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  // FETCH STUDENTS
  const fetchStudents = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:5000/api/student/all",
        {
          headers: {
            authorization: token
          }
        }
      );

      setStudents(response.data);

    }
    catch (err) {

      console.log(err);

    }
    finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    fetchStudents();

  }, []);

  return (

    <div className="w-full min-h-screen bg-gray-100 p-4">

      {/* TOP HEADER */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 mb-5">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          {/* LEFT */}
          <div>

            <h1 className="text-3xl font-bold text-[#1496e8]">
              Students
            </h1>

            <p className="text-gray-500 text-sm mt-1">
              Manage all students data
            </p>

          </div>

          {/* SEARCH */}
          <div className="w-full md:w-[320px] h-[45px] border border-gray-300 rounded-xl flex items-center px-3 bg-gray-50">

            <Search size={18} className="text-gray-500" />

            <input
              type="text"
              placeholder="Search student..."
              className="w-full h-full bg-transparent outline-none px-2 text-sm"
            />

          </div>

        </div>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">

        {/* CARD */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500 text-sm">
                Total Students
              </p>

              <h2 className="text-3xl font-bold text-[#1496e8] mt-2">
                {students.length}
              </h2>

            </div>

            <div className="w-[50px] h-[50px] rounded-2xl bg-blue-100 text-[#1496e8] flex items-center justify-center">

              <Users size={24} />

            </div>

          </div>

        </div>

        {/* CARD */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500 text-sm">
                Pending Fees
              </p>

              <h2 className="text-3xl font-bold text-red-500 mt-2">
                ₹8L
              </h2>

            </div>

            <div className="w-[50px] h-[50px] rounded-2xl bg-red-100 text-red-500 flex items-center justify-center">

              <IndianRupee size={24} />

            </div>

          </div>

        </div>

        {/* CARD */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500 text-sm">
                Total Income
              </p>

              <h2 className="text-3xl font-bold text-green-600 mt-2">
                ₹24L
              </h2>

            </div>

            <div className="w-[50px] h-[50px] rounded-2xl bg-green-100 text-green-600 flex items-center justify-center">

              <IndianRupee size={24} />

            </div>

          </div>

        </div>

      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">

        {/* TABLE HEADER */}
        <div className="h-[60px] px-5 border-b border-gray-200 flex items-center justify-between">

          <h2 className="text-lg font-bold text-gray-800">
            Student Records
          </h2>

          <button className="h-[40px] px-5 bg-[#1496e8] text-white rounded-xl hover:bg-[#0f86d2] transition-all duration-200 text-sm font-medium">

            Export Data

          </button>

        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">

          <table className="w-full min-w-[1200px]">

            <thead className="bg-gray-50">

              <tr>

                <th className="px-5 py-4 text-left text-sm font-semibold text-gray-600">
                  Name
                </th>

                <th className="px-5 py-4 text-left text-sm font-semibold text-gray-600">
                  Father Name
                </th>

                <th className="px-5 py-4 text-left text-sm font-semibold text-gray-600">
                  Enrollment
                </th>

                <th className="px-5 py-4 text-left text-sm font-semibold text-gray-600">
                  Course
                </th>

                <th className="px-5 py-4 text-left text-sm font-semibold text-gray-600">
                  Branch
                </th>

                <th className="px-5 py-4 text-left text-sm font-semibold text-gray-600">
                  Semester
                </th>

                <th className="px-5 py-4 text-left text-sm font-semibold text-gray-600">
                  Batch
                </th>

                <th className="px-5 py-4 text-left text-sm font-semibold text-gray-600">
                  Scholar No
                </th>

                <th className="px-5 py-4 text-left text-sm font-semibold text-gray-600">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {
                loading ? (

                  <tr>

                    <td
                      colSpan="9"
                      className="text-center py-10 text-gray-500"
                    >
                      Loading Students...
                    </td>

                  </tr>

                ) : students.length === 0 ? (

                  <tr>

                    <td
                      colSpan="9"
                      className="text-center py-10 text-gray-500"
                    >
                      No Students Found
                    </td>

                  </tr>

                ) : (

                  students.map((student, index) => (

                    <tr
                      key={student._id}
                      className="border-t border-gray-200 hover:bg-gray-50 transition-all duration-150"
                    >

                      <td className="px-5 py-4 text-sm font-medium text-gray-800">
                        {student.name}
                      </td>

                      <td className="px-5 py-4 text-sm text-gray-700">
                        {student.fatherName}
                      </td>

                      <td className="px-5 py-4 text-sm text-gray-700">
                        {student.enrollment}
                      </td>

                      <td className="px-5 py-4 text-sm text-gray-700">
                        {student.course}
                      </td>

                      <td className="px-5 py-4 text-sm text-gray-700">
                        {student.branch}
                      </td>

                      <td className="px-5 py-4 text-sm text-gray-700">
                        {student.semester}
                      </td>

                      <td className="px-5 py-4 text-sm text-gray-700">
                        {student.batch}
                      </td>

                      <td className="px-5 py-4 text-sm text-gray-700">
                        {student.scholarNumber}
                      </td>

                      {/* ACTION */}
                      <td className="px-5 py-4">

                        <button className="w-[38px] h-[38px] rounded-xl bg-blue-100 text-[#1496e8] hover:bg-[#1496e8] hover:text-white transition-all duration-200 flex items-center justify-center">

                          <Eye size={18} />

                        </button>

                      </td>

                    </tr>

                  ))

                )
              }

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

}

export default StudentDashboard;