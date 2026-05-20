import { Outlet } from "react-router";

import Sidebar from "../../components/admin/Sidebar";
import Navbar from "../../components/admin/Navbar";

function AdminLayout() {

  return (

    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Navbar />

        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );

}
export default AdminLayout;