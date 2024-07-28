import React from "react";

type TransactionInformationProps = {
  amount: number;
  input: number;
  output: number;
  weight: number;
};

const TransactionInformation: React.FC<TransactionInformationProps> = ({
  amount,
  input,
  output,
  weight,
}) => {
  return (
    <div>
      <h2 className="mb-4 text-3xl font-bold text-white">Information</h2>
      <div className="grid grid-cols-4 gap-6 p-4 mb-6 text-white border border-gray-600 border-solid shadow-md">
        <div className="flex flex-col items-center gap-2">
          <p className="text-xl font-bold">Amount Total</p>
          <p className="text-2xl font-bold text-[#FFA600]">{amount} BTC</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-xl font-bold">Input Total</p>
          <p className="text-2xl font-bold text-[#FFA600]">{input} BTC</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-xl font-bold">Output Total</p>
          <p className="text-2xl font-bold text-[#FFA600]">{output} BTC</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-xl font-bold">Weight</p>
          <p className="text-2xl font-bold text-[#FFA600]">{weight}</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionInformation;
