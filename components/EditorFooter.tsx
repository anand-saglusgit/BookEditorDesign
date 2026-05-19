"use client";
import React, { useState } from "react";

export default function EditorFooter() {
  const [zoom, setZoom] = useState(50);
  const [page, setPage] = useState("01");

  const totalPages = 17;

  return (
    <div className="w-full h-12 flex items-center justify-between px-4 bg-[#f3f4f8]">
      {/* LEFT: Zoom Slider */}
      <div className="flex items-center gap-2 w-auto mb-3">
       {/* Minus Button */}
        <button onClick={() => setZoom((prev) => Math.max(prev - 10, 10))} className="w-6 h-6 flex items-center justify-center">
          {/*<span className="bg-[#7c3aec] text-white rounded-full w-5 h-5 flex items-center justify-center leading-none text-sm">
            -
          </span>*/}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_730_5899)">
            <path d="M5.69167 0C2.55319 0 0 2.55319 0 5.69167C0 8.83015 2.55319 11.3833 5.69167 11.3833C8.83015 11.3833 11.3833 8.83015 11.3833 5.69167C11.3833 2.55319 8.83015 0 5.69167 0ZM5.69167 10.4347C3.07635 10.4347 0.948611 8.30699 0.948611 5.69167C0.948611 3.07635 3.07635 0.948611 5.69167 0.948611C8.30699 0.948611 10.4347 3.07635 10.4347 5.69167C10.4347 8.30699 8.30699 10.4347 5.69167 10.4347ZM8.06319 5.69167C8.06319 5.95348 7.85071 6.16597 7.58889 6.16597H3.79444C3.53263 6.16597 3.32014 5.95348 3.32014 5.69167C3.32014 5.42985 3.53263 5.21736 3.79444 5.21736H7.58889C7.85071 5.21736 8.06319 5.42985 8.06319 5.69167Z" fill="#616161"/>
            </g>
            <defs>
            <clipPath id="clip0_730_5899">
            <rect width="11.3833" height="11.3833" fill="white"/>
            </clipPath>
            </defs>
          </svg>
        </button>

        {/* Range Input */}
        {/*<input type="range" min="10" max="200" value={zoom} onChange={(e) => setZoom(Number(e.target.value))} className="w-full h-1 accent-purple-500 cursor-pointer"/> */}
        {/* Range Input */}
<input type="range" min="10" max="200" value={zoom} onChange={(e) => setZoom(Number(e.target.value))} className="kd-range-slider" 
style={{background: `linear-gradient(to right, #8051E0 0%, #8051E0 ${((zoom - 10) / (200 - 10)) * 100}%, #D1D5DB ${((zoom - 10) / (200 - 10)) * 100}%, #D1D5DB 100%)`,}}
/>

        {/* Plus Button */}
        <button onClick={() => setZoom((prev) => Math.min(prev + 10, 200))} className="w-6 h-6 flex items-center justify-center" >
          {/*<span className="bg-[#7c3aec] text-white rounded-full w-5 h-5 flex items-center justify-center leading-none text-sm">
            +
          </span>*/}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_730_5897)">
            <path d="M5.69167 0C4.56596 0 3.46554 0.33381 2.52955 0.959219C1.59356 1.58463 0.864044 2.47354 0.433255 3.51356C0.00246612 4.55358 -0.110248 5.69798 0.109366 6.80206C0.328981 7.90613 0.871059 8.92029 1.66705 9.71628C2.46305 10.5123 3.47721 11.0544 4.58128 11.274C5.68536 11.4936 6.82976 11.3809 7.86978 10.9501C8.90979 10.5193 9.79871 9.78978 10.4241 8.85379C11.0495 7.9178 11.3833 6.81737 11.3833 5.69167C11.3817 4.18264 10.7815 2.73589 9.71448 1.66885C8.64744 0.601812 7.20069 0.00163212 5.69167 0ZM5.69167 10.4347C4.75358 10.4347 3.83656 10.1565 3.05657 9.63537C2.27658 9.1142 1.66865 8.37344 1.30966 7.50676C0.950667 6.64008 0.856738 5.68641 1.03975 4.76634C1.22276 3.84628 1.67449 3.00115 2.33782 2.33782C3.00115 1.67449 3.84628 1.22276 4.76635 1.03975C5.68641 0.856736 6.64008 0.950664 7.50676 1.30965C8.37344 1.66865 9.1142 2.27658 9.63538 3.05657C10.1565 3.83656 10.4347 4.75358 10.4347 5.69167C10.4333 6.94918 9.93319 8.15479 9.04399 9.04399C8.15479 9.93319 6.94918 10.4333 5.69167 10.4347ZM8.0632 5.69167C8.0632 5.81746 8.01323 5.9381 7.92428 6.02705C7.83533 6.116 7.71469 6.16597 7.58889 6.16597H6.16598V7.58889C6.16598 7.71468 6.116 7.83533 6.02705 7.92427C5.9381 8.01322 5.81746 8.0632 5.69167 8.0632C5.56588 8.0632 5.44523 8.01322 5.35629 7.92427C5.26734 7.83533 5.21736 7.71468 5.21736 7.58889V6.16597H3.79445C3.66865 6.16597 3.54801 6.116 3.45906 6.02705C3.37011 5.9381 3.32014 5.81746 3.32014 5.69167C3.32014 5.56587 3.37011 5.44523 3.45906 5.35628C3.54801 5.26733 3.66865 5.21736 3.79445 5.21736H5.21736V3.79444C5.21736 3.66865 5.26734 3.54801 5.35629 3.45906C5.44523 3.37011 5.56588 3.32014 5.69167 3.32014C5.81746 3.32014 5.9381 3.37011 6.02705 3.45906C6.116 3.54801 6.16598 3.66865 6.16598 3.79444V5.21736H7.58889C7.71469 5.21736 7.83533 5.26733 7.92428 5.35628C8.01323 5.44523 8.0632 5.56587 8.0632 5.69167Z" fill="#8052E0"/>
            </g>
            <defs>
            <clipPath id="clip0_730_5897">
            <rect width="11.3833" height="11.3833" fill="white"/>
            </clipPath>
            </defs>
          </svg>
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