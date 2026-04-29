"use client";
import React from "react";

export default function Header() {
  return (
    <div
      className="w-full h-full flex items-center justify-between select-none overflow-hidden"
      style={{ background: "#1e1e2e", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "0 10px" }}
    >
     
      <div className="flex items-center gap-0 shrink-0" style={{ gap: "2px" }}>
        {/* Logo */}
        <div
          className="flex items-center justify-center rounded-lg shrink-0 mr-2"
          style={{ width: 28, height: 28, background: "linear-gradient(135deg,#7c3aed,#4f46e5)" }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="4" fill="white" />
            <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" fill="none" opacity="0.35" />
          </svg>
        </div>
      </div>

 

    
      <div className="flex items-center shrink-0" style={{ gap: 8 }}>
    
       
        <button style={{ color: "#9ca3af", display: "flex", alignItems: "center", justifyContent: "center", width: 28, height: 28, borderRadius: 6 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
          </svg>
        </button>

    
        <button
          className="flex items-center hover:text-white transition-all"
          style={{ fontSize: 11, color: "white", padding: "5px 12px", borderRadius: 6, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.12)", gap: 5 }}
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <polyline points="16 6 12 2 8 6" />
            <line x1="12" y1="2" x2="12" y2="15" />
          </svg>
          Share
        </button>
        <button
          className="flex items-center"
          style={{ fontSize: 11, color: "white", fontWeight: 600, padding: "5px 12px", borderRadius: 6, background: "#7c3aed", gap: 5 }}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3" /></svg>
          Present
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="6 9 12 15 18 9" /></svg>
        </button>
      </div>
    </div>
  );
}
