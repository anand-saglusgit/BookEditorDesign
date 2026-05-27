"use client";

import React, { useState } from "react";
import {CamelCaseIcon, GradBgIcon, ListItemsIcon, TextAlignmentIcon, TextBoldIcon, TextColorIcon, TextItalicIcon, TextLetterSpaceIcon, TextStrikeIcon, TextUnderlineIcon,} from "@/lib/icon/icons";
export default function CanvasHeaderBar() {
  const [fontSize, setFontSize] = useState(16);      
  const iconBtn = "h-7.5 w-7.5 flex items-center justify-center rounded-md transition-all duration-150";

  return (
    <div className="kd-canheadbar-primary h-10 mt-4 flex items-center justify-between px-1 py-1 rounded-lg">
      
      {/* LEFT */}
      <div className="flex items-center gap-1">
        {/* Font Name */}
        <button type="button" className="px-4 py-1 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer">
          Playpen Sans
        </button>     
        {/* Font Size */}        
          <button type="button" className="flex items-center gap-2 px-3 py-1 rounded-md text-sm kd-bg-text-muted-none"
          >
            <span className="cursor-pointer" onClick={() => setFontSize((f) => Math.max(8, f - 1))}>
              -
            </span>

            <span className="px-2 "> {fontSize}</span>
            <span className="cursor-pointer" onClick={() => setFontSize((f) => Math.min(72, f + 1))}>
              +
            </span>
          </button>
        {/* Gradient Background */}
        <button type="button" className={`${iconBtn} cursor-pointer`}><GradBgIcon /></button>

        {/* Text Color */}
        <button type="button" className={`${iconBtn} cursor-pointer`}><TextColorIcon /></button>

        {/* Bold */}
        <button type="button" className={`${iconBtn} cursor-pointer`}><TextBoldIcon /></button>

        {/* Italic */}
        <button type="button" className={`${iconBtn} cursor-pointer`}><TextItalicIcon /></button>

        {/* Underline */}
        <button type="button" className={`${iconBtn} cursor-pointer`}><TextUnderlineIcon /></button>

        {/* Strike */}
        <button type="button" className={`${iconBtn} cursor-pointer`}><TextStrikeIcon /></button>

        {/* Camel Case */}
        <button type="button" className={`${iconBtn} cursor-pointer`}><CamelCaseIcon /></button>

        {/* Text Alignment */}
        <button type="button" className={`${iconBtn} cursor-pointer`}><TextAlignmentIcon /></button>

        {/* List Items */}
        <button type="button" className={`${iconBtn} cursor-pointer`}><ListItemsIcon /></button>

        {/* Letter Spacing */}
        <button type="button" className={`${iconBtn} cursor-pointer`}><TextLetterSpaceIcon /></button>

        {/* Position */}
        <button type="button" className="px-3 py-1 text-sm rounded-md transition-all duration-200 kd-border-muted-none cursor-pointer">
          <span>Potion</span>
        </button>
      </div>
    </div>
  );
}