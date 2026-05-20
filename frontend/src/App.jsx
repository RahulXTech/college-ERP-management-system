import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import MainPage from "./components/MainPage";

import FeePayment from "./pages/FeePayment";
import Login from "./pages/Login";
import LeftRightPage from "./pages/LeftRightPage";


// ADMIN PAGES
import AdminLayout from "./pages/admin/AdminLayout";
import DashboardHome from "./pages/admin/DashboardHome";
import CreateStudent from "./pages/admin/CreateStudent";
import StudentDashboard from "./pages/admin/StudentDashboard";
import Payments from "./pages/admin/Payments";



const router = createBrowserRouter([

  // HOME PAGE
  {
    path: "/",
    element: <LeftRightPage />
  },

  // LOGIN PAGE
  {
    path: "/login",
    element: <Login />
  },

  // STUDENT DASHBOARD
  {
    path: "/student/dashboard",
    element: <FeePayment />
  },

  // ADMIN DASHBOARD
  {
    path: "/admin",
    element: <AdminLayout />,

    children: [

      // DASHBOARD HOME
      {
        path: "dashboard",
        element: <DashboardHome />
      },

      // CREATE STUDENT
      {
        path: "create-student",
        element: <CreateStudent />
      },

      // DISPLY STUDENT DETAILS
      {
        path : "view-student-details",
        element : <StudentDashboard/>
      },
      // DISPLY STUDENT DETAILS
      {
        path : "payments",
        element : <Payments/>
      }

    ]
  }

]);


function App() {

  return (

    <div>

      <RouterProvider router={router} />

      {/* <Sidebar />
      <MainPage /> */}

    </div>

  );

}

export default App;