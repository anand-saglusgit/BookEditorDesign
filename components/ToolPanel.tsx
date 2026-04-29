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
  { label: "Add a heading", fontSize: 16, fontWeight: 700, color: "white" },
  { label: "Add a subheading", fontSize: 13, fontWeight: 600, color: "#d1d5db" },
  { label: "Add a little bit of body text", fontSize: 11, fontWeight: 400, color: "#9ca3af" },
];

const TEMPLATES = [
  { from: "#fde68a", to: "#f97316", label: "Summer Vibes" },
  { from: "#67e8f9", to: "#3b82f6", label: "Ocean Breeze" },
  { from: "#f9a8d4", to: "#ec4899", label: "Floral Bloom" },
  { from: "#7c3aed", to: "#4f46e5", label: "Dark Mode" },
];

const FONTS = [
  { title: "CALL", sub: "to action", bg: "#111111" },
  { title: "Hello", sub: "World", bg: "#1a0f35" },
];

export default function ToolPanel() {
  const [search, setSearch] = useState("");

  return (
    <div
      className="h-full flex flex-col overflow-hidden"
      style={{ width: 240, background: "#1e1e2e", borderRight: "1px solid rgba(255,255,255,0.07)" }}
    >
      {/* Search bar */}
      <div style={{ padding: "10px 12px 8px" }}>
        <div className="relative flex items-center">
          <svg
            className="absolute"
            style={{ left: 9, color: "#6b7280" }}
            width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
          >
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search your brand assets..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%", fontSize: 11, color: "white",
              background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 8, paddingLeft: 28, paddingRight: 10, paddingTop: 6, paddingBottom: 6,
              outline: "none",
            }}
          />
        </div>
      </div>

      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto" style={{ padding: "0 12px 16px" }}>

        {/* Add brand kit */}
        <button
          className="w-full flex items-center transition-all"
          style={{
            gap: 8, padding: "7px 10px", borderRadius: 8, marginBottom: 16,
            background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)",
          }}
        >
          <div
            className="flex items-center justify-center rounded flex-shrink-0"
            style={{ width: 20, height: 20, background: "#7c3aed" }}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
            </svg>
          </div>
          <span style={{ fontSize: 11, color: "#c4b5fd", fontWeight: 500 }}>Add brand kit</span>
          <svg className="ml-auto" style={{ color: "#a78bfa" }} width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Elements */}
        <div style={{ marginBottom: 16 }}>
          <div className="flex items-center justify-between" style={{ marginBottom: 8 }}>
            <span style={{ fontSize: 10, fontWeight: 600, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.08em" }}>Elements</span>
            <button style={{ fontSize: 10, color: "#8b5cf6" }}>See all</button>
          </div>
          <div className="grid grid-cols-3" style={{ gap: 6 }}>
            {SHAPES.map((s, i) => (
              <button
                key={i}
                className="flex items-center justify-center transition-all"
                style={{
                  aspectRatio: "1", borderRadius: 8,
                  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  style={{
                    width: s.w, height: s.h,
                    background: s.color,
                    borderRadius: s.cls.includes("rounded-full") ? 999 : s.cls === "" ? 3 : 3,
                    transform: s.rotate ? "rotate(45deg)" : "none",
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Text */}
        <div style={{ marginBottom: 16 }}>
          <div className="flex items-center justify-between" style={{ marginBottom: 8 }}>
            <span style={{ fontSize: 10, fontWeight: 600, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.08em" }}>Text</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {TEXT_STYLES.map((t) => (
              <button
                key={t.label}
                className="text-left transition-all"
                style={{
                  padding: "7px 10px", borderRadius: 7,
                  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)",
                  fontSize: t.fontSize, fontWeight: t.fontWeight, color: t.color,
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Templates */}
        <div style={{ marginBottom: 16 }}>
          <div className="flex items-center justify-between" style={{ marginBottom: 8 }}>
            <span style={{ fontSize: 10, fontWeight: 600, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.08em" }}>Templates</span>
            <button style={{ fontSize: 10, color: "#8b5cf6" }}>See all</button>
          </div>
          <div className="grid grid-cols-2" style={{ gap: 6 }}>
            {TEMPLATES.map((t, i) => (
              <button
                key={i}
                className="relative overflow-hidden"
                style={{ aspectRatio: "3/4", borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <div
                  style={{
                    width: "100%", height: "100%",
                    background: `linear-gradient(135deg, ${t.from}, ${t.to})`,
                    display: "flex", alignItems: "flex-end", padding: 6,
                  }}
                >
                  <span
                    style={{
                      fontSize: 9, color: "rgba(255,255,255,0.85)", fontWeight: 500,
                      background: "rgba(0,0,0,0.28)", padding: "2px 5px", borderRadius: 3,
                    }}
                  >
                    {t.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Font combinations */}
        <div>
          <div className="flex items-center justify-between" style={{ marginBottom: 8 }}>
            <span style={{ fontSize: 10, fontWeight: 600, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.08em" }}>Font combinations</span>
            <button style={{ fontSize: 10, color: "#8b5cf6" }}>See all</button>
          </div>
          <div className="grid grid-cols-2" style={{ gap: 6 }}>
            {FONTS.map((f, i) => (
              <button
                key={i}
                className="flex flex-col items-center justify-center"
                style={{
                  aspectRatio: "1", borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)",
                  background: f.bg, gap: 2,
                }}
              >
                <span style={{ fontSize: 18, fontWeight: 900, color: "white", lineHeight: 1 }}>{f.title}</span>
                <span style={{ fontSize: 9, color: "#9ca3af" }}>{f.sub}</span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
