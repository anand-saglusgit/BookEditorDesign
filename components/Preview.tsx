"use client";
import React, { useState } from "react";

const LAYERS = [
  "Text",
  "Shape 1",
  "Shape 2",
  "Group 1",
  "Shape 1",
  "Text",
  "Shape 3",
  "Group 1",
];

export default function Preview() {
  const [activePage, setActivePage] = useState(0);
  const [tab, setTab] = useState("layers"); // 👈 NEW STATE

  return (
    <div className="h-full w-full flex flex-col bg-[#fcfcfc] border-l border-[#f0f0f0]">    

      {/* 🔥 TABS */}
<div className="p-2 border-b border-white/10">
  <div className="flex bg-[#ECECEC] rounded-[10px] overflow-hidden">

    {/* Pages Tab */}
    <button
      onClick={() => setTab("pages")}
      className={`flex-1 flex items-center justify-center text-[11px] py-2 transition-all duration-200 ${
        tab === "pages"
          ? "bg-[#8051E0] text-white shadow-sm"
          : "bg-transparent text-gray-600 hover:bg-white"
      }`}
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.9065 0C10.6929 0 10.5194 0.173222 10.5194 0.387089C10.5194 0.600714 10.6929 0.774178 10.9065 0.774178C11.0826 0.774178 11.2258 0.917401 11.2258 1.09328V9.92327C11.2258 10.0992 11.0826 10.2423 10.9065 10.2423C10.6929 10.2423 10.5194 10.4158 10.5194 10.6294C10.5194 10.8433 10.6929 11.0165 10.9065 11.0165C11.5094 11.0165 12 10.5261 12 9.92327V1.09328C12 0.490393 11.5094 0 10.9065 0ZM9.11257 0C8.89894 0 8.72548 0.173222 8.72548 0.387089C8.72548 0.600714 8.89894 0.774178 9.11257 0.774178C9.28869 0.774178 9.43191 0.917401 9.43191 1.09328V9.92327C9.43191 10.0992 9.28869 10.2423 9.11257 10.2423C8.89894 10.2423 8.72548 10.4158 8.72548 10.6294C8.72548 10.8433 8.89894 11.0165 9.11257 11.0165C9.7157 11.0165 10.2061 10.5261 10.2061 9.92327V1.09328C10.2061 0.490393 9.7157 0 9.11257 0ZM8.41218 1.09328V9.92327C8.41218 10.5262 7.92178 11.0165 7.31865 11.0165H3.69598C3.48187 11.0165 3.30865 10.8428 3.30889 10.6287C3.30986 10.2833 3.30841 9.59497 3.30841 8.19346C3.30841 7.92565 3.09115 7.70863 2.82358 7.70863C1.42207 7.70863 0.733782 7.70716 0.388063 7.70813C0.173955 7.70839 0.000248399 7.53517 0.000248399 7.32104V1.09328C0.000248399 0.489426 0.489674 0 1.09353 0H7.31865C7.92178 0 8.41218 0.490393 8.41218 1.09328ZM2.93777 8.46636V10.6295C2.93777 10.9676 2.52915 11.1498 2.27682 10.9033C-0.0597504 8.5665 0.0383525 8.70161 0.00750632 8.54088C-0.0397669 8.30441 0.142141 8.07927 0.387337 8.07927H2.55068C2.76431 8.07927 2.93777 8.25249 2.93777 8.46636Z"
          fill="currentColor"
          fillOpacity="0.9"
        />
      </svg> Pages
    </button>

    {/* Layers Tab */}
    <button
      onClick={() => setTab("layers")}
      className={`flex-1 flex items-center justify-center text-[11px] py-2 transition-all duration-200 ${
        tab === "layers"
          ? "bg-[#8051E0] text-white shadow-sm"
          : "bg-transparent text-gray-600 hover:bg-white"
      }`}
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_69_3221)">
          <path
            d="M11.8349 3.59237L6.18642 0.0533088C6.07245 -0.0181053 5.92755 -0.0181053 5.81358 0.0533088L0.165141 3.59237C0.0624844 3.65657 0 3.76918 0 3.89038C0 4.01157 0.0624844 4.12419 0.165141 4.18839L5.81358 7.70401C5.87058 7.73971 5.93545 7.75757 6 7.75757C6.06455 7.75757 6.12942 7.73971 6.18642 7.70401L11.8349 4.18839C11.9375 4.12419 12 4.01157 12 3.89038C12 3.76918 11.9375 3.65657 11.8349 3.59237Z"
            fill="currentColor"
          />
          <path
            d="M11.8349 7.81137L11.2875 7.46925L6.18642 10.6428C6.12942 10.6785 6.06455 10.6963 6 10.6963C5.93545 10.6963 5.87058 10.6785 5.81358 10.6428L0.712523 7.46925L0.165141 7.81137C0.0624844 7.87557 0 7.98818 0 8.10938C0 8.23057 0.0624844 8.34319 0.165141 8.40739L5.81358 11.9464C5.87058 11.9821 5.93545 12 6 12C6.06455 12 6.12942 11.9821 6.18642 11.9464L11.8349 8.40739C11.9375 8.34319 12 8.23057 12 8.10938C12 7.98818 11.9375 7.87557 11.8349 7.81137Z"
            fill="currentColor"
          />
          <path
            d="M11.8349 5.702L11.2875 5.35988L6.18642 8.53339C6.12942 8.56908 6.06455 8.58694 6 8.58694C5.93545 8.58694 5.87058 8.56908 5.81358 8.53339L0.712523 5.35988L0.165141 5.702C0.0624844 5.76619 0 5.87881 0 6C0 6.1212 0.0624844 6.23382 0.165141 6.29801L5.81358 9.81364C5.87058 9.84933 5.93545 9.86719 6 9.86719C6.06455 9.86719 6.12942 9.84933 6.18642 9.81364L11.8349 6.29801C11.9375 6.23382 12 6.1212 12 6C12 5.87881 11.9375 5.76619 11.8349 5.702Z"
            fill="currentColor"
          />
        </g>

        <defs>
          <clipPath id="clip0_69_3221">
            <rect width="12" height="12" fill="white" />
          </clipPath>
        </defs>
      </svg> Layers
    </button>
  </div>
</div>

      {/* 🔥 CONTENT */}
      <div className="flex-1 overflow-y-auto p-2">

        {/* Layers View */}
        {tab === "layers" && (
          <div className="flex flex-col gap-2">

            {LAYERS.map((item, i) => (
              <div
                key={i}
                className="flex text-right items-center justify-between bg-[#f8f8f8] hover:bg-[#f4f4f4] rounded-md cursor-pointer border border-[#0000001A] overflow-hidden"
              >
                <div className="flex items-center justify-between w-full">
                  <span className="bg-[#8051E0] text-xs p-3 items-center text-white">
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="0.948611" cy="0.948611" r="0.948611" fill="white" fill-opacity="0.8"/>
                    <circle cx="4.7428" cy="0.948611" r="0.948611" fill="white" fill-opacity="0.8"/>
                    <circle cx="0.948611" cy="4.74317" r="0.948611" fill="white" fill-opacity="0.8"/>
                    <circle cx="4.7428" cy="4.74317" r="0.948611" fill="white" fill-opacity="0.8"/>
                    <circle cx="0.948611" cy="8.53739" r="0.948611" fill="white" fill-opacity="0.8"/>
                    <circle cx="4.7428" cy="8.53739" r="0.948611" fill="white" fill-opacity="0.8"/>
                    </svg>
                  </span>
                  <span className="text-[12px] text-gray-700 w-full text-right flex-1 pl-2 pr-2">
                    {item}
                  </span>
                </div>

                
              </div>
            ))}

          </div>
        )}

        {/* Pages View */}
        {tab === "pages" && (
          <div className="text-gray-400 text-[11px]">
            Pages content here...
          </div>
        )}

      </div>
    </div>
  );
}