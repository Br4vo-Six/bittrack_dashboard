"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import ArrowIcon from "@icons/Arrow_left.svg";
import BitcoinLogo from "@icons/BTC Icon.png"; // Ensure the path to your Bitcoin logo is correct
import TrustedIcon from "@icons/Checklist icon.svg";
import SuspiciousIcon from "@icons/Warning Icon.svg";

const WatchList = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const time = searchParams.get("time");
  const input = searchParams.get("input");
  const output = searchParams.get("output");
  const amount = searchParams.get("amount");
  const flag = searchParams.get("flag");

  return (
    <>
      <div className="p-6">
        <div className="bg-[#262450] p-6 rounded-md shadow-md mb-6">
          <h1 className="mb-4 text-4xl font-bold text-white">
            Watch List (Transaction)
          </h1>
          <div className="mb-6 text-white">
            <div className="flex items-center">
              <Image src={ArrowIcon} alt="Arrow Icon" width={40} height={40} />
              <div className="ml-4">
                <p className="text-xl font-bold">{id}</p>
                <p className="text-sm">{time}</p>
              </div>
              <div className="ml-auto">
                <p
                  className={`text-2xl font-bold ${
                    flag === "Trusted" ? "text-green-500" : "text-yellow-500"
                  }`}
                >
                  {flag}
                </p>
                <Image
                  src={flag === "Trusted" ? TrustedIcon : SuspiciousIcon}
                  alt="Flag Icon"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6 mb-6 text-white">
            <div>
              <p className="text-lg">Amount Total</p>
              <p className="text-2xl font-bold">{amount}</p>
            </div>
            <div>
              <p className="text-lg">Input</p>
              <p className="text-2xl font-bold">{input} BTC</p>
            </div>
            <div>
              <p className="text-lg">Output</p>
              <p className="text-2xl font-bold">{output} BTC</p>
            </div>
            <div>
              <p className="text-lg">Block</p>
              <p className="text-2xl font-bold">138</p>
            </div>
          </div>
          <div className="bg-[#19173D] p-6 rounded-md shadow-md">
            <h2 className="mb-4 text-2xl font-bold text-white">
              Transactions History
            </h2>
            <div className="bg-[#262450] p-4 rounded-md mb-4">
              <div className="flex items-center mb-2">
                <Image
                  src={BitcoinLogo}
                  alt="Bitcoin Logo"
                  width={24}
                  height={24}
                />
                <p className="ml-2 text-lg font-bold">ID: b30c-d3ae</p>
                <div className="ml-auto">
                  <p
                    className={`text-lg font-bold ${
                      flag === "Trusted" ? "text-green-500" : "text-yellow-500"
                    }`}
                  >
                    {flag}
                  </p>
                  <Image
                    src={flag === "Trusted" ? TrustedIcon : SuspiciousIcon}
                    alt="Flag Icon"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <p>From: 2 Previous Transactions</p>
                  <p>To: 2 Subsequent Transactions</p>
                </div>
                <div className="text-right">
                  <p>Amount: 0.00860900 BTC</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="mb-2 text-lg font-bold">From (Transaction)</p>
                <div className="bg-[#19173D] p-4 rounded-md mb-2">
                  <div className="flex items-center mb-2">
                    <p>1</p>
                    <p className="ml-2 text-yellow-400">3788-fc7b</p>
                    <p className="ml-auto">0.00560900 BTC</p>
                    <Image
                      src={TrustedIcon}
                      alt="Trusted Icon"
                      width={16}
                      height={16}
                    />
                  </div>
                  <div className="flex items-center">
                    <p>2</p>
                    <p className="ml-2 text-yellow-400">3788-fc7b</p>
                    <p className="ml-auto">0.00860900 BTC</p>
                    <Image
                      src={TrustedIcon}
                      alt="Trusted Icon"
                      width={16}
                      height={16}
                    />
                  </div>
                </div>
                <p className="mb-2 text-lg font-bold">To (Transaction)</p>
                <div className="bg-[#19173D] p-4 rounded-md">
                  <div className="flex items-center mb-2">
                    <p>1</p>
                    <p className="ml-2 text-yellow-400">3788-fc7b</p>
                    <p className="ml-auto">0.00560900 BTC</p>
                    <Image
                      src={TrustedIcon}
                      alt="Trusted Icon"
                      width={16}
                      height={16}
                    />
                  </div>
                  <div className="flex items-center mb-2">
                    <p>2</p>
                    <p className="ml-2 text-yellow-400">3788-fc7b</p>
                    <p className="ml-auto">0.00560900 BTC</p>
                    <Image
                      src={TrustedIcon}
                      alt="Trusted Icon"
                      width={16}
                      height={16}
                    />
                  </div>
                  <div className="flex items-center">
                    <p>3</p>
                    <p className="ml-2 text-yellow-400">3788-fc7b</p>
                    <p className="ml-auto">0.00560900 BTC</p>
                    <Image
                      src={TrustedIcon}
                      alt="Trusted Icon"
                      width={16}
                      height={16}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#262450] p-4 rounded-md">
              <div className="flex items-center mb-2">
                <Image
                  src={BitcoinLogo}
                  alt="Bitcoin Logo"
                  width={24}
                  height={24}
                />
                <p className="ml-2 text-lg font-bold">ID: b30c-d3ae</p>
                <div className="ml-auto">
                  <p
                    className={`text-lg font-bold ${
                      flag === "Trusted" ? "text-green-500" : "text-yellow-500"
                    }`}
                  >
                    {flag}
                  </p>
                  <Image
                    src={flag === "Trusted" ? TrustedIcon : SuspiciousIcon}
                    alt="Flag Icon"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <p>From: 1 Previous Transaction</p>
                  <p>To: 3 Subsequent Transactions</p>
                </div>
                <div className="text-right">
                  <p>Amount: 0.00040210 BTC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchList;
