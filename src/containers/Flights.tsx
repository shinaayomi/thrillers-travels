import React, { useEffect, useState } from "react";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import { Button, Dropdown, Tooltip } from "antd";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaUser, FaStamp } from "react-icons/fa";
import type { MenuProps } from "antd";
import { FaAngleDown } from "react-icons/fa6";
import { EmirateLogo, LufthansaLogo, QatarLogo } from "@/constant/icons";
import Image from "next/image";

export default function Flights() {
  const [tripType, setTripType] = useState("ONE WAY");
  const [stopType, setStopType] = useState("NON STOP");
  const [showTooltiop, setShowTooltip] = useState(false);

  const items: MenuProps["items"] = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];

  useEffect(() => {
    setShowTooltip(true);
  }, []);

  return (
    <section>
      <header
        className="bg-white rounded-3xl p-8 grid grid-cols-9 gap-6"
        style={{ gridAutoRows: "1fr" }}
      >
        <div className="col-span-5 bg-success flex items-center justify-between rounded-[50px] py-3 px-6">
          <p className="flex items-center gap-2 text-primary text-sm font-semibold">
            <FaLocationDot />
            <span> NEW YORK (JFK)</span>
          </p>
          <Button
            type="primary"
            shape="circle"
            className="bg-primary shadow-none"
            icon={<HiOutlineSwitchHorizontal />}
          />
          <p className="flex items-center gap-2 text-primary text-sm font-semibold">
            <FaLocationDot />
            <span> MUMBAI (BOM)</span>
          </p>
        </div>
        <button className="flex items-center justify-center gap-4 bg-success text-primary text-sm font-semibold rounded-[50px] col-span-2 py-3 px-4">
          <MdOutlineCalendarMonth fontSize={18} /> <span>27 JULY 2019</span>
        </button>
        <button className="flex items-center justify-center gap-4 bg-success text-primary text-sm font-semibold rounded-[50px] col-span-2 py-3 px-4">
          <FaUser fontSize={18} /> <span>2 TRVELLERS</span>
        </button>

        <div className="col-span-5 bg-success grid grid-cols-3 rounded-[50px] p-1">
          {["ONE WAY", "ROUND TRIP", "MULTI CITY"].map((trip, index) => (
            <button
              key={index}
              onClick={() => setTripType(trip)}
              className={`rounded-[50px] text-sm font-semibold ${
                tripType === trip ? "bg-primary text-white" : "text-primary"
              }`}
            >
              {trip}
            </button>
          ))}
        </div>
        <button className="flex items-center justify-center gap-4 bg-success text-primary text-sm font-semibold rounded-[50px] col-span-2 py-3 px-4">
          <FaStamp fontSize={18} /> <span>FIRST CLASS</span>
        </button>
        <button className="bg-gold text-white text-sm font-semibold rounded-[50px] col-span-2 py-3 px-4">
          SEARCH
        </button>
      </header>

      <div className="flex items-center justify-between my-8">
        <h4 className="text-primary text-xl font-semibold">RESULT (25)</h4>
        <div className="flex items-center gap-4">
          <button className="w-28 h-10 bg-white text-primary text-sm font-semibold rounded-[50px]">
            FILTER
          </button>
          <Dropdown menu={{ items }} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()}>
              <span className="inline-flex items-center justify-center gap-2 w-48 h-10 bg-white text-primary text-sm font-semibold rounded-[50px]">
                <span>TICKET OF CLASS</span>
                <FaAngleDown />
              </span>
            </a>
          </Dropdown>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article className="col-span-2 bg-white rounded-3xl divide-y divide-dashed">
          {[
            { title: "EMIRATES", logo: <EmirateLogo />, price: "$1,572" },
            { title: "QATAR AIRWAYS", logo: <QatarLogo />, price: "$2,072" },
            { title: "LUFTHANSA", logo: <LufthansaLogo />, price: "$1,872" },
            { title: "EMIRATES", logo: <EmirateLogo />, price: "$1,572" },
          ].flatMap((company, index) => (
            <div
              key={index}
              className="flex relative py-8 px-8 before:content-[''] before:w-6 before:h-6 before:bg-success before:absolute before:-bottom-3 before:-left-3 before:rounded-full last:before:hidden after:content-[''] after:w-6 after:h-6 after:bg-success after:absolute after:-bottom-3 after:-right-3 after:rounded-full last:after:hidden"
            >
              <div className="w-36 self-center">{company.logo}</div>

              <div className="flex-1 flex justify-between">
                <div className="h-full flex flex-col justify-between">
                  <h4 className="text-primary text-lg">JFK</h4>
                  <p className="text-xs">13:00</p>
                </div>
                <div className="h-full flex flex-col justify-between">
                  <p className="text-primary text-[10px] font-semibold">
                    {company.title}
                  </p>
                  <p className="text-gold text-sm my-1">11H 20M</p>
                  <p className="text-sm text-primary">NON-STOP</p>
                </div>
                <div className="h-full flex flex-col justify-between">
                  <p className="text-primary text-lg">BOM</p>
                  <p className="text-primary text-sm">14:20</p>
                </div>
                <div className="h-full flex flex-col justify-between items-end">
                  <p className="text-primary text-sm font-semibold">
                    {company.price}
                  </p>
                  <button className="w-24 h-7 bg-gold text-white text-[10px] font-semibold rounded-2xl">
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </article>
        <article className="flex flex-col rounded-3xl">
          <div className="flex-1 bg-secondary py-6 px-8 rounded-t-3xl">
            <div className="flex items-center justify-between text-white text-sm">
              <p>FROM</p>
              <p>TO</p>
            </div>
            <div className="flex items-center justify-between text-white text-sm mt-1 mb-4">
              <p className="text-xl">JFK</p>
              <p className="text-sm">NON-STOP</p>
              <p className="text-xl">BOM</p>
            </div>
            <Image
              src="/images/Map2.png"
              className="w-full h-auto"
              alt="Map"
              width={300}
              height={300}
              priority
            />
          </div>
          <div className="bg-primary py-6 px-8 rounded-b-3xl">
            <div className="grid grid-cols-3">
              {["NON STOP", "ONE STOP", "MORE STOP"].flatMap((stop, index) => (
                <button
                  key={index}
                  className={`h-9 text-white text-xs font-medium ${
                    stopType === stop && "bg-gold rounded-[50px]"
                  }`}
                  onClick={() => setStopType(stop)}
                >
                  {stop}
                </button>
              ))}
            </div>
            <p className="text-xs text-white mt-5">PRICE</p>

            <div className="flex items-center mb-14">
              <div className="h-1 w-10 bg-[#5A7674]"></div>
              {showTooltiop == true && (
                <Tooltip
                  placement="bottom"
                  color="#c99c33"
                  overlayInnerStyle={{
                    width: "80px",
                    borderRadius: "30px",
                    fontSize: "12px",
                    textAlign: "center",
                  }}
                  title="$500"
                  // trigger="click"
                  defaultOpen
                >
                  <button className="w-3 h-3 bg-gold rounded-full"></button>
                </Tooltip>
              )}
              <div className="h-1 w-1/2 bg-[#5A7674]"></div>
              {showTooltiop == true && (
                <Tooltip
                  placement="bottom"
                  color="#c99c33"
                  overlayInnerStyle={{
                    width: "80px",
                    borderRadius: "30px",
                    fontSize: "12px",
                    textAlign: "center",
                  }}
                  title="$5200"
                  // trigger="click"
                  defaultOpen
                >
                  <button className="w-3 h-3 bg-gold rounded-full"></button>
                </Tooltip>
              )}
              <div className="h-1 flex-1 bg-[#5A7674]"></div>
            </div>
          </div>
        </article>
      </section>
    </section>
  );
}
