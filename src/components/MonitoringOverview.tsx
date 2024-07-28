import React from "react";
import HighlightedTransactions from "./HighlightedTransactions";
import IllicitStats from "./IllicitStats";

const MonitoringOverview: React.FC = () => {
  return (
    <div className="bg-[#19173D] border border-solid border-gray-600 p-6 rounded-md shadow-md">
      <div className="flex items-center gap-5">
        <h2 className="text-2xl font-bold text-white ">Monitoring Overview</h2>
        <div className="flex items-center space-x-2">
          <select className="bg-[#262450] text-white rounded-md p-2">
            <option>Past 1 Month</option>
            <option>Past 3 Months</option>
            <option>Past 6 Months</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-4 mt-10">
        <IllicitStats />
        <HighlightedTransactions />
      </div>
    </div>
  );
};

export default MonitoringOverview;
