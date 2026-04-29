"use client";
import React, { useState } from "react";

const NAV = [
  {
    id: "Design",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    id: "Elements",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="7" cy="7" r="4" />
        <rect x="13" y="13" width="8" height="8" rx="1" />
        <path d="M13 3l1.5 3.5H18L15.5 9l1.5 3.5L13 10.5l-4 2 1.5-3.5L8 6h3.5z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "Text",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <polyline points="4 7 4 4 20 4 20 7" />
        <line x1="9" y1="20" x2="15" y2="20" />
        <line x1="12" y1="4" x2="12" y2="20" />
      </svg>
    ),
  },
  {
    id: "Brand",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: "Uploads",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    id: "Photos",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
  },
  {
    id: "Videos",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
  },
  {
    id: "Background",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="2" y="2" width="20" height="20" rx="3" />
        <path d="M2 8h20M8 2v20" />
      </svg>
    ),
  },
  {
    id: "Apps",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="2" y="2" width="9" height="9" rx="1.5" />
        <rect x="13" y="2" width="9" height="9" rx="1.5" />
        <rect x="2" y="13" width="9" height="9" rx="1.5" />
        <rect x="13" y="13" width="9" height="9" rx="1.5" />
      </svg>
    ),
  },
];

export default function LeftSidebar() {
  const [active, setActive] = useState("Elements");

  return (
    <div
      className="w-full h-full flex flex-col items-center overflow-y-auto"
      style={{ background: "#1e1e2e", borderRight: "1px solid rgba(255,255,255,0.07)", paddingTop: 4, paddingBottom: 4 }}
    >
      {NAV.map(({ id, icon }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => setActive(id)}
            className="relative w-full flex flex-col items-center justify-center transition-all"
            style={{ paddingTop: 9, paddingBottom: 9, gap: 4, color: isActive ? "#a78bfa" : "#6b7280" }}
          >
            {/* Left accent bar */}
            {isActive && (
              <div
                className="absolute left-0 rounded-r-full"
                style={{ width: 3, height: 24, background: "#a78bfa", top: "50%", transform: "translateY(-50%)" }}
              />
            )}
            <div
              className="flex items-center justify-center rounded-xl transition-all"
              style={{
                width: 36, height: 36,
                background: isActive ? "rgba(167,139,250,0.12)" : "transparent",
              }}
            >
              {icon}
            </div>
            <span style={{ fontSize: 9, fontWeight: 500, lineHeight: 1, letterSpacing: "0.01em" }}>{id}</span>
          </button>
        );
      })}
    </div>
  );
}
