import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";

function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    loginId: "",
    password: ""
  });

  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  // HANDLE LOGIN
  const handleOnclick = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);
      setMsg("");

      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          loginId: form.loginId,
          password: form.password
        }
      );

      // DATA
      const data = response.data;

      // SAVE TOKEN
      localStorage.setItem("token", data.token);

      // SAVE USER
      localStorage.setItem("user", JSON.stringify(data.user));

      // ADMIN LOGIN
      if (data.role === "admin") {

        navigate("/admin/dashboard");

      }

      // STUDENT LOGIN
      else {

        navigate("/student/dashboard");

      }

    }
    catch (err) {

      setMsg(
        err.response?.data?.message || "Login Failed"
      );

    }
    finally {

      setLoading(false);

    }

  };

  return (

    <div className="w-full h-screen bg-[#efefef] flex items-center justify-center px-3 overflow-hidden">

      {/* LOGIN BOX */}
      <div className="w-full max-w-[340px] bg-white border border-gray-300 shadow-sm rounded-sm overflow-hidden">

        {/* HEADER */}
        <div className="bg-[#1496e8] py-3 px-4">

          <h1 className="text-white text-[20px] font-normal text-center">
            ERP Login Portal
          </h1>

        </div>

        {/* BODY */}
        <div className="p-5">

          {/* LOGO */}
          <div className="flex justify-center mb-4">

            <div className="w-[70px] h-[70px] rounded-full bg-[#1496e8] flex items-center justify-center text-white text-[32px]">
              🎓
            </div>

          </div>

          {/* TITLE */}
          <h2 className="text-center text-[18px] text-[#1f3d6d] font-semibold mb-5 leading-7">
            Millennium Institute Of Technology
          </h2>

          {/* ERROR MESSAGE */}
          {
            msg && (
              <p className="text-red-500 text-sm text-center mb-3">
                {msg}
              </p>
            )
          }

          {/* FORM */}
          <form className="space-y-3">

            {/* LOGIN ID */}
            <div>

              <label className="block text-[13px] text-gray-700 mb-1">
                Enrollment / Admin Email
              </label>

              <input
                onChange={handleChange}
                type="text"
                name="loginId"
                placeholder="Enter Enrollment or Email"
                value={form.loginId}
                className="w-full h-[38px] border border-gray-400 px-3 outline-none focus:border-[#1496e8] text-[13px]"
              />

            </div>

            {/* PASSWORD */}
            <div>

              <label className="block text-[13px] text-gray-700 mb-1">
                Password
              </label>

              <input
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="Enter Password"
                value={form.password}
                className="w-full h-[38px] border border-gray-400 px-3 outline-none focus:border-[#1496e8] text-[13px]"
              />

            </div>

            {/* OPTIONS */}
            <div className="flex items-center justify-between pt-1">

              <label className="flex items-center gap-2 text-[12px] text-gray-600">

                <input type="checkbox" className="cursor-pointer" />

                Remember me

              </label>

              <button
                type="button"
                className="cursor-pointer text-[#1496e8] text-[12px]"
              >
                Forgot Password?
              </button>

            </div>

            {/* BUTTON */}
            <button
              onClick={handleOnclick}
              type="submit"
              disabled={loading}
              className="cursor-pointer w-full h-[40px] bg-[#1496e8] hover:bg-[#0f86d2] text-white text-[14px] font-medium mt-2 transition disabled:opacity-70"
            >
              {
                loading
                  ? "Logging in..."
                  : "Login"
              }
            </button>

          </form>

        </div>

      </div>

    </div>

  );
}

export default Login;