import React from "react";
import Image from "next/image";
import TrustedIcon from "@icons/Checklist icon.svg";
import SuspiciousIcon from "@icons/Warning Icon.svg";
import HistoryBackIcon from "@icons/HistoryBackForthIcon.svg";
import HistoryForth from "@icons/HistoryForth.svg";
import Link from "next/link";

type TransactionHistoryRowProps = {
  index: number;
  hash_id: string;
  amount: number;
  trusted: boolean;
  from: boolean;
};

const TransactionRow: React.FC<TransactionHistoryRowProps> = ({
  index,
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
          <Link href={`/watchlist/transaction/${hash_id}`}>
            <Image
              src={HistoryBackIcon}
              alt="back Icon"
              width={35}
              height={35}
            />
          </Link>
        </div>
      )}
      <div className="flex items-center w-full gap-10">
        <p>{index}</p>
        <div className="flex flex-col gap-1 text-start">
          <p
            className={`font-bold ${
              trusted ? "text-[#61DE70]" : "text-yellow-500"
            }`}
          >
            {formattedHashId}
          </p>
          <p className=" text-[#FFA600] font-bold">{amount} BTC</p>
        </div>
        <div className="flex flex-col items-center">
          <p
            className={` font-bold ${
              trusted ? "text-[#61DE70]" : "text-yellow-500"
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
          <Link href={`/watchlist/transaction/${hash_id}`}>
            <Image
              src={HistoryForth}
              alt="dropdown Icon"
              width={35}
              height={35}
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default TransactionRow;
