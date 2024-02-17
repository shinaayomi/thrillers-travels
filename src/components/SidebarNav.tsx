import React, { useState } from "react";
import ProfileImg from "../../public/images/Profile.png";
import Image from "next/image";
import { RxHome } from "react-icons/rx";
import { PiAirplaneTiltLight } from "react-icons/pi";
import { LuWallet } from "react-icons/lu";
import { VscRepoClone } from "react-icons/vsc";
import { HiOutlineChartPie } from "react-icons/hi";
import { TbSettings } from "react-icons/tb";
import { Avatar } from "antd";

export default function SidebarNav() {
  const [activeBtn, setActiveBtn] = useState("DASHBOARD");
  return (
    <aside className="w-[280px] min-h-screen flex flex-col overflow-x-hidden rounded-r-[40px]">
      <div className="bg-primary text-center py-10">
        <div
          className="w-fit h-fit rounded-full p-1 mx-auto"
          style={{
            background: "conic-gradient(var(--btn-color), rgba(0,0,0,0.05))",
          }}
        >
          <Image
            src={ProfileImg}
            alt="User"
            className="rounded-full"
            width={100}
            height={100}
            priority
          />
        </div>
        <h4 className="text-xl text-white font-semibold">ALEX JOHNSON</h4>
        <p className="text-white text-xs">alex.johnson@gmail.com</p>
      </div>
      <div className="flex-1 bg-secondary py-5">
        <div className="grid pl-3">
          {[
            {
              title: "DASHBOARD",
              icon: <RxHome className="text-gold text-2xl" />,
            },
            {
              title: "FLIGHTS",
              icon: <PiAirplaneTiltLight className="text-gold text-2xl" />,
            },
            {
              title: "WALLET",
              icon: <LuWallet className="text-gold text-2xl" />,
            },
            {
              title: "REPORTS",
              icon: <VscRepoClone className="text-gold text-2xl" />,
            },
            {
              title: "STATISTICS",
              icon: <HiOutlineChartPie className="text-gold text-2xl" />,
            },
            {
              title: "SETTINGS",
              icon: <TbSettings className="text-gold text-2xl" />,
            },
          ].map((nav, index) => (
            <button
              key={index}
              className={`flex items-center gap-4 px-4 py-4 rounded-l-[40px] ${
                activeBtn === nav.title
                  ? "bg-success relative text-primary before:w-[48px] before:content-[''] before:h-[48px] before:absolute before:-right-[15px] before:-top-[33px] before:bg-transparent before:rounded-br-[68px] before:border-b-[15px] before:border-r-[15px] before:border-success after:w-[48px] after:content-[''] after:h-[48px] after:absolute after:-right-[15px] after:-bottom-[33px] after:bg-secondary after:rounded-tr-[68px] after:border-t-[15px] after:border-r-[15px] after:border-success"
                  : "text-white"
              }`}
              onClick={() => setActiveBtn(nav.title)}
            >
              {nav.icon} {nav.title}
            </button>
          ))}
        </div>
        <div className="px-7 mt-6">
          <p className="text-gold text-sm">ACTIVE USERS</p>
          <div className="flex items-center my-5">
            <Image
              src={ProfileImg}
              alt="User"
              className="rounded-full"
              width={40}
              height={40}
              priority
            />
            <Image
              src={ProfileImg}
              alt="User"
              className="rounded-full -ml-4 border-2 border-primary"
              width={40}
              height={40}
              priority
            />
            <Image
              src={ProfileImg}
              alt="User"
              className="rounded-full -ml-4 border-2 border-primary"
              width={40}
              height={40}
              priority
            />
            <Image
              src={ProfileImg}
              alt="User"
              className="rounded-full -ml-4 border-2 border-primary"
              width={40}
              height={40}
              priority
            />
            <Avatar
              size={40}
              className="bg-gold -ml-4 border-2 border-primary"
              style={{ fontSize: "12px" }}
            >
              +70
            </Avatar>
          </div>
          <Image
            src="/images/Map1.png"
            alt="map"
            className="w-full h-auto"
            width={200}
            height={80}
            priority
          />
        </div>
      </div>
    </aside>
  );
}
