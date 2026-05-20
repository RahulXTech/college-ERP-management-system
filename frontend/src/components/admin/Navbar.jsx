import { Bell, Search } from "lucide-react";

function Navbar() {

  return (

    <div className="h-[70px] bg-white shadow-sm px-6 flex items-center justify-between">

      {/* SEARCH */}
      <div className="w-[350px] h-[42px] border border-gray-300 rounded-md flex items-center px-3 bg-gray-50">

        <Search size={18} className="text-gray-500" />

        <input
          type="text"
          placeholder="Search student..."
          className="w-full h-full bg-transparent outline-none px-2 text-sm"
        />

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-5">

        <button className="relative">

          <Bell className="text-gray-700" size={22} />

          <span className="absolute -top-1 -right-1 w-[18px] h-[18px] bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">
            3
          </span>

        </button>

        <div className="flex items-center gap-3">

          <div className="w-[42px] h-[42px] rounded-full bg-[#1496e8] text-white flex items-center justify-center font-semibold">
            A
          </div>

          <div>

            <h3 className="text-[14px] font-semibold text-gray-700">
              Admin
            </h3>

            <p className="text-[12px] text-gray-500">
              Super Admin
            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Navbar;