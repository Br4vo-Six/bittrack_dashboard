import React from "react";
import Image from "next/image";
import ArrowIcon from "@icons/Arrow_left.svg";
import TrustedIcon from "@icons/Checklist icon.svg";
import SuspiciousIcon from "@icons/Warning Icon.svg";
import HistoryBackForthIcon from "@icons/HistoryBackForthIcon.svg";
import HistoryForth from "@icons/HistoryForth.svg";

type TransactionHistoryRowProps = {
  hash_id: string;
  amount: string;
  trusted: boolean;
  from: boolean;
};

const TransactionRow: React.FC<TransactionHistoryRowProps> = ({
  hash_id,
  amount,
  trusted,
  from,
}) => {
  const formattedHashId = `${hash_id.slice(0, 4)}-${hash_id.slice(-4)}`;

  return (
    <div className="flex items-center mb-2">
      {from && (
        <div className="mr-5 cursor-pointer">
          <Image
            src={HistoryBackForthIcon}
            alt="dropdown Icon"
            width={30}
            height={30}
          />
        </div>
      )}
      <div className="flex items-center w-full gap-10">
        <p>1</p>
        <div className="flex flex-col gap-1 text-start">
          <p
            className={`font-bold ${
              trusted ? "text-green-500" : "text-yellow-500"
            }`}
          >
            {formattedHashId}
          </p>
          <p className=" text-[#FFA600] font-bold">{amount}</p>
        </div>
        <div className="flex flex-col items-center">
          <p
            className={` font-bold ${
              trusted ? "text-green-500" : "text-yellow-500"
            }`}
          >
            {trusted ? "Trusted" : "Suspicious"}
          </p>
          <Image
            src={trusted ? TrustedIcon : SuspiciousIcon}
            alt="Flag Icon"
            width={20}
            height={20}
          />
        </div>
      </div>
      {!from && (
        <div className="cursor-pointer ">
          <Image
            src={HistoryForth}
            alt="dropdown Icon"
            width={30}
            height={30}
          />
        </div>
      )}
    </div>
  );
};

export default TransactionRow;
