import TransactionProfile from "../components/TransactionProfile";
import TransactionInformation from "../components/TransactionInformation";
import TransactionHistory from "../components/TransactionHistory";
import { TransactionDataProps, dummyData } from "../dummy/dummy_transactions";
import ErrorData from "../components/ErrorData";
import TransactionAddress from "../components/TransactionAddress";

const WatchListTransaction = async ({
  params,
}: {
  params: { hash_id: string };
}) => {
  const data: TransactionDataProps | undefined = dummyData.find(
    ({ hash_id }) => {
      return params.hash_id === hash_id;
    }
  );

  if (!data) return <ErrorData text="Error data not found" />;

  return (
    <div className="p-6">
      <div className="bg-[#19173D] p-6 rounded-md shadow-md mb-6 flex flex-col gap-5">
        <h1 className="mb-4 text-4xl font-bold text-white">
          Watch List (Transaction)
        </h1>
        <TransactionProfile
          hash_id={data.hash_id}
          time={data.time}
          trusted={data.trusted}
        />
        <TransactionInformation
          amount={data.amount}
          input={data.input_total}
          output={data.output_total}
          weight={data.weight}
        />
        <TransactionAddress
          input_address={data.input_address}
          output_address={data.output_address}
        />
        <TransactionHistory transactions={data.history} />
      </div>
    </div>
  );
};

export default WatchListTransaction;
