import {
  LayoutDashboard,
  Users,
  IndianRupee,
  Wallet,
  FileText,
  Settings,
  LogOut,
  GraduationCap,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

function Sidebar() {

  const location = useLocation();

  // ACTIVE MENU
  const activeMenu =
    "bg-white text-[#1496e8] shadow-md";

  // NORMAL MENU
  const normalMenu =
    "text-white hover:bg-white/10";

  return (

    <div className="w-[230px] h-screen bg-[#1496e8] flex flex-col justify-between overflow-hidden">

      {/* TOP SECTION */}
      <div>

        {/* LOGO */}
        <div className="h-[65px] flex items-center px-5 border-b border-white/10">

          <div className="w-[40px] h-[40px] rounded-xl bg-white/15 flex items-center justify-center text-white">

            <GraduationCap size={22} />

          </div>

          <div className="ml-3">

            <h1 className="text-white text-[18px] font-bold">
              MIT ERP
            </h1>

            <p className="text-blue-100 text-[11px]">
              Admin Panel
            </p>

          </div>

        </div>

        {/* MENU */}
        <div className="px-3 py-4">

          <ul className="space-y-2">

            {/* DASHBOARD */}
            <Link to="/admin/dashboard">

              <li
                className={`h-[44px] px-4 rounded-xl flex items-center gap-3 transition-all duration-200 cursor-pointer
                ${
                  location.pathname === "/admin/dashboard"
                    ? activeMenu
                    : normalMenu
                }`}
              >

                <LayoutDashboard size={18} />

                <span className="text-[14px] font-medium">
                  Dashboard
                </span>

              </li>

            </Link>

            {/* STUDENTS */}
            <Link to="/admin/view-student-details">

              <li
                className={`h-[44px] px-4 rounded-xl flex items-center gap-3 transition-all duration-200 cursor-pointer
                ${
                  location.pathname === "/admin/view-student-details"
                    ? activeMenu
                    : normalMenu
                }`}
              >

                <Users size={18} />

                <span className="text-[14px] font-medium">
                  Students
                </span>

              </li>

            </Link>

            {/* CREATE STUDENT */}
            <Link to="/admin/create-student">

              <li
                className={`h-[44px] px-4 rounded-xl flex items-center gap-3 transition-all duration-200 cursor-pointer
                ${
                  location.pathname === "/admin/create-student"
                    ? activeMenu
                    : normalMenu
                }`}
              >

                <FileText size={18} />

                <span className="text-[14px] font-medium">
                  Add Student
                </span>

              </li>

            </Link>

            {/* PAYMENTS */}
            <Link to="/admin/payments">

              <li
                className={`h-[44px] px-4 rounded-xl flex items-center gap-3 transition-all duration-200 cursor-pointer
                ${
                  location.pathname === "/admin/payments"
                    ? activeMenu
                    : normalMenu
                }`}
              >

                <Wallet size={18} />

                <span className="text-[14px] font-medium">
                  Payments
                </span>

              </li>

            </Link>

            {/* PENDING */}
            <Link to="/admin/pending-fees">

              <li
                className={`h-[44px] px-4 rounded-xl flex items-center gap-3 transition-all duration-200 cursor-pointer
                ${
                  location.pathname === "/admin/pending-fees"
                    ? activeMenu
                    : normalMenu
                }`}
              >

                <IndianRupee size={18} />

                <span className="text-[14px] font-medium">
                  Pending Fees
                </span>

              </li>

            </Link>

            {/* SETTINGS */}
            <Link to="/admin/settings">

              <li
                className={`h-[44px] px-4 rounded-xl flex items-center gap-3 transition-all duration-200 cursor-pointer
                ${
                  location.pathname === "/admin/settings"
                    ? activeMenu
                    : normalMenu
                }`}
              >

                <Settings size={18} />

                <span className="text-[14px] font-medium">
                  Settings
                </span>

              </li>

            </Link>

          </ul>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="p-3 border-t border-white/10">

        {/* PROFILE */}
        <div className="flex items-center gap-3 mb-3 px-2">

          <div className="w-[38px] h-[38px] rounded-full bg-white text-[#1496e8] flex items-center justify-center font-bold text-sm">
            A
          </div>

          <div>

            <h3 className="text-white text-[13px] font-semibold">
              Admin
            </h3>

            <p className="text-blue-100 text-[11px]">
              Super Admin
            </p>

          </div>

        </div>

        {/* LOGOUT */}
        <button className="w-full h-[42px] rounded-xl bg-white text-[#1496e8] font-semibold text-sm flex items-center justify-center gap-2 hover:bg-gray-100 transition-all duration-200">

          <LogOut size={17} />

          Logout

        </button>

      </div>

    </div>

  );

}

export default Sidebar;
