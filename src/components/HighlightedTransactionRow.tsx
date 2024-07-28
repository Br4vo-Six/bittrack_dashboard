import React from "react";
import Image from "next/image";
import ArrowIcon from "../../public/icons/Arrow_left.svg"; // Ensure the path to your arrow SVG is correct
import Link from "next/link";

type HighlightedTransactionRowProps = {
  hash: string;
  numEdges: number;
  totalAmount: number;
};

const HighlightedTransactionRow: React.FC<HighlightedTransactionRowProps> = ({
  hash,
  numEdges,
  totalAmount,
}) => {
  const formattedHashId = `${hash.slice(0, 4)}-${hash.slice(-4)}`;
  return (
    <tr className="border-t border-gray-600">
      <td className="py-2 text-[#FFD400] font-bold">{formattedHashId}</td>
      <td className="py-2 ">{numEdges}</td>
      <td className="py-2 text-[#FFA600]">{totalAmount} BTC</td>
      <td className="py-2 text-right text-blue-500 cursor-pointer">
        <Link href={`/watchlist/transaction/${hash}`}>
          <Image src={ArrowIcon} alt="Arrow Icon" width={16} height={16} />
        </Link>
      </td>
    </tr>
  );
};

export default HighlightedTransactionRow;
