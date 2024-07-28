import MonitoringOverview from "../components/MonitoringOverview";
import LatestTransactions from "../components/LatestTransactions";
import BitcoinLogo from "../../public/icons/BTC Icon.png"; // Ensure the path to your Bitcoin logo is correct
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BitTrack",
  description: "Track Illicit Crypto Transactions",
};

const Dashboard = () => {
  return (
    <div>
      <div className="bg-[#262450] p-4  shadow-md">
        <h1 className="text-4xl font-bold text-white ">Dashboard</h1>
      </div>
      <div className="p-5">
        <div className="flex items-center mb-5 ">
          <Image src={BitcoinLogo} alt="Bitcoin Logo" width={60} height={60} />
          <h2 className="ml-4 text-3xl font-bold text-white">
            Bitcoin{" "}
            <span className="text-[#FFA600] font-normal text-lg">BTC</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <MonitoringOverview />
          <LatestTransactions />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
