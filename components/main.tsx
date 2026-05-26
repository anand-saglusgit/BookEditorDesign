"use client";
import React, { RefObject, useState } from "react";
import BannerPageTool from "./BannerPageTool";
export default function MainCanvas({ }) {
  return (

   <div>
    <div>
      <BannerPageTool/>
    </div>
     <div className="text-white w-[400px] h-[450px] flex items-center justify-center relative overflow-auto bg-[var(--kd-bg-secondary)]">
      main canwas
    </div>
   </div>
  );
}
