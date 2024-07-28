import React from "react";

type TransactionInformationProps = {
  amount: string;
  input: string;
  output: string;
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
      <h2 className="mb-4 text-2xl font-bold text-white">Information</h2>
      <div className="grid grid-cols-3 gap-6 p-4 mb-6 text-white border border-gray-600 border-solid shadow-md">
        <div>
          <p className="text-lg">Amount Total</p>
          <p className="text-2xl font-bold">{amount}</p>
        </div>
        <div>
          <p className="text-lg">Input Total</p>
          <p className="text-2xl font-bold">{input}</p>
        </div>
        <div>
          <p className="text-lg">Output Total</p>
          <p className="text-2xl font-bold">{output}</p>
        </div>
        <div>
          <p className="text-lg">Weight</p>
          <p className="text-2xl font-bold">{weight}</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionInformation;
