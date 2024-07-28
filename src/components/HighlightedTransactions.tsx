"use client";

import React, { useState } from "react";
import HighlightedTransactionRow from "./HighlightedTransactionRow";

const HighlightedTransactions: React.FC = () => {
  const [sortBy, setSortBy] = useState("Edges");

  const transactions = [
    { hash: "8872L1344F5", numEdges: 21, totalAmount: "0.025983 BTC" },
    { hash: "88AFK344F5", numEdges: 21, totalAmount: "0.000129 BTC" },
    { hash: "Z210ANJ1011", numEdges: 20, totalAmount: "0.000034 BTC" },
    { hash: "B29D3P0L00", numEdges: 18, totalAmount: "0.001811 BTC" },
  ];

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="col-span-2">
      <p className="mb-3 text-xl text-[#C9C9C9]">Highlighted Transactions</p>
      <div className="bg-[#262450] p-4 rounded-md shadow-md">
        <div className="flex items-center justify-between mb-2">
          <div className="text-gray-300">Sort by: {sortBy}</div>
          <select
            className="bg-[#19173D] text-white rounded-md p-2"
            value={sortBy}
            onChange={handleSortChange}
          >
            <option value="Edges">Edges</option>
            <option value="Amount">Amount</option>
          </select>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2 text-gray-300">Hash</th>
              <th className="py-2 text-gray-300">Num. Edges</th>
              <th className="py-2 text-gray-300">Total Amount</th>
              <th className="py-2"></th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <HighlightedTransactionRow
                key={index}
                hash={tx.hash}
                numEdges={tx.numEdges}
                totalAmount={tx.totalAmount}
              />
            ))}
          </tbody>
        </table>
        <div className="mt-2 text-right text-gray-300">
          <a href="#" className="hover:underline">
            See more...
          </a>
        </div>
      </div>
    </div>
  );
};

export default HighlightedTransactions;
