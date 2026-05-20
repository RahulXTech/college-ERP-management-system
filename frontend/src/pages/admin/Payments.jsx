import { useEffect, useState } from "react";
import axios from "axios";

import {
  IndianRupee,
  Search,
  CheckCircle,
  Clock3,
  Wallet,
} from "lucide-react";

function Payments() {

  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  // FETCH PAYMENTS
  const fetchPayments = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:5000/api/student/pending",
        {
          headers: {
            authorization: token
          }
        }
      );

      setPayments(response.data);

    }
    catch (err) {

      console.log(err);

    }
    finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    fetchPayments();

  }, []);

  return (

    <div className="w-full bg-gray-100">

      {/* HEADER */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 mb-5">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

          {/* LEFT */}
          <div>

            <h1 className="text-3xl font-bold text-[#1496e8]">
              Payments
            </h1>

            <p className="text-gray-500 text-sm mt-1">
              Manage student fee payments
            </p>

          </div>

          {/* SEARCH */}
          <div className="w-full lg:w-[320px] h-[45px] border border-gray-300 rounded-xl flex items-center px-3 bg-gray-50">

            <Search size={18} className="text-gray-500" />

            <input
              type="text"
              placeholder="Search payment..."
              className="w-full h-full bg-transparent outline-none px-2 text-sm"
            />

          </div>

        </div>

      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">

        {/* TOTAL COLLECTION */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500 text-sm">
                Total Collection
              </p>

              <h2 className="text-3xl font-bold text-green-600 mt-2">
                ₹24L
              </h2>

            </div>

            <div className="w-[52px] h-[52px] rounded-2xl bg-green-100 text-green-600 flex items-center justify-center">

              <IndianRupee size={24} />

            </div>

          </div>

        </div>

        {/* PENDING */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500 text-sm">
                Pending Amount
              </p>

              <h2 className="text-3xl font-bold text-red-500 mt-2">
                ₹8L
              </h2>

            </div>

            <div className="w-[52px] h-[52px] rounded-2xl bg-red-100 text-red-500 flex items-center justify-center">

              <Clock3 size={24} />

            </div>

          </div>

        </div>

        {/* COMPLETED */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500 text-sm">
                Completed Payments
              </p>

              <h2 className="text-3xl font-bold text-[#1496e8] mt-2">
                120
              </h2>

            </div>

            <div className="w-[52px] h-[52px] rounded-2xl bg-blue-100 text-[#1496e8] flex items-center justify-center">

              <CheckCircle size={24} />

            </div>

          </div>

        </div>

      </div>

      {/* PAYMENT TABLE */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

        {/* TABLE HEADER */}
        <div className="h-[60px] px-5 border-b border-gray-200 flex items-center justify-between">

          <h2 className="text-lg font-bold text-gray-800">
            Payment Records
          </h2>

          <button className="h-[40px] px-5 rounded-xl bg-[#1496e8] hover:bg-[#0f86d2] text-white text-sm font-medium transition-all duration-200">

            Export Data

          </button>

        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">

          <table className="w-full min-w-[1100px]">

            <thead className="bg-gray-50">

              <tr>

                <th className="px-5 py-4 text-left text-sm font-semibold text-gray-600">
                  Student Name
                </th>

                <th className="px-5 py-4 text-left text-sm font-semibold text-gray-600">
                  Enrollment
                </th>

                <th className="px-5 py-4 text-left text-sm font-semibold text-gray-600">
                  Course
                </th>

                <th className="px-5 py-4 text-left text-sm font-semibold text-gray-600">
                  Total Fees
                </th>

                <th className="px-5 py-4 text-left text-sm font-semibold text-gray-600">
                  Paid Amount
                </th>

                <th className="px-5 py-4 text-left text-sm font-semibold text-gray-600">
                  Pending Amount
                </th>

                <th className="px-5 py-4 text-left text-sm font-semibold text-gray-600">
                  Status
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
                      colSpan="8"
                      className="text-center py-10 text-gray-500"
                    >
                      Loading Payments...
                    </td>

                  </tr>

                ) : payments.length === 0 ? (

                  <tr>

                    <td
                      colSpan="8"
                      className="text-center py-10 text-gray-500"
                    >
                      No Payment Records Found
                    </td>

                  </tr>

                ) : (

                  payments.map((payment) => (

                    <tr
                      key={payment._id}
                      className="border-t border-gray-200 hover:bg-gray-50 transition-all duration-150"
                    >

                      <td className="px-5 py-4 text-sm font-medium text-gray-800">
                        {payment.studentId?.name}
                      </td>

                      <td className="px-5 py-4 text-sm text-gray-700">
                        {payment.studentId?.enrollment}
                      </td>

                      <td className="px-5 py-4 text-sm text-gray-700">
                        {payment.studentId?.course}
                      </td>

                      <td className="px-5 py-4 text-sm font-medium text-gray-800">
                        ₹{payment.totalFees}
                      </td>

                      <td className="px-5 py-4 text-sm font-medium text-green-600">
                        ₹{payment.paidAmount}
                      </td>

                      <td className="px-5 py-4 text-sm font-medium text-red-500">
                        ₹{payment.pendingAmount}
                      </td>

                      {/* STATUS */}
                      <td className="px-5 py-4">

                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold
                          ${
                            payment.paymentStatus === "paid"
                              ? "bg-green-100 text-green-600"
                              : payment.paymentStatus === "partial"
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-red-100 text-red-500"
                          }`}
                        >
                          {payment.paymentStatus}
                        </span>

                      </td>

                      {/* ACTION */}
                      <td className="px-5 py-4">

                        <button className="w-[38px] h-[38px] rounded-xl bg-blue-100 text-[#1496e8] hover:bg-[#1496e8] hover:text-white transition-all duration-200 flex items-center justify-center">

                          <Wallet size={18} />

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

export default Payments;