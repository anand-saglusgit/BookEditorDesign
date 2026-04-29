"use client";
import React, { useState } from "react";

const THUMBS = [
  { label: "Page 1", active: true },
  { label: "Page 2", active: false },
  { label: "Page 3", active: false },
];

export default function Preview() {
  const [activePage, setActivePage] = useState(0);

  return (
    <div
      className="h-full w-full flex flex-col"
      style={{ background: "#16162a", borderLeft: "1px solid rgba(255,255,255,0.07)" }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between shrink-0"
        style={{
          height: 40, padding: "0 12px",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <span style={{ fontSize: 11, fontWeight: 600, color: "#d1d5db" }}>Preview</span>
        <button style={{ color: "#6b7280", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Thumbnail list */}
      <div className="flex-1 overflow-y-auto" style={{ padding: "8px 10px", display: "flex", flexDirection: "column", gap: 8 }}>
        {THUMBS.map((t, i) => (
          <div
            key={i}
            onClick={() => setActivePage(i)}
            className="cursor-pointer"
            style={{ display: "flex", flexDirection: "column", gap: 4 }}
          >
            {/* Thumbnail card */}
            <div
              style={{
                width: "100%", aspectRatio: "9/16",
                borderRadius: 6, overflow: "hidden",
                border: activePage === i
                  ? "2px solid #7c3aed"
                  : "1.5px solid rgba(255,255,255,0.1)",
                position: "relative",
                background: "#fdf6e0",
              }}
            >
              {/* Mini poster preview */}
              {/* Top left leaves */}
              <svg style={{ position: "absolute", top: -2, left: -2, width: "42%", height: "42%" }} viewBox="0 0 130 130" fill="none">
                <path d="M0 30 Q30 -5 65 25 Q45 55 0 30Z" fill="#059669" opacity="0.95" />
                <path d="M5 5 Q45 -10 70 30 Q40 50 5 5Z" fill="#10b981" opacity="0.8" />
                <path d="M15 0 Q55 5 65 40 Q30 45 15 0Z" fill="#065f46" opacity="0.8" />
              </svg>
              {/* Top right leaves */}
              <svg style={{ position: "absolute", top: 2, right: -2, width: "34%", height: "34%" }} viewBox="0 0 110 110" fill="none">
                <path d="M110 25 Q75 -5 55 30 Q80 50 110 25Z" fill="#059669" opacity="0.95" />
                <path d="M110 5 Q70 -8 50 28 Q75 45 110 5Z" fill="#10b981" opacity="0.8" />
              </svg>
              {/* Yellow blob */}
              <div style={{ position: "absolute", top: -8, right: -8, width: "45%", height: "45%", borderRadius: "50%", background: "#fde68a", opacity: 0.7 }} />
              {/* Mint blob */}
              <div style={{ position: "absolute", bottom: -8, left: -8, width: "38%", height: "38%", borderRadius: "50%", background: "#6ee7b7", opacity: 0.5 }} />
              {/* HELLO SUMMER text */}
              <div style={{ position: "absolute", top: "34%", left: "50%", transform: "translateX(-50%)", textAlign: "center", width: "90%", lineHeight: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 900, color: "#1a1a1a", fontFamily: "Georgia,serif", textShadow: "1.5px 1.5px 0 #fbbf24" }}>HELLO</div>
                <div style={{ fontSize: 14, fontWeight: 900, color: "#fef08a", fontFamily: "Georgia,serif", WebkitTextStroke: "0.8px #1a1a1a", textShadow: "1.5px 1.5px 0 #1a1a1a" }}>SUMMER</div>
              </div>
              {/* Flower */}
              <svg style={{ position: "absolute", bottom: 6, right: 6, width: 22, height: 22 }} viewBox="0 0 44 44" fill="none">
                {[0,60,120,180,240,300].map((a) => {
                  const r = (a * Math.PI) / 180;
                  return <ellipse key={a} cx={22 + 9 * Math.cos(r)} cy={22 + 9 * Math.sin(r)} rx="4" ry="6.5" transform={`rotate(${a} ${22 + 9 * Math.cos(r)} ${22 + 9 * Math.sin(r)})`} fill="#f97316" opacity="0.88" />;
                })}
                <circle cx="22" cy="22" r="5" fill="#fbbf24" />
              </svg>
            </div>
            {/* Page label */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: 9, color: activePage === i ? "#a78bfa" : "#6b7280", fontWeight: activePage === i ? 600 : 400 }}>
                {t.label}
              </span>
              {activePage === i && (
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#7c3aed" }} />
              )}
            </div>
          </div>
        ))}

        {/* Add page button */}
        <button
          style={{
            width: "100%", aspectRatio: "9/16",
            borderRadius: 6, border: "1.5px dashed rgba(255,255,255,0.15)",
            background: "rgba(255,255,255,0.03)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#6b7280", flexDirection: "column", gap: 4,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          <span style={{ fontSize: 9 }}>Add page</span>
        </button>
      </div>
    </div>
  );
}
