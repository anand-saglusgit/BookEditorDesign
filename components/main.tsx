"use client";
import React, { RefObject, useState } from "react";

interface MainCanvasProps {
  containerRef: RefObject<HTMLDivElement | null>;
}

function SummerPoster() {
  const [sel, setSel] = useState<string | null>("title");

  return (
    <div
      onClick={() => setSel(null)}
      style={{
        position: "relative",
        width: 340,
        height: 460,
        background: "#fdf6e0",
        borderRadius: 6,
        overflow: "hidden",
        boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
        cursor: "default",
        fontFamily: "Georgia, serif",
        flexShrink: 0,
      }}
    >
      {/* ── Background blobs ── */}
      {/* Top-right yellow blob */}
      <div style={{ position: "absolute", top: -30, right: -30, width: 160, height: 160, borderRadius: "50%", background: "#fde68a", opacity: 0.75 }} />
      {/* Secondary yellow */}
      <div style={{ position: "absolute", top: 50, right: 20, width: 90, height: 90, borderRadius: "50%", background: "#fcd34d", opacity: 0.5 }} />
      {/* Bottom-left mint blob */}
      <div style={{ position: "absolute", bottom: -20, left: -20, width: 130, height: 130, borderRadius: "50%", background: "#6ee7b7", opacity: 0.55 }} />
      {/* Bottom-right small yellow */}
      <div style={{ position: "absolute", bottom: 60, right: 10, width: 70, height: 70, borderRadius: "50%", background: "#fde68a", opacity: 0.4 }} />

      {/* ── Top-left tropical leaves ── */}
      <svg style={{ position: "absolute", top: -4, left: -4, width: 130, height: 130 }} viewBox="0 0 130 130" fill="none">
        <path d="M0 30 Q30 -5 65 25 Q45 55 0 30Z" fill="#059669" opacity="0.95" />
        <path d="M5 5 Q45 -10 70 30 Q40 50 5 5Z" fill="#10b981" opacity="0.8" />
        <path d="M0 55 Q20 20 55 40 Q30 70 0 55Z" fill="#34d399" opacity="0.7" />
        <path d="M15 0 Q55 5 65 40 Q30 45 15 0Z" fill="#065f46" opacity="0.85" />
        {/* Stem lines */}
        <line x1="5" y1="30" x2="50" y2="20" stroke="#064e3b" strokeWidth="1" opacity="0.6" />
        <line x1="10" y1="5" x2="60" y2="28" stroke="#064e3b" strokeWidth="1" opacity="0.5" />
      </svg>

      {/* ── Top-right tropical leaves ── */}
      <svg style={{ position: "absolute", top: 8, right: -4, width: 110, height: 110 }} viewBox="0 0 110 110" fill="none">
        <path d="M110 25 Q75 -5 55 30 Q80 50 110 25Z" fill="#059669" opacity="0.95" />
        <path d="M110 5 Q70 -8 50 28 Q75 45 110 5Z" fill="#10b981" opacity="0.8" />
        <path d="M110 50 Q85 20 60 40 Q82 65 110 50Z" fill="#34d399" opacity="0.7" />
        <line x1="110" y1="25" x2="68" y2="28" stroke="#064e3b" strokeWidth="1" opacity="0.55" />
      </svg>

      {/* ── Brand logo row ── */}
      <div
        style={{
          position: "absolute", top: 118, left: "50%", transform: "translateX(-50%)",
          display: "flex", alignItems: "center", gap: 6, zIndex: 5, whiteSpace: "nowrap",
        }}
      >
        <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#0d9488", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="9" height="9" viewBox="0 0 24 24" fill="white"><circle cx="12" cy="12" r="6" /></svg>
        </div>
        <span style={{ fontSize: 9, fontWeight: 700, color: "#0f766e", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          Add Co-me
        </span>
        {/* small circle icons */}
        {[...Array(4)].map((_, i) => (
          <div key={i} style={{ width: 14, height: 14, borderRadius: "50%", background: "rgba(255,255,255,0.6)", border: "1px solid #99f6e4" }} />
        ))}
      </div>

      {/* ── HELLO SUMMER text ── */}
      <div
        onClick={(e) => { e.stopPropagation(); setSel("title"); }}
        style={{
          position: "absolute", top: 136, left: "50%", transform: "translateX(-50%)",
          width: 310, textAlign: "center", zIndex: 10, cursor: "pointer",
        }}
      >
        {/* selection box */}
        {sel === "title" && (
          <div style={{
            position: "absolute", inset: -8,
            border: "1.5px dashed #3b82f6", borderRadius: 4,
            pointerEvents: "none", zIndex: 20,
          }} />
        )}

        <div
          style={{
            fontSize: 62, fontWeight: 900, lineHeight: 1.0, letterSpacing: "0.04em",
            color: "#1a1a1a",
            textShadow: "4px 4px 0 #fbbf24, -1px -1px 0 #1a1a1a",
            fontFamily: "Georgia, serif",
          }}
        >
          HELLO
        </div>
        <div
          style={{
            fontSize: 62, fontWeight: 900, lineHeight: 0.95, letterSpacing: "0.04em",
            color: "#fef08a",
            WebkitTextStroke: "2.5px #1a1a1a",
            textShadow: "4px 4px 0 #1a1a1a",
            fontFamily: "Georgia, serif",
          }}
        >
          SUMMER
        </div>
      </div>

      {/* ── Subtitle ── */}
      <div
        onClick={(e) => { e.stopPropagation(); setSel("sub"); }}
        style={{
          position: "absolute", top: 280, left: "50%", transform: "translateX(-50%)",
          width: 230, textAlign: "center", zIndex: 10, cursor: "pointer",
        }}
      >
        {sel === "sub" && (
          <div style={{
            position: "absolute", inset: -6,
            border: "1.5px dashed #3b82f6", borderRadius: 4,
            pointerEvents: "none", zIndex: 20,
          }} />
        )}
        <p style={{ fontSize: 11, color: "#374151", lineHeight: 1.7, margin: 0 }}>
          May your days be filled with happiness<br />
          and exciting adventures
        </p>
      </div>

      {/* ── Bottom-right flower ── */}
      <svg
        style={{ position: "absolute", bottom: 24, right: 20, width: 88, height: 88, zIndex: 5 }}
        viewBox="0 0 88 88" fill="none"
      >
        {/* Petals */}
        {[0, 60, 120, 180, 240, 300].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const cx = 44 + 20 * Math.cos(rad);
          const cy = 44 + 20 * Math.sin(rad);
          return (
            <ellipse
              key={angle}
              cx={cx} cy={cy}
              rx="9" ry="14"
              transform={`rotate(${angle} ${cx} ${cy})`}
              fill="#f97316"
              opacity="0.88"
            />
          );
        })}
        <circle cx="44" cy="44" r="11" fill="#fbbf24" />
        <circle cx="44" cy="44" r="5" fill="#f59e0b" />
      </svg>

      {/* ── Bottom-left small flower ── */}
      <svg
        style={{ position: "absolute", bottom: 18, left: 22, width: 44, height: 44, zIndex: 5 }}
        viewBox="0 0 44 44" fill="none"
      >
        {[0, 60, 120, 180, 240, 300].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const cx = 22 + 9 * Math.cos(rad);
          const cy = 22 + 9 * Math.sin(rad);
          return (
            <ellipse
              key={angle}
              cx={cx} cy={cy}
              rx="4.5" ry="7"
              transform={`rotate(${angle} ${cx} ${cy})`}
              fill="#fbbf24"
              opacity="0.85"
            />
          );
        })}
        <circle cx="22" cy="22" r="6" fill="#f59e0b" />
      </svg>

      {/* ── Page label ── */}
      <div style={{
        position: "absolute", bottom: 6, left: "50%", transform: "translateX(-50%)",
        fontSize: 8, color: "#9ca3af", zIndex: 10, whiteSpace: "nowrap",
      }}>
        Page 1 / Canva (AI)
      </div>
    </div>
  );
}

export default function MainCanvas({ containerRef }: MainCanvasProps) {
  return (
    <div
      ref={containerRef}
      className="w-full h-full flex items-center justify-center relative overflow-auto"
      style={{
        background: "repeating-conic-gradient(#fff 0% 25%, #fff 0% 50%) 0 0 / 24px 24px",
      }}
    >
      {/* Size badge */}
      <div
        style={{
          position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)",
          background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)",
          color: "#9ca3af", fontSize: 10, padding: "3px 10px", borderRadius: 999,
          display: "flex", alignItems: "center", gap: 6, pointerEvents: "none", zIndex: 20,
        }}
      >
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80" }} />
        1919 × 1079 px
      </div>

      <SummerPoster />
    </div>
  );
}
