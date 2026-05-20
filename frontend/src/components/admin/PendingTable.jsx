function PendingTable() {

  return (

    <div className="bg-white rounded-xl shadow-sm mt-8 border border-gray-200">

      <div className="p-5 border-b border-gray-200 flex items-center justify-between">

        <h2 className="text-[18px] font-semibold text-gray-700">
          Pending Fee Students
        </h2>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-gray-50">

            <tr className="text-left">

              <th className="p-4 text-sm font-semibold text-gray-600">
                Student Name
              </th>

              <th className="p-4 text-sm font-semibold text-gray-600">
                Enrollment
              </th>

              <th className="p-4 text-sm font-semibold text-gray-600">
                Course
              </th>

              <th className="p-4 text-sm font-semibold text-gray-600">
                Pending Amount
              </th>

              <th className="p-4 text-sm font-semibold text-gray-600">
                Status
              </th>

            </tr>

          </thead>

        </table>

      </div>

    </div>

  );

}

export default PendingTable;