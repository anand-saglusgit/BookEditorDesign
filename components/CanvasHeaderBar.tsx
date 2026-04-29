"use client";
import React, { useState } from "react";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Type,
  Sparkles,
  ChevronDown,
} from "lucide-react";

export default function CanvasHeaderBar() {
  const [zoom, setZoom] = useState(75);

  return (
    <div className="w-full rounded-2xl h-12 flex items-center justify-between px-3 bg-white border-b border-gray-200 text-gray-700">

      {/* LEFT */}
      <div className="flex items-center gap-2">

        {/* Font Name */}
        <div className="px-3 py-1 bg-gray-100 rounded-md text-sm font-medium">
          Luckiest Guy
        </div>

        {/* Zoom */}
        <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-md text-sm">
          <button onClick={() => setZoom(z => z - 5)}>-</button>
          <span>{zoom}%</span>
          <button onClick={() => setZoom(z => z + 5)}>+</button>
        </div>

        {/* Font Size */}
        <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-md text-sm">
          199
          <ChevronDown size={14} />
        </div>

        {/* Color */}
        <button className="flex items-center gap-1 px-2 py-1 hover:bg-gray-100 rounded-md text-sm">
          <Type size={16} />
          <div className="w-4 h-1 bg-green-500 rounded" />
        </button>

        {/* Bold Italic Underline */}
        <button className="p-2 hover:bg-gray-100 rounded-md">
          <Bold size={16} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-md">
          <Italic size={16} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-md">
          <Underline size={16} />
        </button>

        {/* Divider */}
        <div className="w-px h-5 bg-gray-300 mx-1" />

        {/* Alignment */}
        <button className="p-2 hover:bg-gray-100 rounded-md">
          <AlignLeft size={16} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-md">
          <AlignCenter size={16} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-md">
          <AlignRight size={16} />
        </button>

        {/* Divider */}
        <div className="w-px h-5 bg-gray-300 mx-1" />

        {/* Effects */}
        <button className="flex items-center gap-1 px-3 py-1 hover:bg-gray-100 rounded-md text-sm">
          <Sparkles size={14} />
          Effects
        </button>

        {/* Animate */}
        <button className="px-3 py-1 hover:bg-gray-100 rounded-md text-sm">
          Animate
        </button>

        {/* Position */}
        <button className="px-3 py-1 hover:bg-gray-100 rounded-md text-sm">
          Position
        </button>
      </div>

      {/* RIGHT */}
      <div>
        <button className="p-2 hover:bg-gray-100 rounded-md">
          ⚙️
        </button>
      </div>
    </div>
  );
}