"use client";

import React, { useMemo, useState } from "react";
import { MinusIcon, PageIcon, PlusIcon } from "@/lib/icon/icons";

const MIN_ZOOM = 10;
const MAX_ZOOM = 200;
const ZOOM_STEP = 10;
const TOTAL_PAGES = 17;

export default function EditorFooter() {
  const [zoom, setZoom] = useState(50);
  const [page, setPage] = useState("01");

  // Zoom percentage for slider background
  const zoomProgress = useMemo(() => {
    return ((zoom - MIN_ZOOM) / (MAX_ZOOM - MIN_ZOOM)) * 100;
  }, [zoom]);

  // Generate pages dynamically
  const pages = Array.from({ length: TOTAL_PAGES }, (_, index) =>
    String(index + 1).padStart(2, "0")
  );

  // Zoom Handlers
  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + ZOOM_STEP, MAX_ZOOM));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - ZOOM_STEP, MIN_ZOOM));
  };

  return (
    <div className="flex items-center justify-between w-full h-[35px] px-4 bg-[#f3f4f8]">     
      <div className="flex items-center gap-2">
        {/* Minus Button */}
        <button onClick={handleZoomOut} className="flex items-center justify-center w-6 h-6">
          <MinusIcon />
        </button>

        {/* Zoom Slider */}
        <input type="range" min={MIN_ZOOM} max={MAX_ZOOM} value={zoom} onChange={(e) => setZoom(Number(e.target.value))} 
           className="kd-range-slider" style={{ background: `linear-gradient(to right, var(--kd-bg-secondary) 0%, var(--kd-bg-secondary) ${zoomProgress}%, #D1D5DB ${zoomProgress}%, #D1D5DB 100%)`, }} />
        {/* Plus Button */}
        <button onClick={handleZoomIn} className="flex items-center justify-center w-6 h-6">
          <PlusIcon />
        </button>

        {/* Zoom Value */}
        <span className="w-10 text-[10px] text-gray-800 kd-font-jakarta">
          {zoom}%
        </span>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center">

        {/* Page Icon */}
        <button className="p-2 rounded-md transition">
          <PageIcon />
        </button>

        {/* Page Selector */}
        <div className="flex items-center overflow-hidden bg-white rounded-md text-xs kd-font-jakarta">

          <span className="bg-[#e5e4e4] px-2 py-1 text-[10px] font-medium text-black">
            Page
          </span>

          <select
            value={page}
            onChange={(e) => setPage(e.target.value)}
            className="bg-transparent outline-none px-2 py-1 text-[10px] text-gray-800 cursor-pointer"
          >
            {pages.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Page Count */}
        <span className="px-1 text-[10px] text-gray-600 kd-font-jakarta">
          of {page}/{TOTAL_PAGES}
        </span>
      </div>
    </div>
  );
}