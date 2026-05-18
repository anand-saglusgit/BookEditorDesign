"use client";
import React, { useState } from "react";

const SHAPES = [
  { color: "#f97316", cls: "rounded-full", w: 28, h: 28 },
  { color: "#22d3ee", cls: "", w: 28, h: 28 },
  { color: "#a78bfa", cls: "rounded-full", w: 20, h: 28 },
  { color: "#fbbf24", cls: "", w: 22, h: 22, rotate: true },
  { color: "#34d399", cls: "", w: 32, h: 20 },
  { color: "#f472b6", cls: "rounded-full", w: 22, h: 22 },
];

const TEXT_STYLES = [
  { label: "Add Heading", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, fontWeight: 700, bg: "#F3F4F7", color: "black" },
  { label: "Add Sub Heading", fontFamily: "'Poetsen One', sans-serif", fontSize: 13, fontWeight: 600, color: "#8051E0" },
  { label: "Add Body Text", fontFamily: "'Playpen Sans', cursive", fontSize: 11, fontWeight: 400, color: "#9ca3af" },
  { label: "#Pagination", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 400, color: "#9ca3af" },
];

const TEMPLATES = [
  { from: "#fde68a", to: "#f97316", label: "Summer Vibes" },
  { from: "#67e8f9", to: "#3b82f6", label: "Ocean Breeze" },
  { from: "#f9a8d4", to: "#ec4899", label: "Floral Bloom" },
  { from: "#7c3aed", to: "#4f46e5", label: "Dark Mode" },
];

const FONTS = [
  { title: "Welcome", sub: "Back !", bg: "rgb(244 244 244)"},
  { title: "Stay Focused", sub: "Stay Strong", bg: "rgb(244 244 244)"},
  { title: "Success", sub: "Begins Here", bg: "rgb(244 244 244)"},  
  { title: "Push Your", sub: "Limits", bg: "rgb(244 244 244)"},
  { title: "Dream Big,", sub: "Act Now", bg: "rgb(244 244 244)"},
  { title: "Your", sub: "Future Starts", s_sub: "Today", bg: "rgb(244 244 244)"},
  { title: "SHARE", sub: "", s_sub: "", bg: "rgb(244 244 244)"},
];

export default function ToolPanel() {
  const [search, setSearch] = useState("");

  return (
    <div className="h-full flex flex-col overflow-hidden kd-toolpanel-borderRight">
      
      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto scrollbar-hide kd-scrollbody-pd_xy">      

        {/* Text */}
        <div className="mb-3">
          <div className="flex items-center justify-between mb-3">
            <span className="text-black/80 kd-font-jakarta tx-[13px] font-semibold capitalize tracking-[0.08em]">Text</span>
          </div>
          <hr className="w-full border-t border-gray-200 mb-2" />
            <span className="text-black/100 kd-font-jakarta text-[10px] font-medium capitalize tracking-[0.1em]">Default Text Styles</span>
          <div className="flex flex-col gap-1">
            {TEXT_STYLES.map((t) => (
              <button                                
                key={t.label}
                className="text-center transition-all kd-textStyle"
                style={{fontSize: t.fontSize, fontWeight: t.fontWeight, color: t.color}} >
                {t.label}
              </button>
            ))}
          </div>
          <hr className="w-full border-t border-gray-200 mt-4" />
        </div>
        
        {/* Font combinations */}
        <div>          
          <div className="grid grid-cols-2 gap-[6px]">
            {FONTS.map((f, i) => (
              <button
                key={i}
                className="flex flex-col items-left justify-center font-abel kd-textFontStyle"
                style={{ background: f.bg}}>
                <span style={{ fontSize: 17, fontWeight: 400, color: "black", lineHeight: 1 }}>{f.title}</span>
                <span style={{ fontSize: 17, fontWeight: 400, color: "#5C0484", }}>{f.sub}</span>
                <span style={{ fontSize: 17, fontWeight: 400, color: "#5C0484", textAlign:"right"}}>{f.s_sub}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
