import React from "react";
import Image from "next/image";
import BitcoinLogo from "../../public/icons/BTC Icon.png"; // Ensure the path to your Bitcoin logo is correct
import TransactionRow from "./TransactionRow";

const LatestTransactions: React.FC = () => {
  const transactions = [
    {
      id: "15253-3100",
      time: "19:32:59",
      input: 2,
      output: 3,
      amount: "0.00025148 BTC",
      flag: "Trusted",
      flagColor: "text-[#61DE70]",
      flagIcon: "✔",
    },
    {
      id: "ba132-44ff1",
      time: "19:31:47",
      input: 1,
      output: 2,
      amount: "0.00002394 BTC",
      flag: "Trusted",
      flagColor: "text-[#61DE70]",
      flagIcon: "✔",
    },
    {
      id: "bca2e-921f3",
      time: "19:31:55",
      input: 1,
      output: 1,
      amount: "0.00007248 BTC",
      flag: "Suspicious",
      flagColor: "text-[#FFD400]",
      flagIcon: "⚠",
    },
    {
      id: "7ec0d-e6cf3",
      time: "19:31:46",
      input: 3,
      output: 2,
      amount: "0.00017388 BTC",
      flag: "Trusted",
      flagColor: "text-[#61DE70]",
      flagIcon: "✔",
    },
    {
      id: "c7780-f1af4",
      time: "19:32:50",
      input: 1,
      output: 2,
      amount: "0.00043616 BTC",
      flag: "Suspicious",
      flagColor: "text-[#FFD400]",
      flagIcon: "⚠",
    },
    {
      id: "ee3d1-eb9f4",
      time: "19:31:54",
      input: 2,
      output: 3,
      amount: "0.14452177 BTC",
      flag: "Suspicious",
      flagColor: "text-[#FFD400]",
      flagIcon: "⚠",
    },
    {
      id: "88726-344f5",
      time: "19:31:55",
      input: 2,
      output: 1,
      amount: "0.00008568 BTC",
      flag: "Suspicious",
      flagColor: "text-[#FFD400]",
      flagIcon: "⚠",
    },
    {
      id: "d1c79-dacf5",
      time: "19:32:00",
      input: 2,
      output: 3,
      amount: "0.00817837 BTC",
      flag: "Trusted",
      flagColor: "text-[#61DE70]",
      flagIcon: "✔",
    },
    {
      id: "c017b-5ccf5",
      time: "19:32:51",
      input: 1,
      output: 5,
      amount: "0.00000294 BTC",
      flag: "Trusted",
      flagColor: "text-[#61DE70]",
      flagIcon: "✔",
    },
    {
      id: "e42cb-f5af6",
      time: "19:31:47",
      input: 1,
      output: 4,
      amount: "0.00000294 BTC",
      flag: "Trusted",
      flagColor: "text-[#61DE70]",
      flagIcon: "✔",
    },
  ];

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
          {transactions.map((tx, index) => (
            <TransactionRow
              key={index}
              id={tx.id}
              time={tx.time}
              input={tx.input}
              output={tx.output}
              amount={tx.amount}
              flag={tx.flag}
              flagColor={tx.flagColor}
              flagIcon={tx.flagIcon}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LatestTransactions;
