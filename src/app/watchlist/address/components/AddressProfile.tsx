import React from "react";
import Image from "next/image";
import TransactionIcon from "@icons/Transaction Icon.png"; // Ensure the path to your arrow SVG is correct
import BitcoinLogo from "@icons/BTC Icon.png"; // Ensure the path to your Bitcoin logo is correct

type AddressProfileProps = {
  address: string;
  trust_score: number;
};

const AddressProfile: React.FC<AddressProfileProps> = ({
  address,
  trust_score,
}) => {
  const formattedHashId = `${address.slice(0, 4)}-${address.slice(-4)}`;

  return (
    <div className="p-8 px-12 mb-6 text-white border border-gray-600 border-solid rounded-md shadow-md">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <Image src={BitcoinLogo} alt="Arrow Icon" width={80} height={80} />
          <div className="flex flex-col justify-between gap-3 ml-4">
            <p className="text-2xl font-bold">{formattedHashId}</p>
            <div>
              <p>Bitcoin Address</p>
              <p className="text-[#C9C9C9] text-sm">{address}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-2xl font-bold">Trust Score</p>
          <div
            className={`py-3 mx-8 border rounded-full flex flex-col items-center ${
              trust_score >= 50 ? "border-[#61DE70]" : "border-[#F80F0F]"
            } border-4`}
          >
            <p
              className={` font-bold text-3xl ${
                trust_score >= 50 ? "text-[#61DE70]" : "text-[#F80F0F]"
              } `}
            >
              {trust_score}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressProfile;
