// components/BannerPageTool.tsx

"use client";

import React from "react";
import { BannerUpIcon,BannerDownIcon, BannerDuplicateIcon, BannerDeleteIcon, BannerAddSlideIcon,} from "@/lib/icon/icons";
export default function BannerPageTool() {
  return (
    <div className="w-full flex items-center justify-between p-1 mt-2">

      {/* Left */}
      <div className="text-black text-[14px] font-semibold kd-font-jakarta">
        Page 1
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-4 text-[#8b8b8b]">
        
        {/* Up */}
        <button className="hover:text-[var(--kd-text-tertiary)] transition">
          <BannerUpIcon />
        </button>

        {/* Down */}
        <button className="hover:text-[var(--kd-text-tertiary)] transition">
          <BannerDownIcon />
        </button>

        {/* Duplicate */}
        <button className="hover:text-[var(--kd-text-tertiary)] transition">
            <BannerDuplicateIcon />
        </button>

        {/* Delete */}
        <button className="hover:text-[var(--kd-text-tertiary)] transition">
            <BannerDeleteIcon />
        </button>

         {/* Add Slide */}
        <button className="hover:text-[var(--kd-text-tertiary)] transition">
            <BannerAddSlideIcon />
        </button>
      </div>
    </div>
  );
}