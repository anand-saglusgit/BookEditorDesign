"use client";
import React from "react";

export default function Header() {
  return (
    <div
      className="w-full h-full flex items-center justify-between px-4 relative"
      style={{
        background: "#1e1e2e",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Left */}
      <div className="flex items-center gap-2">
        <div
          className="flex items-center justify-center rounded-lg"
          style={{
            width: 28,
            height: 28,
            background: "linear-gradient(135deg,#7c3aed,#4f46e5)",
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="4" fill="white" />
            <circle
              cx="12"
              cy="12"
              r="9"
              stroke="white"
              strokeWidth="2"
              fill="none"
              opacity="0.35"
            />
          </svg>
        </div>
      </div>

      {/* Center Title */}
      <div
        className="absolute left-1/2 -translate-x-1/2 px-6 py-2 rounded-xl text-white text-sm font-medium"
        style={{
          border: "1px solid rgba(255,255,255,0.25)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
      >
        Foundations of Information Technology
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        
        {/* Undo */}
        <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-white text-[#7c3aed] hover:bg-[#7c3aed] hover:text-white transition-all duration-200">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 14L4 9L9 4" />
            <path d="M20 20V13C20 10.7909 18.2091 9 16 9H4" />
          </svg>
        </button>

        {/* Redo */}
        <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-white text-[#7c3aed] hover:bg-[#7c3aed] hover:text-white transition-all duration-200">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 14L20 9L15 4" />
            <path d="M4 20V13C4 10.7909 5.79086 9 8 9H20" />
          </svg>
        </button>

        {/* Export */}
        <button
          className="flex items-center text-white hover:opacity-90 transition-all"
          style={{
            fontSize: 11,
            padding: "5px 12px",
            borderRadius: 6,
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.12)",
            gap: 5,
          }}
        >
          Export
        </button>

        {/* Save */}
        <button
          className="flex items-center text-white font-semibold hover:opacity-90 transition-all"
          style={{
            fontSize: 11,
            padding: "5px 12px",
            borderRadius: 6,
            background: "#7c3aed",
          }}
        >
          Save & Next
        </button>
      </div>
    </div>
  );
}