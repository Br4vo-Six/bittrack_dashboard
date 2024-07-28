import React from "react";
import Image from "next/image";
import ArrowIcon from "../../public/icons/Arrow_left.svg"; // Ensure the path to your arrow SVG is correct
import Link from "next/link";
import TrustedIcon from "@icons/Checklist icon.svg";
import SuspiciousIcon from "@icons/Warning Icon.svg";

type TransactionRowProps = {
  hash_id: string;
  time: string;
  input: number;
  output: number;
  amount: number;
  trusted: boolean;
};

const TransactionRow: React.FC<TransactionRowProps> = ({
  hash_id,
  time,
  input,
  output,
  amount,
  trusted,
}) => {
  const formattedHashId = `${hash_id.slice(0, 4)}-${hash_id.slice(-4)}`;
  const formattedTime = new Date(time).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  return (
    <tr className="border-t border-gray-600">
      <td
        className={`py-2 font-bold ${
          trusted ? "text-green-500" : "text-yellow-500"
        }`}
      >
        {formattedHashId}
      </td>
      <td className="py-2 text-gray-300">{formattedTime}</td>
      <td className="py-2 text-gray-300">{input}</td>
      <td className="py-2 text-gray-300">{output}</td>
      <td className="py-2 text-[#FFA600] font-extrabold">{amount} BTC</td>
      <td className={`py-2 `}>
        <div className="flex items-center gap-2">
          <p
            className={`text-base font-bold ${
              trusted ? "text-green-500" : "text-yellow-500"
            }`}
          >
            {trusted ? "Trusted" : "Suspicious"}
          </p>
          <Image
            src={trusted ? TrustedIcon : SuspiciousIcon}
            alt="Flag Icon"
            width={18}
            height={18}
          />
        </div>
      </td>
      <td className="py-2 text-right text-blue-500 cursor-pointer">
        <Link href={`/watchlist/transaction/${hash_id}`}>
          <Image src={ArrowIcon} alt="Arrow Icon" width={26} height={26} />
        </Link>
      </td>
    </tr>
  );
};

export default TransactionRow;
