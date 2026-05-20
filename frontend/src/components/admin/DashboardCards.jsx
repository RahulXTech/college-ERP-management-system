function DashboardCards() {

  return (

    <div className="grid grid-cols-4 gap-5">

      <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-200">

        <p className="text-gray-500 text-sm">
          Total Students
        </p>

        <h2 className="text-[30px] font-bold text-[#1496e8] mt-2">
          1250
        </h2>

      </div>

      <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-200">

        <p className="text-gray-500 text-sm">
          Total Income
        </p>

        <h2 className="text-[30px] font-bold text-green-600 mt-2">
          ₹24L
        </h2>

      </div>

      <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-200">

        <p className="text-gray-500 text-sm">
          Pending Fees
        </p>

        <h2 className="text-[30px] font-bold text-red-500 mt-2">
          ₹8L
        </h2>

      </div>

      <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-200">

        <p className="text-gray-500 text-sm">
          Paid Students
        </p>

        <h2 className="text-[30px] font-bold text-purple-600 mt-2">
          930
        </h2>

      </div>

    </div>

  );

}

export default DashboardCards;