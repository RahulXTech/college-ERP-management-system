import { useState } from "react";
import axios from "axios";

import {
  User,
  BookOpen,
  IndianRupee,
  Lock,
} from "lucide-react";

function CreateStudent() {

  const [form, setForm] = useState({
    name: "",
    fatherName: "",
    enrollment: "",
    password: "",
    course: "",
    branch: "",
    semester: "",
    batch: "",
    scholarNumber: "",
    totalFees: ""
  });

  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  // HANDLE CHANGE
  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);
      setMsg("");

      const token = localStorage.getItem("token");

      const response = await axios.post(
        "http://localhost:5000/api/student/create",
        form,
        {
          headers: {
            authorization: token
          }
        }
      );

      setMsg(response.data.message);

      setForm({
        name: "",
        fatherName: "",
        enrollment: "",
        password: "",
        course: "",
        branch: "",
        semester: "",
        batch: "",
        scholarNumber: "",
        totalFees: ""
      });

    }
    catch (err) {

      setMsg(
        err.response?.data?.message ||
        "Failed To Create Student"
      );

    }
    finally {

      setLoading(false);

    }

  };

  return (

    <div className="w-full h-screen bg-gray-100 p-4 overflow-hidden">

      {/* PAGE HEADER */}
      <div className="mb-3">

        <h1 className="text-[34px] font-bold text-[#1496e8] leading-none">
          Create Student
        </h1>

        <p className="text-gray-500 text-sm mt-1">
          Add student details into ERP system
        </p>

      </div>

      {/* FORM BOX */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

        {/* TOP BAR */}
        <div className="bg-[#1496e8] h-[72px] px-5 flex items-center gap-3">

          <div className="w-[42px] h-[42px] rounded-full bg-white/20 flex items-center justify-center text-white">

            <User size={20} />

          </div>

          <div>

            <h2 className="text-white text-lg font-semibold">
              Student Registration
            </h2>

            <p className="text-blue-100 text-xs">
              Fill all required student details
            </p>

          </div>

        </div>

        {/* MESSAGE */}
        {
          msg && (
            <div className="mx-5 mt-3 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm">
              {msg}
            </div>
          )
        }

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="p-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
        >

          {/* INPUT COMPONENT */}
          {[
            {
              label: "Student Name",
              name: "name",
              placeholder: "Enter student name"
            },

            {
              label: "Father Name",
              name: "fatherName",
              placeholder: "Enter father name"
            },

            {
              label: "Enrollment Number",
              name: "enrollment",
              placeholder: "Enter enrollment number"
            },

            {
              label: "Branch",
              name: "branch",
              placeholder: "Enter branch"
            },

            {
              label: "Semester",
              name: "semester",
              placeholder: "Enter semester"
            },

            {
              label: "Batch",
              name: "batch",
              placeholder: "Enter batch"
            },

            {
              label: "Scholar Number",
              name: "scholarNumber",
              placeholder: "Enter scholar number"
            }

          ].map((item, index) => (

            <div key={index}>

              <label className="text-[13px] font-medium text-gray-700 mb-1 block">
                {item.label}
              </label>

              <input
                required
                type="text"
                name={item.name}
                value={form[item.name]}
                onChange={handleChange}
                placeholder={item.placeholder}
                className="w-full h-[42px] border border-gray-300 rounded-xl px-4 text-sm outline-none focus:border-[#1496e8]"
              />

            </div>

          ))}

          {/* PASSWORD */}
          <div>

            <label className="text-[13px] font-medium text-gray-700 mb-1 block">
              Password
            </label>

            <div className="relative">

              <Lock
                size={17}
                className="absolute left-3 top-3 text-gray-400"
              />

              <input
                required
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full h-[42px] border border-gray-300 rounded-xl pl-10 pr-4 text-sm outline-none focus:border-[#1496e8]"
              />

            </div>

          </div>

          {/* COURSE */}
          <div>

            <label className="text-[13px] font-medium text-gray-700 mb-1 block">
              Course
            </label>

            <div className="relative">

              <BookOpen
                size={17}
                className="absolute left-3 top-3 text-gray-400"
              />

              <input
                required
                type="text"
                name="course"
                value={form.course}
                onChange={handleChange}
                placeholder="Enter course"
                className="w-full h-[42px] border border-gray-300 rounded-xl pl-10 pr-4 text-sm outline-none focus:border-[#1496e8]"
              />

            </div>

          </div>

          {/* TOTAL FEES */}
          <div>

            <label className="text-[13px] font-medium text-gray-700 mb-1 block">
              Total Fees
            </label>

            <div className="relative">

              <IndianRupee
                size={17}
                className="absolute left-3 top-3 text-gray-400"
              />

              <input
                required
                type="number"
                name="totalFees"
                value={form.totalFees}
                onChange={handleChange}
                placeholder="Enter total fees"
                className="w-full h-[42px] border border-gray-300 rounded-xl pl-10 pr-4 text-sm outline-none focus:border-[#1496e8]"
              />

            </div>

          </div>

          {/* BUTTON */}
          <div className="md:col-span-2 xl:col-span-3 pt-1">

            <button
              type="submit"
              disabled={loading}
              className="h-[44px] px-10 bg-[#1496e8] hover:bg-[#0f86d2] text-white rounded-xl text-sm font-semibold transition-all duration-200 shadow-sm"
            >
              {
                loading
                  ? "Creating Student..."
                  : "Create Student"
              }
            </button>

          </div>

        </form>

      </div>

    </div>

  );

}

export default CreateStudent;