import { ChevronDown } from "lucide-react";

function FeePayment() {
 
return (
  <div className="w-full h-screen bg-[#efefef] overflow-hidden">

    {/* HEADER */}
    <div className="h-[50px] bg-[#1496e8] flex items-center justify-between px-4">

      {/* LEFT */}
      <div className="flex items-center gap-2">

        <div className="w-8 h-8 rounded-full bg-white overflow-hidden flex items-center justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
            alt="logo"
            className="w-5"
          />
        </div>

        <h1 className="text-white text-[14px] md:text-[18px] font-normal">
          MILLENNIUM INSTITUTE OF TECHNOLOGY
        </h1>

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4 text-white text-[13px]">

        <span>RAHUL KUMAR</span>

        <button className="flex items-center gap-1">
          Account
          <ChevronDown size={12} />
        </button>

      </div>

    </div>

    {/* BODY */}
    <div className="flex h-[calc(100vh-50px)]">

      {/* SIDEBAR */}
      <div className="w-[250px] bg-[#1496e8] text-white">

        {[
          "General Information",
          "Fee Details",
          "Library Info",
          "Change Setting",
          "Grievances",
        ].map((item, index) => (
          <div
            key={index}
            className="h-[60px] flex items-center justify-between px-5 border-b border-white/20"
          >

            <span className="text-[15px]">
              {item}
            </span>

            <ChevronDown size={15} />

          </div>
        ))}

      </div>

      {/* RIGHT CONTENT */}
      <div className="flex-1 p-3 overflow-hidden">

        <div className="bg-[#f7f7f7] border border-gray-300 rounded-sm p-3 h-full overflow-hidden">

          {/* TITLE */}
          <h1 className="text-[20px] font-semibold text-[#1f3d6d] mb-2">
            Online Fee Payment
          </h1>

          {/* NOTE */}
          <div className="border border-[#597bb2] bg-white p-2 mb-3">

            <p className="text-[#0000ff] italic font-bold text-[11px] leading-5">
              Important Note : Please make sure to make the online payment by using broadband/wifi internet connection only.
            </p>

          </div>

          {/* FORM */}
          <div className="grid grid-cols-2 gap-6">

            {/* LEFT */}
            <div className="space-y-1">

              {[
                "Fee Session",
                "Institute",
                "Student Name",
                "Father Name",
                "Enrolment No.",
                "Reg. No.",
              ].map((label, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 items-center gap-2"
                >

                  <label className="text-[13px]">
                    {label}
                  </label>

                  {index === 0 || index === 1 ? (
                    <select className="border border-gray-500 h-[28px] px-2 text-[12px]">
                      <option>
                        {index === 0 ? "2026-2027" : "MIT"}
                      </option>
                    </select>
                  ) : (
                    <input
                      type="text"
                      defaultValue={
                        index === 2
                          ? "RAHUL KUMAR"
                          : index === 3
                          ? "SHARMA"
                          : index === 4
                          ? "0540CS221042"
                          : ""
                      }
                      className="border border-gray-500 h-[28px] px-2 text-[12px]"
                    />
                  )}
                </div>
              ))}
            </div>

            {/* RIGHT */}
            <div className="space-y-1">

              {[
                "Receipt No.",
                "Fee Type",
                "Batch Year",
                "Course",
                "Branch",
                "Semester",
              ].map((label, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 items-center gap-2"
                >

                  <label className="text-[13px]">
                    {label}
                  </label>

                  {index === 1 ? (
                    <select className="border border-gray-500 h-[28px] px-2 text-[12px]">
                      <option>COMMON</option>
                    </select>
                  ) : (
                    <input
                      type="text"
                      defaultValue={
                        index === 2
                          ? "2022-2023"
                          : index === 3
                          ? "B.TECH"
                          : index === 4
                          ? "CSE"
                          : index === 5
                          ? "VIII SEM"
                          : ""
                      }
                      className="border border-gray-500 h-[28px] px-2 text-[12px]"
                    />
                  )}

                </div>
              ))}

            </div>

          </div>

          {/* SCHOLAR */}
          <div className="mt-4 flex items-center gap-5 flex-wrap">

            <div className="flex items-center gap-2">

              <label className="text-[13px]">
                Scholar No
              </label>

              <input
                type="text"
                defaultValue="24190"
                className="border border-gray-500 h-[28px] w-[90px] px-2 text-[12px]"
              />

            </div>

            <div className="flex gap-5 flex-wrap">

              {[1, 2, 3, 4].map((year) => (
                <label
                  key={year}
                  className="flex items-center gap-1 text-[12px]"
                >

                  <input type="checkbox" />

                  {year} Year

                </label>
              ))}

            </div>

          </div>

         {/* PAYMENT SECTION */}
<div className="mt-4 bg-[#fff4f4] border border-[#f1dede]">

  {/* ROW 1 */}
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 px-4 py-3 border-b border-[#f1dede]">

    {/* LEFT */}
    <h2 className="text-[15px] md:text-[16px] font-medium text-gray-700">
      Net Paying Amt.
    </h2>

    {/* RIGHT */}
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">

      <input
        type="text"
        className="border border-gray-400 h-[32px] w-full sm:w-[140px] px-2 text-[13px] outline-none"
      />

      <label className="flex items-center gap-2 text-[12px] text-gray-700 whitespace-nowrap">

        <input type="checkbox" />

        Adjust Amount

      </label>

    </div>

  </div>

  {/* ROW 2 */}
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 px-4 py-3">

    {/* LEFT */}
    <h2 className="text-[15px] md:text-[16px] font-medium text-gray-700">
      Total Paying Amt
    </h2>

    {/* RIGHT */}
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">

      <input
        type="text"
        className="border border-gray-400 h-[32px] w-full sm:w-[140px] px-2 text-[13px] outline-none"
      />

      <button className="bg-[#41a8e7] hover:bg-[#2d98da] text-white h-[34px] px-5 rounded text-[14px] font-medium transition whitespace-nowrap">
        Pay Now
      </button>

    </div>

  </div>

</div>

        </div>

      </div>

    </div>

  </div>
);
}

export default FeePayment;