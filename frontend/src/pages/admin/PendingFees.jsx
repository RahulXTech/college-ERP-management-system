import { IndianRupee } from "lucide-react";

function PendingFees() {
  return (
    <div className="w-full bg-gray-100">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-[42px] h-[42px] rounded-xl bg-red-100 text-red-500 flex items-center justify-center">
            <IndianRupee size={22} />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#1496e8]">Pending Fees</h1>
            <p className="text-gray-500 text-sm mt-1">Students with outstanding fee dues</p>
          </div>
        </div>
      </div>
      <div className="mt-5 bg-white rounded-2xl border border-gray-200 shadow-sm p-10 flex items-center justify-center text-gray-400 text-sm">
        Coming soon
      </div>
    </div>
  );
}

export default PendingFees;
