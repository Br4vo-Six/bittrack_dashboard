"use client";

import React, { useState } from "react";
import TransactionHistoryRow from "../../transaction/components/TransactionHistoryRow";
import Image from "next/image";
import TransactionHistoryIcon from "@icons/transactionHistoryIcon.svg";
import TrustedIcon from "@icons/Checklist icon.svg";
import SuspiciousIcon from "@icons/Warning Icon.svg";
import DropDownIcon from "@icons/dropdown.svg";
import DropUpIcon from "@icons/dropup.svg";
import HistoryIcon from "@icons/history.svg";

type AddressTransHistoryProps = {
  transactions: Array<{
    hash_id: string;
    totalAmount: number;
    trusted: boolean;
    from: Array<{ hash_id: string; amount: number; trusted: boolean }>;
    to: Array<{ hash_id: string; amount: number; trusted: boolean }>;
  }>;
};

const AddressTransHistory: React.FC<AddressTransHistoryProps> = ({
  transactions,
}) => {
  return (
    <div className="bg-[#19173D] rounded-md shadow-md">
      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-3xl font-bold text-white ">Transactions History</h2>
        <Image
          src={HistoryIcon}
          alt="Transaction History Icon Logo"
          width={25}
          height={25}
        />
      </div>
      {transactions.map((tx, index) => {
        const formattedHashId = `${tx.hash_id.slice(0, 4)}-${tx.hash_id.slice(
          -4
        )}`;
        const [isExpanded, setIsExpanded] = useState<boolean>(false);

        const toggleExpand = () => {
          setIsExpanded(!isExpanded);
        };

        return (
          <div key={tx.hash_id}>
            <div
              key={index}
              className="flex items-center justify-between p-4 px-6 border border-gray-600 border-solid rounded-md shadow-md"
            >
              <div className="flex gap-5">
                <div>
                  <Image
                    src={TransactionHistoryIcon}
                    alt="Transaction History Icon Logo"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-lg font-bold ">ID: {formattedHashId}</p>
                  <p className="text-[#C9C9C9]">7/20/2024, 11:54:08</p>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <p className="font-bold">
                  From:{" "}
                  <span className="text-[#C9C9C9]">
                    {tx.from.length} Previous Transactions
                  </span>
                </p>
                <p className="font-bold">
                  To:{" "}
                  <span className="text-[#C9C9C9]">
                    {tx.to.length} Subsequent Transactions
                  </span>
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="font-bold">Amount</p>
                <p className="text-[#FFA600] text-lg font-bold">
                  {tx.totalAmount} BTC
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p
                  className={`text-2xl font-bold ${
                    tx.trusted ? "text-green-500" : "text-yellow-500"
                  }`}
                >
                  {tx.trusted ? "Trusted" : "Suspicious"}
                </p>
                <Image
                  src={tx.trusted ? TrustedIcon : SuspiciousIcon}
                  alt="Flag Icon"
                  width={40}
                  height={40}
                />
              </div>
              <div
                className="my-auto cursor-pointer"
                onClick={() => toggleExpand()}
              >
                <Image
                  src={isExpanded ? DropUpIcon : DropDownIcon}
                  alt="dropdown Icon"
                  width={20}
                  height={20}
                />
              </div>
            </div>
            {isExpanded && (
              <div className="grid grid-cols-2 px-4 border border-gray-600 border-solid shadow-md p">
                <div className="flex flex-col gap-5 p-4 border-r border-gray-600 border-solid shadow-md ">
                  <p className="text-xl font-bold">From (Transaction)</p>
                  <div className="bg-[#19173D] rounded-md  flex flex-col gap-5">
                    {tx.from.map((fromTx, idx) => (
                      <TransactionHistoryRow
                        key={idx}
                        index={idx + 1}
                        hash_id={fromTx.hash_id}
                        amount={fromTx.amount}
                        trusted={fromTx.trusted}
                        from={true}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-5 p-4">
                  <p className="text-xl font-bold ">To (Transaction)</p>
                  <div className="bg-[#19173D] rounded-md flex flex-col gap-5 ">
                    {tx.to.map((toTx, idx) => (
                      <TransactionHistoryRow
                        key={idx}
                        index={idx + 1}
                        hash_id={toTx.hash_id}
                        amount={toTx.amount}
                        trusted={toTx.trusted}
                        from={false}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AddressTransHistory;
