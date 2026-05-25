"use client";

import React, { useState } from "react";
import { CamelCaseIcon, GradBgIcon, ListItemsIcon, TextAlignmentIcon, TextBoldIcon, TextColorIcon, TextItalicIcon, TextLetterSpaceIcon, TextStrikeIcon, TextUnderlineIcon, TextUndrelineIcon,} from "@/lib/icon/icons";
export default function CanvasHeaderBar() {
  const [fontSize, setFontSize] = useState(16);
  const [showFonts, setShowFonts] = useState(false);
  const [selectedFont, setSelectedFont] = useState("Playpen Sans");
  const fonts = [ "Playpen Sans", "Poppins", "Inter", "Roboto", "Montserrat", "Open Sans",];
  const iconBtn = "h-7.5 w-7.5 flex items-center justify-center rounded-md border border-[#e8e8e8] hover:bg-[var(--kd-bg-secondary)] text-black hover:text-white transition-all duration-150";

  return (
    <div className="h-10 mt-4 flex items-center justify-between px-1 py-1 bg-white rounded-lg text-gray-700 shadow-[0px_2px_10px_4px_rgba(0,0,0,0.1)]" >
      
      {/* LEFT */}
      <div className="flex items-center gap-1">
        {/* Font Name */}
        <button type="button" className="px-4 py-1 border border-[#e8e8e8] rounded-md text-sm font-medium hover:text-white hover:bg-[var(--kd-bg-secondary)] transition-all duration-200 cursor-pointer">
          Playpen Sans
        </button>     
        {/* Font Size */}
        <div className="flex items-center gap-2 px-2 py-1 border border-[#e8e8e8] rounded-md text-sm">          
          <button type="button" onClick={() => setFontSize((f) => Math.max(8, f - 1)) } className="text-black hover:text-black">
            -
          </button>
          <span className="bg-[#e8e8e8] px-2 rounded text-black">
            {fontSize}
          </span>
          <button type="button" onClick={() => setFontSize((f) => Math.min(72, f + 1)) } className="text-black hover:text-black">
            +
          </button>
        </div>
        {/* Gradient Background */}
        <button type="button" className={iconBtn}><GradBgIcon /></button>

        {/* Text Color */}
        <button type="button" className={iconBtn}><TextColorIcon /></button>

        {/* Bold */}
        <button type="button" className={iconBtn} ><TextBoldIcon /></button>

        {/* Italic */}
        <button type="button" className={iconBtn}><TextItalicIcon /></button>

        {/* Underline */}
        <button type="button" className={iconBtn}><TextUnderlineIcon /></button>

        {/* Strike */}
        <button type="button" className={iconBtn}><TextStrikeIcon /></button>

        {/* Camel Case */}
        <button type="button" className={iconBtn}><CamelCaseIcon /></button>

        {/* Text Alignment */}
        <button type="button" className={iconBtn}><TextAlignmentIcon /></button>

        {/* List Items */}
        <button type="button" className={iconBtn}><ListItemsIcon /></button>

        {/* Letter Spacing */}
        <button type="button" className={iconBtn}><TextLetterSpaceIcon /></button>

        {/* Position */}
        <button type="button" className="px-3 py-1 text-sm rounded-md text-black hover:bg-[#8051E0] hover:text-white transition-all duration-200">
          <span style={{ fontFamily: selectedFont }}>Potion</span>
        </button>
      </div>
    </div>
  );
}