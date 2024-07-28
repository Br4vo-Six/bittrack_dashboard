import React from "react";
import HistoryBackIcon from "@icons/HistoryBackForthIcon.svg";
import HistoryForth from "@icons/HistoryForth.svg";
import Link from "next/link";
import WalletIcon from "@icons/wallet.svg";
import Image from "next/image";

type TransactionAddressProps = {
  input_address: Array<{
    address: string;
    trust_score: number;
    input_amount: string;
  }>;
  output_address: Array<{
    address: string;
    trust_score: number;
    output_amount: string;
  }>;
};

type TransactionAddressRowProps = {
  index: number;
  address: string;
  trust_score: number;
  amount: string;
  input: boolean;
};

const TransactionAddressRow: React.FC<TransactionAddressRowProps> = ({
  index,
  address,
  trust_score,
  amount,
  input,
}) => {
  const formattedAddress = `${address.slice(0, 4)}-${address.slice(-4)}`;

  return (
    <div className="flex items-center mb-2">
      {input && (
        <div className="mr-5 cursor-pointer">
          <Link href={`/watchlist/address/${address}`}>
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
              trust_score >= 50 ? "text-[#61DE70]" : "text-[#F80F0F]"
            }`}
          >
            {formattedAddress}
          </p>
          <p className=" text-[#FFA600] font-bold">{amount}</p>
        </div>
        <div
          className={`flex flex-col items-center p-2 border rounded-full ${
            trust_score >= 50 ? "border-[#61DE70]" : "border-[#F80F0F]"
          } border-2`}
        >
          <p
            className={` font-bold ${
              trust_score >= 50 ? "text-[#61DE70]" : "text-[#F80F0F]"
            } `}
          >
            {trust_score}
          </p>
        </div>
      </div>
      {!input && (
        <div className="cursor-pointer ">
          <Link href={`/watchlist/address/${address}`}>
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

const TransactionAddress: React.FC<TransactionAddressProps> = ({
  input_address,
  output_address,
}) => {
  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-3xl font-bold text-white ">Address</h2>
        <Image
          src={WalletIcon}
          alt="Transaction History Icon Logo"
          width={30}
          height={30}
        />
      </div>
      <div className="grid grid-cols-2 gap-6 p-4 mb-6 text-white border border-gray-600 border-solid shadow-md">
        <div className="flex flex-col gap-5">
          <h3 className="text-xl font-bold">Input Address</h3>
          {input_address.map((tx, idx) => (
            <TransactionAddressRow
              key={idx}
              index={idx + 1}
              address={tx.address}
              amount={tx.input_amount}
              trust_score={tx.trust_score}
              input={true}
            />
          ))}
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-xl font-bold">Output Address</h3>
          {output_address.map((tx, idx) => (
            <TransactionAddressRow
              key={idx}
              index={idx + 1}
              address={tx.address}
              amount={tx.output_amount}
              trust_score={tx.trust_score}
              input={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionAddress;
