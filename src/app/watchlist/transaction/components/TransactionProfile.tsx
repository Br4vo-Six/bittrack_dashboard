import React from "react";
import Image from "next/image";
import TransactionIcon from "@icons/Transaction Icon.png"; // Ensure the path to your arrow SVG is correct
import TrustedIcon from "@icons/Checklist icon.svg";
import SuspiciousIcon from "@icons/Warning Icon.svg";

type TransactionProfileProps = {
  hash_id: string;
  time: string;
  trusted: boolean;
};

const TransactionProfile: React.FC<TransactionProfileProps> = ({
  hash_id,
  time,
  trusted,
}) => {
  const formattedHashId = `${hash_id.slice(0, 4)}-${hash_id.slice(-4)}`;

  return (
    <div className="p-8 mb-6 text-white border border-gray-600 border-solid rounded-md shadow-md">
      <div className="flex items-center">
        <div className="flex items-center h-full">
          <Image
            src={TransactionIcon}
            alt="Arrow Icon"
            width={70}
            height={70}
          />
          <div className="flex flex-col justify-between h-full gap-3 ml-4">
            <p className="text-2xl font-bold">{formattedHashId}</p>
            <p className="text-sm">{time}</p>
          </div>
        </div>
        <div className="flex flex-col items-center ml-auto">
          <p
            className={`text-2xl font-bold ${
              trusted ? "text-green-500" : "text-yellow-500"
            }`}
          >
            {trusted ? "Trusted" : "Suspicious"}
          </p>
          <Image
            src={trusted ? TrustedIcon : SuspiciousIcon}
            alt="Flag Icon"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default TransactionProfile;
