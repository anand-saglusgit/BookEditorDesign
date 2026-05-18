"use client";
import React, { useState } from "react";

export default function EditorFooter() {
  const [zoom, setZoom] = useState(50);
  const [page, setPage] = useState("01");

  const totalPages = 17;

  return (
    <div className="w-full h-12 flex items-center justify-between px-4 bg-[#f3f4f8]">
      {/* LEFT: Zoom Slider */}
      <div className="flex items-center gap-2 w-auto border border-[#e3e3e3] rounded-2xl mb-3">
       {/* Minus Button */}
        <button onClick={() => setZoom((prev) => Math.max(prev - 10, 10))} className="w-6 h-6 flex items-center justify-center">
          <span className="bg-[#7c3aec] text-white rounded-full w-5 h-5 flex items-center justify-center leading-none text-sm">
            -
          </span>
        </button>

        {/* Range Input */}
        <input type="range" min="10" max="200" value={zoom} onChange={(e) => setZoom(Number(e.target.value))} className="w-full h-1 accent-purple-500 cursor-pointer"/>

        {/* Plus Button */}
        <button onClick={() => setZoom((prev) => Math.min(prev + 10, 200))} className="w-6 h-6 flex items-center justify-center" >
          <span className="bg-[#7c3aec] text-white rounded-full w-5 h-5 flex items-center justify-center leading-none text-sm">
            +
          </span>
        </button>
        {/* Zoom Percentage */}
        <span className="text-[10px] text-gray-800 w-10 kd-font-jakarta">{zoom}%</span>
      </div>

      {/* RIGHT: Page Controls */}
      <div className="flex items-center mb-3">
        {/* Grid Icon */}
        <button className="p-2 hover:bg-gray-200 rounded-md">
          <svg
            width="12"
            height="12"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.77778 20C6.77778 21.1046 5.88235 22 4.77778 22H2C0.895433 22 0 21.1046 0 20V13.5789C0 12.4744 0.89543 11.5789 2 11.5789H4.77778C5.88235 11.5789 6.77778 12.4744 6.77778 13.5789V20Z"
              fill="#8051E0"
              fillOpacity="0.8"
            />
            <path
              d="M22 20C22 21.1046 21.1046 22 20 22H11.2222C10.1177 22 9.22222 21.1046 9.22222 20V13.5789C9.22222 12.4744 10.1177 11.5789 11.2222 11.5789H20C21.1046 11.5789 22 12.4744 22 13.5789V20Z"
              fill="#8051E0"
              fillOpacity="0.8"
            />
            <path
              d="M13.4444 7.26316C13.4444 8.36773 12.549 9.26316 11.4444 9.26316H2C0.895429 9.26316 0 8.36773 0 7.26316V2C0 0.895431 0.895431 0 2 0H11.4444C12.549 0 13.4444 0.895431 13.4444 2V7.26316Z"
              fill="#8051E0"
              fillOpacity="0.8"
            />
            <path
              d="M22 7.26316C22 8.36773 21.1046 9.26316 20 9.26316H17.8889C16.7843 9.26316 15.8889 8.36773 15.8889 7.26316V2C15.8889 0.895431 16.7843 0 17.8889 0H20C21.1046 0 22 0.895431 22 2V7.26316Z"
              fill="#8051E0"
              fillOpacity="0.8"
            />
          </svg>
        </button>

        {/* Page Selector */}
        <div className="flex items-center text-xs bg-white rounded-md overflow-hidden kd-font-jakarta">
          {/* Page Label */}
          <span className="bg-[#e5e4e4] text-black p-1 font-medium text-[10px]">Page</span>
          {/* Select */}
          <select
            value={page}
            onChange={(e) => setPage(e.target.value)}
            className="bg-transparent outline-none text-gray-800 p-1 text-[10px]-500 kd-font-jakarta"
          >
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
          </select>
        </div>
        {/* Dynamic Page Count */}
        <span className="text-[10px] text-gray-600 px-1 kd-font-jakarta"> of {page}/{totalPages}</span>
      </div>
    </div>
  );
}