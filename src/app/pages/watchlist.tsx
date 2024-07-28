import { useSearchParams } from "next/navigation";

const WatchList = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const time = searchParams.get("time");
  const input = searchParams.get("input");
  const output = searchParams.get("output");
  const amount = searchParams.get("amount");
  const flag = searchParams.get("flag");
  const hash = searchParams.get("hash");
  const numEdges = searchParams.get("numEdges");
  const totalAmount = searchParams.get("totalAmount");

  return (
    <div className="p-6">
      <div className="bg-[#262450] p-6 rounded-md shadow-md mb-6">
        <h1 className="mb-4 text-4xl font-bold text-white">
          {id ? "Transaction Details" : "Highlighted Transaction Details"}
        </h1>
        <div className="text-white">
          {id && (
            <>
              <p>ID: {id}</p>
              <p>Time: {time}</p>
              <p>Input: {input}</p>
              <p>Output: {output}</p>
              <p>Amount: {amount}</p>
              <p
                className={
                  flag === "Trusted" ? "text-green-500" : "text-yellow-500"
                }
              >
                Flag: {flag}
              </p>
            </>
          )}
          {hash && (
            <>
              <p>Hash: {hash}</p>
              <p>Num. Edges: {numEdges}</p>
              <p>Total Amount: {totalAmount}</p>
            </>
          )}
        </div>
        <div className="mt-6">
          <button
            className="p-2 text-white bg-blue-500 rounded-md"
            onClick={() => window.history.back()}
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatchList;
