import ErrorData from "../../transaction/components/ErrorData";
import {
  addressData,
  AddressDataProps,
} from "../../transaction/dummy/dummy_address";
import {
  dummyData,
  TransactionDataProps,
} from "../../transaction/dummy/dummy_transactions";
import AddressInformation from "../components/AddressInformation";
import AddressProfile from "../components/AddressProfile";
import AddressTransHistory from "../components/AddressTransHistory";

const WatchListAddress = async ({
  params,
}: {
  params: { address: string };
}) => {
  const AddressData: AddressDataProps | undefined = addressData.find(
    ({ address }) => {
      return params.address === address;
    }
  );

  if (!AddressData) return <ErrorData text="Error data not found" />;

  const TransactionData: TransactionDataProps | undefined = dummyData.find(
    ({ input_address }) => {
      return input_address.find(
        ({ address }) => AddressData.address === address
      );
    }
  );

  if (!TransactionData) return <ErrorData text="Error data not found" />;

  return (
    <div className="p-6">
      <div className="bg-[#19173D] p-6 rounded-md shadow-md mb-6 flex flex-col gap-5">
        <h1 className="mb-4 text-4xl font-bold text-white">
          Watch List (Address)
        </h1>
        <AddressProfile
          address={AddressData.address}
          trust_score={AddressData.trust_score}
        />
        <AddressInformation
          bitcoin_balance={AddressData.bitcoin_balance}
          total_received={AddressData.total_received}
          total_sent={AddressData.total_sent}
          transaction_count={AddressData.transaction_count}
        />
        <AddressTransHistory transactions={TransactionData.history} />
      </div>
    </div>
  );
};

export default WatchListAddress;
