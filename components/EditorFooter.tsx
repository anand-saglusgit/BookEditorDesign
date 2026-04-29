"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, LayoutGrid } from "lucide-react";

export default function EditorFooter() {
  const [zoom, setZoom] = useState(50);

  return (
    <div className="w-full h-12 flex items-center justify-between px-4 bg-[#f5f6f7] border-t border-gray-200">

      {/* LEFT: Zoom Slider */}
      <div className="flex items-center gap-3 w-[220px]">
        <input
          type="range"
          min="10"
          max="200"
          value={zoom}
          onChange={(e) => setZoom(Number(e.target.value))}
          className="w-full h-1 accent-purple-500 cursor-pointer"
        />
        <span className="text-xs text-gray-600 w-10">{zoom}%</span>
      </div>

      {/* CENTER: Canvas Size */}
      <div className="text-xs px-2 py-1 bg-blue-500 text-white rounded-md font-medium">
        1460 × 50
      </div>

      {/* RIGHT: Page Controls */}
      <div className="flex items-center gap-3">

        {/* Grid Icon */}
        <button className="p-2 hover:bg-gray-200 rounded-md">
          <LayoutGrid size={16} className="text-purple-500" />
        </button>

        {/* Page Selector */}
        <div className="flex items-center gap-2 text-xs text-gray-600 bg-white border border-gray-200 px-2 py-1 rounded-md">
          <span>Page</span>
          <select className="bg-transparent outline-none text-gray-800">
            <option>02</option>
          </select>
        </div>

        {/* Page Count */}
        <span className="text-xs text-gray-500">of 17</span>

        {/* Navigation */}
        <div className="flex items-center">
          <button className="p-1 hover:bg-gray-200 rounded">
            <ChevronLeft size={16} />
          </button>
          <button className="p-1 hover:bg-gray-200 rounded">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}