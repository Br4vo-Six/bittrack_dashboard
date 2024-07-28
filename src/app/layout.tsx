"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import React, { ReactNode } from "react";
import Image from "next/image";
import OverviewIcon from "@icons/Squares.svg";
import AnalyticsIcon from "@icons/Watch List Icon.svg";
import PerformanceIcon from "@icons/Performance Icon.svg";
import SettingsIcon from "@icons/Settings.svg";
import LogOutIcon from "@icons/LogOut Icon.svg";
import BitTrackLogo from "@icons/BitTrack Logo.png";
import ProfileIcon from "@icons/Profile User.svg";

import { usePathname } from "next/navigation";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
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
                  <Link
                    href="/"
                    className={`${
                      pathname === "/" ? "text-[#0DA6C2]" : "text-white"
                    } flex items-center p-2 text-base font-medium rounded-lg hover:bg-gray-700 hover:text-white`}
                  >
                    <Image
                      src={OverviewIcon}
                      alt="Overview"
                      width={24}
                      height={24}
                    />
                    <span className="ml-3">Overview</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/watchlist"
                    className={`${
                      pathname.includes("watchlist")
                        ? "text-[#0DA6C2]"
                        : "text-white"
                    } text-[#0DA6C2] flex items-center p-2 text-base font-medium  rounded-lg hover:bg-gray-700 hover:text-white`}
                  >
                    <Image
                      src={AnalyticsIcon}
                      alt="Analytics"
                      width={24}
                      height={24}
                    />
                    <span className="ml-3">Watch List</span>
                  </Link>
                </li>
                <li>
                  <a
                    href="/performance"
                    className={`${
                      pathname === "/performance"
                        ? "text-[#0DA6C2]"
                        : "text-white"
                    } flex items-center p-2 text-base font-medium rounded-lg hover:bg-gray-700 hover:text-white`}
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
                    href="/settings"
                    className={`${
                      pathname === "/settings" ? "text-[#0DA6C2]" : "text-white"
                    } flex items-center p-2 text-base font-medium rounded-lg hover:bg-gray-700 hover:text-white`}
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

          <main className="flex-1 bg-[#19173D] overflow-auto">{children}</main>
        </section>
      </body>
    </html>
  );
}
