import React from "react";
import Image from "next/image";
import ArrowIcon from "../../public/icons/Arrow_left.svg"; // Ensure the path to your arrow SVG is correct
import Link from "next/link";

type TransactionRowProps = {
  id: string;
  time: string;
  input: number;
  output: number;
  amount: string;
  flag: string;
  flagColor: string;
  flagIcon: string;
};

const TransactionRow: React.FC<TransactionRowProps> = ({
  id,
  time,
  input,
  output,
  amount,
  flag,
  flagColor,
  flagIcon,
}) => {
  return (
    <tr className="border-t border-gray-600">
      <td className={`py-2 ${flagColor}`}>{id}</td>
      <td className="py-2 text-gray-300">{time}</td>
      <td className="py-2 text-gray-300">{input}</td>
      <td className="py-2 text-gray-300">{output}</td>
      <td className="py-2 text-yellow-400">{amount}</td>
      <td className={`py-2 ${flagColor}`}>
        {flag} <span className={flagColor}>{flagIcon}</span>
      </td>
      <td className="py-2 text-right text-blue-500 cursor-pointer">
        <Link href={`/watchlist/transaction/${id}`}>
          <Image src={ArrowIcon} alt="Arrow Icon" width={16} height={16} />
        </Link>
      </td>
    </tr>
  );
};

export default TransactionRow;
