import React from "react";

const IllicitStats: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-1">
          <p className="text-lg text-[#C9C9C9] font-bold">
            Number of Illicit Clusters
          </p>
          <p className="text-2xl font-bold text-red-500">32</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[#C9C9C9] font-bold">
            Number of Illicit Transactions
          </p>
          <p className="text-2xl font-bold text-red-500">431</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[#C9C9C9] font-bold">
            Avg. Number of Illicit Txs/Cluster
          </p>
          <p className="text-2xl font-bold text-red-500">13.5</p>
        </div>
      </div>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-1">
          <p className="text-[#C9C9C9] font-bold">
            Avg. Amount of Dirty Txs/cluster
          </p>
          <p className="text-2xl font-bold ">0.0042159375 BTC</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[#C9C9C9] font-bold">Total Amount of Dirty Txs </p>
          <p className="text-2xl font-bold">0.134910 BTC</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[#C9C9C9] font-bold">Current Accuracy</p>
          <p className="text-2xl font-bold text-green-500">98%</p>
          <p className="text-[#C9C9C9] text-sm">Last updated: 25/07/2024</p>
        </div>
      </div>
    </>
  );
};

export default IllicitStats;
