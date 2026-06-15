import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import FeePayment from "./pages/FeePayment";
import Login from "./pages/Login";
import LeftRightPage from "./pages/LeftRightPage";

// ADMIN PAGES
import AdminLayout from "./pages/admin/AdminLayout";
import DashboardHome from "./pages/admin/DashboardHome";
import CreateStudent from "./pages/admin/CreateStudent";
import StudentDashboard from "./pages/admin/StudentDashboard";
import Payments from "./pages/admin/Payments";
import PendingFees from "./pages/admin/PendingFees";
import Settings from "./pages/admin/Settings";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/login" replace />;
  return children;
}



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
    element: <ProtectedRoute><FeePayment /></ProtectedRoute>
  },

  // ADMIN DASHBOARD
  {
    path: "/admin",
    element: <ProtectedRoute><AdminLayout /></ProtectedRoute>,

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

      // STUDENT DETAILS
      {
        path: "view-student-details",
        element: <StudentDashboard />
      },

      // PAYMENTS
      {
        path: "payments",
        element: <Payments />
      },

      // PENDING FEES
      {
        path: "pending-fees",
        element: <PendingFees />
      },

      // SETTINGS
      {
        path: "settings",
        element: <Settings />
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