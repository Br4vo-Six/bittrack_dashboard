import React from "react";

type AddressInformationProps = {
  bitcoin_balance: number;
  total_received: number;
  total_sent: number;
  transaction_count: number;
};

const AddressInformation: React.FC<AddressInformationProps> = ({
  bitcoin_balance,
  total_received,
  total_sent,
  transaction_count,
}) => {
  return (
    <div>
      <h2 className="mb-4 text-3xl font-bold text-white">Information</h2>
      <div className="grid grid-cols-4 gap-6 p-4 mb-6 text-white border border-gray-600 border-solid shadow-md">
        <div className="flex flex-col items-center gap-2">
          <p className="items-center text-xl font-bold">Bitcoin Balance</p>
          <p className="text-2xl font-bold  text-[#FFA600]">
            {bitcoin_balance} BTC
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-xl font-bold">Total Received</p>
          <p className="text-2xl font-bold text-[#FFA600]">
            {total_received} BTC
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-xl font-bold">Total Sent</p>
          <p className="text-2xl font-bold text-[#FFA600]">{total_sent} BTC</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-xl font-bold">Transactions</p>
          <p className="text-2xl font-bold text-[#FFA600]">
            {transaction_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddressInformation;
