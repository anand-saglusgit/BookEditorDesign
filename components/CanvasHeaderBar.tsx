"use client";

import React, { useState } from "react";
import {KdGradBgIcon, KdListItemsIcon, KdListDigitIcon, KdTextAlignmentIcon, KdTextBoldIcon, KdTextColorIcon, KdTextItalicIcon, KdTextLetterSpaceIcon, KdTextStrikeIcon, KdCamelCaseIcon, KdTextSubScriptIcon, KdTextSuperScriptIcon, KdTextUnderlineIcon, KdLinkAddIcon, KdMagicWandIcon} from "@/lib/icon/icons";
export default function CanvasHeaderBar() {
  const [fontSize, setFontSize] = useState(16);      
  const iconBtn = "h-7.5 w-7.5 flex items-center justify-center rounded-md transition-all duration-150";

  return (
    <div className="kd-canvasheader-container h-10 mt-4 flex items-center justify-between px-1 py-1 rounded-lg">
      
      {/* LEFT */}
      <div className="flex items-center gap-1">
        {/* Font Name */}
        <button type="button" className="kd-canvasheader-fontfamily-button px-4 py-1 text-sm font-medium rounded-md cursor-pointer transition-all duration-200">
          Playpen Sans
        </button>     
        {/* Font Size */}        
          <button type="button" className="kd-canvasheader-fontsize-button flex items-center gap-2 px-3 py-1 rounded-md text-sm"
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
        <button type="button" className={`${iconBtn} cursor-pointer kd-canvasheader-button-all`}><KdGradBgIcon /></button>

        {/* Text Color */}
        <button type="button" className={`${iconBtn} cursor-pointer kd-canvasheader-button-all`}><KdTextColorIcon /></button>

        {/* Bold */}
        <button type="button" className={`${iconBtn} cursor-pointer kd-canvasheader-button-all`}><KdTextBoldIcon /></button>

        {/* Italic */}
        <button type="button" className={`${iconBtn} cursor-pointer kd-canvasheader-button-all`}><KdTextItalicIcon /></button>

        {/* Underline */}
        <button type="button" className={`${iconBtn} cursor-pointer kd-canvasheader-button-all`}><KdTextUnderlineIcon /></button>

        {/* Strike */}
        <button type="button" className={`${iconBtn} cursor-pointer kd-canvasheader-button-all`}><KdTextStrikeIcon /></button>

        {/* Camel Case */}
        <button type="button" className={`${iconBtn} cursor-pointer kd-canvasheader-button-all`}><KdCamelCaseIcon /></button> 
        
        {/* Text SubScript*/}
        <button type="button" className={`${iconBtn} cursor-pointer kd-canvasheader-button-all`}><KdTextSubScriptIcon /></button>

        {/* Text SuperScript*/}
        <button type="button" className={`${iconBtn} cursor-pointer kd-canvasheader-button-all`}><KdTextSuperScriptIcon /></button> 

        {/* Text Alignment */}
        <button type="button" className={`${iconBtn} cursor-pointer kd-canvasheader-button-all`}><KdTextAlignmentIcon /></button>

        {/* List Items */}
        <button type="button" className={`${iconBtn} cursor-pointer kd-canvasheader-button-all`}><KdListItemsIcon /></button>

        {/* List Digit Icons */}
        <button type="button" className={`${iconBtn} cursor-pointer kd-canvasheader-button-all`}><KdListDigitIcon /></button>
        
        {/* Link Add Icons */}
        <button type="button" className={`${iconBtn} cursor-pointer kd-canvasheader-button-all`}><KdLinkAddIcon /></button>

        {/* Magic Wand Icon */}
        <button type="button" className={`${iconBtn} cursor-pointer kd-canvasheader-button-all`}><KdMagicWandIcon /></button>

        {/* Letter Spacing */}
        <button type="button" className={`${iconBtn} cursor-pointer kd-canvasheader-button-all`}><KdTextLetterSpaceIcon /></button>

        {/* Position */}
        <button type="button" className="kd-canvasheader-nullText-button px-3 py-1 rounded-md text-sm cursor-pointer transition-all duration-200">
          <span>Position</span>
        </button>
      </div>
    </div>
  );
}