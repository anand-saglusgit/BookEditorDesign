"use client";
import React, { useState } from "react";

const LAYERS = [
  "Text",
  "Shape 1",
  "Shape 2",
  "Group 1",
  "Shape 1",
  "Text",
  "Shape 3",
  "Group 1",
];

export default function Preview() {
  const [activePage, setActivePage] = useState(0);
  const [tab, setTab] = useState("layers"); // 👈 NEW STATE

  return (
    <div className="h-full w-full flex flex-col bg-[#fcfcfc] border-l border-white/10">    

      {/* 🔥 TABS */}
      <div className="flex p-2 border-b border-white/10">

        {/* Layers Tab */}
        <button
          onClick={() => setTab("layers")}
          className={`flex-1 text-[11px] py-1 transition ${
            tab === "layers"
              ? "bg-purple-600 text-white"
              : "bg-[#2a2a3c] text-gray-300 hover:bg-[#34344a]"
          }`}
        >
          Layers
        </button>

        {/* Pages Tab */}
        <button
          onClick={() => setTab("pages")}
          className={`flex-1 text-[11px] py-1 transition ${
            tab === "pages"
              ? "bg-purple-600 text-white"
              : "bg-[#2a2a3c] text-gray-300 hover:bg-[#34344a]"
          }`}
        >
          Pages
        </button>

      </div>

      {/* 🔥 CONTENT */}
      <div className="flex-1 overflow-y-auto p-2">

        {/* Layers View */}
        {tab === "layers" && (
          <div className="flex flex-col gap-2">

            {LAYERS.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-[#f8f8f8] hover:bg-[#f4f4f4] rounded-md cursor-pointer border border-gray-500"
              >
                <div className="flex items-center gap-2 rounded-xs overflow-hidden">
                  <span className="bg-purple-400 text-xs px-2 py-2 items-center">⋮⋮</span>
                  <span className="text-[11px] text-gray-700">
                    {item}
                  </span>
                </div>

                <span className="text-gray-400 text-xs px-2">👁</span>
              </div>
            ))}

          </div>
        )}

        {/* Pages View */}
        {tab === "pages" && (
          <div className="text-gray-400 text-[11px]">
            Pages content here...
          </div>
        )}

      </div>
    </div>
  );
}