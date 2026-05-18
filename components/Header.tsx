"use client";
import React from "react";

export default function Header() {
  return (
    <div className="w-full h-full flex items-center justify-between px-4 relative kd-header-gradient">

      {/* Left Logo */}
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center rounded-lg kd-header-logo">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="4" fill="white" />
            <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" fill="none" opacity="0.35" />
          </svg>
        </div>
      </div>

      {/* Center Title */}
      <div className="absolute left-1/2 -translate-x-1/2 px-6 py-1 rounded-xl text-white text-[10px] font-semibold kd-glass-title kd-font-jakarta">
        Foundations of Information Technology
      </div>

      {/* Right */}
      <div className="flex items-center gap-1">
        {/* Undo */}
        <button className="kd-purple-btn kd-icon-btn">
          <svg  width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" >
            <path d="M9 14L4 9L9 4" />
            <path d="M20 20V13C20 10.7909 18.2091 9 16 9H4" />
          </svg>
        </button>

        {/* Redo */}
        <button className="kd-purple-btn kd-icon-btn">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" >
            <path d="M15 14L20 9L15 4" />
            <path d="M4 20V13C4 10.7909 5.79086 9 8 9H20" />
          </svg>
        </button>

        <div className="flex items-center gap-1">
          {/* Export */}
          <button className="kd-purple-btn kd-action-btn group kd-font-jakarta">
            Export
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <g clipPath="url(#clip0_export)">
                <path d="M8.4375 1.875C8.4375 1.35645 8.01855 0.9375 7.5 0.9375C6.98145 0.9375 6.5625 1.35645 6.5625 1.875V8.98535L4.41211 6.83496C4.0459 6.46875 3.45117 6.46875 3.08496 6.83496C2.71875 7.20117 2.71875 7.7959 3.08496 8.16211L6.83496 11.9121C7.20117 12.2783 7.7959 12.2783 8.16211 11.9121L11.9121 8.16211C12.2783 7.7959 12.2783 7.20117 11.9121 6.83496C11.5459 6.46875 10.9512 6.46875 10.585 6.83496L8.4375 8.98535V1.875ZM1.875 11.25C0.84082 11.25 0 12.0908 0 13.125V14.0625C0 15.0967 0.84082 15.9375 1.875 15.9375H13.125C14.1592 15.9375 15 15.0967 15 14.0625V13.125C15 12.0908 14.1592 11.25 13.125 11.25H10.1514L8.82422 12.5771C8.0918 13.3096 6.90527 13.3096 6.17285 12.5771L4.84863 11.25H1.875ZM12.6562 12.8906C12.8427 12.8906 13.0216 12.9647 13.1534 13.0966C13.2853 13.2284 13.3594 13.4073 13.3594 13.5938C13.3594 13.7802 13.2853 13.9591 13.1534 14.0909C13.0216 14.2228 12.8427 14.2969 12.6562 14.2969C12.4698 14.2969 12.2909 14.2228 12.1591 14.0909C12.0272 13.9591 11.9531 13.7802 11.9531 13.5938C11.9531 13.4073 12.0272 13.2284 12.1591 13.0966C12.2909 12.9647 12.4698 12.8906 12.6562 12.8906Z" className="fill-white group-hover:fill-[#7c3aed]" />
              </g>
              <defs>
                <clipPath id="clip0_export">
                  <rect width="15" height="15" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>

          {/* Save */}
          <button className="kd-purple-btn kd-action-btn kd-font-jakarta">Save & Next</button>
        </div>
      </div>
    </div>
  );
}