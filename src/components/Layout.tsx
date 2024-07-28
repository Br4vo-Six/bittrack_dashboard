import React, { ReactNode } from "react";
import Image from "next/image";
import OverviewIcon from "../../public/icons/Squares.svg";
import AnalyticsIcon from "../../public/icons/Watch List Icon.svg";
import PerformanceIcon from "../../public/icons/Performance Icon.svg";
import SettingsIcon from "../../public/icons/Settings.svg";
import LogOutIcon from "../../public/icons/LogOut Icon.svg";
import BitTrackLogo from "../../public/icons/BitTrack Logo.png";
import ProfileIcon from "../../public/icons/Profile User.svg";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section
      className="flex h-screen"
      style={{ backgroundColor: "#1E1E2E", color: "#FFFFFF" }}
    >
      <aside
        className="flex flex-col w-64 p-4"
        style={{ backgroundColor: "#262450" }}
      >
        <div className="py-4 text-center">
          <Image
            src={BitTrackLogo}
            alt="BitTrack Logo"
            width={80}
            height={80}
            className="mx-auto"
          />
          <div className="mt-2 text-3xl font-bold">BitTrack</div>
        </div>
        <div className="py-4 text-center">
          <Image
            src={ProfileIcon}
            alt="Profile User"
            width={50}
            height={50}
            className="mx-auto"
          />
          <div className="mt-2 text-xl">Seno Pamungkas</div>
        </div>
        <nav className="flex-grow mt-8">
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-medium rounded-lg hover:bg-gray-700 hover:text-white"
                style={{ color: "#0DA6C2" }}
              >
                <Image
                  src={OverviewIcon}
                  alt="Overview"
                  width={24}
                  height={24}
                />
                <span className="ml-3">Overview</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-medium text-white rounded-lg hover:bg-gray-700 hover:text-white"
              >
                <Image
                  src={AnalyticsIcon}
                  alt="Analytics"
                  width={24}
                  height={24}
                />
                <span className="ml-3">Watch List</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-medium text-white rounded-lg hover:bg-gray-700 hover:text-white"
              >
                <Image
                  src={PerformanceIcon}
                  alt="Performance"
                  width={24}
                  height={24}
                />
                <span className="ml-3">Performance</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-medium text-white rounded-lg hover:bg-gray-700 hover:text-white"
              >
                <Image
                  src={SettingsIcon}
                  alt="Settings"
                  width={24}
                  height={24}
                />
                <span className="ml-3">Settings</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="py-4">
          <a
            href="#"
            className="flex items-center p-2 text-base font-medium text-red-400 rounded-lg hover:bg-gray-700 hover:text-white"
          >
            <Image src={LogOutIcon} alt="Log Out" width={24} height={24} />
            <span className="ml-3">Log Out</span>
          </a>
        </div>
      </aside>
      <main>{children}</main>
      {/* <main className="flex-1 bg-[#19173D] overflow-auto">{children}</main> */}
    </section>
  );
}
