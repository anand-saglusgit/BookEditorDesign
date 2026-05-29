"use client";

import { 
    KdReloadIcon, 
    KdMagicWandIcon,
    KdGradBgIcon,
    KdObjectIcon, 
    KdStrokeIcon, 
    KdRadiusIcon, 
    KdUndoIcon, 
    KdFlipIcon,
    KdGridIcon, 
    KdLinkAddIcon,
    KdCropIcon,
  } from "@/lib/icon/icons";
export default function ImageHeaderBar() {     
  const iconBtn = "h-7.5 w-7.5 flex items-center justify-center rounded-md transition-all duration-150";

  return (
    <div className="kd-canvasheader-container h-10 mt-4 flex items-center justify-between px-1 py-1 rounded-lg">      
      
      <div className="flex items-center gap-1">       

        {/* Reload Icon */}
        <button type="button" className={`${iconBtn} cursor-pointer kd-canvasheader-button-all`}>
            <KdReloadIcon />
        </button>       

        {/* Background Remover*/}
        <button type="button" className="kd-canvasheader-fontfamily-button px-4 py-1 text-sm font-medium rounded-md cursor-pointer transition-all duration-200">
          BG Remover
        </button>

        {/* Magic Wand Icon */}
        <button type="button" className={`${iconBtn} cursor-pointer kd-canvasheader-button-all`}>
            <KdMagicWandIcon />
        </button> 

        {/* Gradient Background */}
        <button type="button" className={`${iconBtn} cursor-pointer kd-canvasheader-button-all`}><KdGradBgIcon /></button>

        {/* Shapes/Objects Icon */}
        <button type="button" className={`${iconBtn} cursor-pointer kd-canvasheader-button-all`}>
            <KdObjectIcon />
        </button> 

        {/* Stroke Icon */}
        <button type="button" className={`${iconBtn} cursor-pointer kd-canvasheader-button-all`}>
            <KdStrokeIcon />
        </button> 

        {/* Radius Icon */}
        <button type="button" className={`${iconBtn} cursor-pointer kd-canvasheader-button-all`}>
            <KdRadiusIcon />
        </button> 

        {/* Undo Icon */}
        <button type="button" className={`${iconBtn} cursor-pointer kd-canvasheader-button-all`}>
            <KdUndoIcon />
        </button>

        {/* Flip Icon */}
        <button type="button" className={`${iconBtn} cursor-pointer kd-canvasheader-button-all`}>
            <KdFlipIcon />
        </button>

        {/* Grid Icon */}
        <button type="button" className={`${iconBtn} cursor-pointer kd-canvasheader-button-all`}>
            <KdGridIcon />
        </button>

        {/* Link Add Icons */}
        <button type="button" className={`${iconBtn} cursor-pointer kd-canvasheader-button-all`}>
            <KdLinkAddIcon />
        </button>

        {/* Crop Icons */}
        <button type="button" className={`${iconBtn} cursor-pointer kd-canvasheader-button-all`}>
            <KdCropIcon />
        </button>

        {/* Position */}
        <button type="button" className="kd-canvasheader-button-all px-3 py-1 rounded-md text-sm cursor-pointer transition-all duration-200">
          <span>Position</span>
        </button>
      </div>
    </div>
  );
}