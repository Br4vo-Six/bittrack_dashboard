import React from "react";
import Image from "next/image";
import BitcoinLogo from "../../public/icons/BTC Icon.png"; // Ensure the path to your Bitcoin logo is correct
import TransactionRow from "./TransactionRow";
import { dummyData } from "@/app/watchlist/transaction/dummy/dummy_transactions";

const LatestTransactions: React.FC = () => {
  return (
    <div className="bg-[#19173D] border border-gray-600 border-solid  p-6 rounded-md shadow-md">
      <div className="flex items-center mb-4">
        <Image src={BitcoinLogo} alt="Bitcoin Logo" width={40} height={40} />
        <h2 className="ml-4 text-2xl font-bold text-white">
          Latest Transactions
        </h2>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="py-2 text-gray-300">ID</th>
            <th className="py-2 text-gray-300">Time</th>
            <th className="py-2 text-gray-300">Input</th>
            <th className="py-2 text-gray-300">Output</th>
            <th className="py-2 text-gray-300">Amount</th>
            <th className="py-2 text-gray-300">Flag</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((tx, index) => (
            <TransactionRow
              key={index}
              hash_id={tx.hash_id}
              time={tx.time}
              input={tx.input_address.length}
              output={tx.output_address.length}
              amount={tx.amount}
              trusted={tx.trusted}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LatestTransactions;
