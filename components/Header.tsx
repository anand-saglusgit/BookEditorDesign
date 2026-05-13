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
        >Export 
          <svg width="11" height="11" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.4375 0.9375C8.4375 0.418945 8.01855 0 7.5 0C6.98145 0 6.5625 0.418945 6.5625 0.9375V8.04785L4.41211 5.89746C4.0459 5.53125 3.45117 5.53125 3.08496 5.89746C2.71875 6.26367 2.71875 6.8584 3.08496 7.22461L6.83496 10.9746C7.20117 11.3408 7.7959 11.3408 8.16211 10.9746L11.9121 7.22461C12.2783 6.8584 12.2783 6.26367 11.9121 5.89746C11.5459 5.53125 10.9512 5.53125 10.585 5.89746L8.4375 8.04785V0.9375ZM1.875 10.3125C0.84082 10.3125 0 11.1533 0 12.1875V13.125C0 14.1592 0.84082 15 1.875 15H13.125C14.1592 15 15 14.1592 15 13.125V12.1875C15 11.1533 14.1592 10.3125 13.125 10.3125H10.1514L8.82422 11.6396C8.0918 12.3721 6.90527 12.3721 6.17285 11.6396L4.84863 10.3125H1.875ZM12.6562 11.9531C12.8427 11.9531 13.0216 12.0272 13.1534 12.1591C13.2853 12.2909 13.3594 12.4698 13.3594 12.6562C13.3594 12.8427 13.2853 13.0216 13.1534 13.1534C13.0216 13.2853 12.8427 13.3594 12.6562 13.3594C12.4698 13.3594 12.2909 13.2853 12.1591 13.1534C12.0272 13.0216 11.9531 12.8427 11.9531 12.6562C11.9531 12.4698 12.0272 12.2909 12.1591 12.1591C12.2909 12.0272 12.4698 11.9531 12.6562 11.9531Z" fill="white"/>
          </svg>
        </button>
        <button
          className="flex items-center"
          style={{ fontSize: 11, color: "white", fontWeight: 600, padding: "5px 12px", borderRadius: 6, background: "#7c3aed", gap: 5 }}
        >Save & Next</button>
      </div>
    </div>
  );
}
