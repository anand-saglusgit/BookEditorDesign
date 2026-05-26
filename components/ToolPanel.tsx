"use client";

import { redirect } from "next/dist/server/api-utils";
import React from "react";

const IMAGES = [
  "https://kd-presentation-editor.s3.us-east-1.amazonaws.com/File/text_template/thumbnail/WelcomeBack.svg",
  "https://kd-presentation-editor.s3.us-east-1.amazonaws.com/File/text_template/thumbnail/StayFocusedStayStrong.svg",
  "https://kd-presentation-editor.s3.us-east-1.amazonaws.com/File/text_template/thumbnail/SuccessBeginsHere.svg",
  "https://kd-presentation-editor.s3.us-east-1.amazonaws.com/File/text_template/thumbnail/PushYourLimits.svg",
  "https://kd-presentation-editor.s3.us-east-1.amazonaws.com/File/text_template/thumbnail/DreamBigActNow.svg",
  "https://kd-presentation-editor.s3.us-east-1.amazonaws.com/File/text_template/thumbnail/YourFutureStartsToday.svg",
  "https://kd-presentation-editor.s3.us-east-1.amazonaws.com/File/text_template/thumbnail/Share.svg",
  "https://kd-presentation-editor.s3.us-east-1.amazonaws.com/File/text_template/thumbnail/TakeTheLeap.svg",
  "https://kd-presentation-editor.s3.us-east-1.amazonaws.com/File/text_template/thumbnail/UnlockYourPotential.svg",
  "https://kd-presentation-editor.s3.us-east-1.amazonaws.com/File/text_template/thumbnail/NowOrNever.svg",
  "https://kd-presentation-editor.s3.us-east-1.amazonaws.com/File/text_template/thumbnail/FaceItHeadOn.svg",
  "https://kd-presentation-editor.s3.us-east-1.amazonaws.com/File/text_template/thumbnail/HereSuccessStarts.svg",
  "https://kd-presentation-editor.s3.us-east-1.amazonaws.com/File/text_template/thumbnail/ThemWrong.svg",
  "https://kd-presentation-editor.s3.us-east-1.amazonaws.com/File/text_template/thumbnail/DareToBeGreat.svg",
  "https://kd-presentation-editor.s3.us-east-1.amazonaws.com/File/text_template/thumbnail/MakeItHappen.svg",
  "https://kd-presentation-editor.s3.us-east-1.amazonaws.com/File/text_template/thumbnail/FindYourFire.svg",
  "https://kd-presentation-editor.s3.us-east-1.amazonaws.com/File/text_template/thumbnail/RiseStronger.svg",
  "https://kd-presentation-editor.s3.us-east-1.amazonaws.com/File/text_template/thumbnail/ComeOnFollowMe.svg",
  "https://kd-presentation-editor.s3.us-east-1.amazonaws.com/File/text_template/thumbnail/LightOfSpeed.svg",
  "https://kd-presentation-editor.s3.us-east-1.amazonaws.com/File/text_template/thumbnail/TimeKeepClimbing.svg",
  "https://kd-presentation-editor.s3.us-east-1.amazonaws.com/File/text_template/thumbnail/50OofSale.svg",
  "https://kd-presentation-editor.s3.us-east-1.amazonaws.com/File/text_template/thumbnail/LetNothingStopYou.svg",
  "https://kd-presentation-editor.s3.us-east-1.amazonaws.com/File/text_template/thumbnail/RewriteTheRules.svg",
  "https://kd-presentation-editor.s3.us-east-1.amazonaws.com/File/text_template/thumbnail/BookNow.svg",
  "https://kd-presentation-editor.s3.us-east-1.amazonaws.com/File/text_template/thumbnail/OwnTheMoment.svg",
  "https://kd-presentation-editor.s3.us-east-1.amazonaws.com/File/text_template/thumbnail/KeepGoingKeepGrowing.svg",
];

const TEXT_STYLES = [
  {label: "Add Heading",fontFamily: "Plus Jakarta Sans, sans-serif",fontSize: "18px",fontWeight: "700", backgroundColor: "var(--kd-bg-text)",color: "var(--kd-text-black)",},
  {label: "Add Sub Heading",fontFamily: "Poetsen One",fontSize: "14px",fontWeight: "500",backgroundColor: "var(--kd-bg-text)",color: "var(--kd-text-black)",},
  {label: "Add Body Text",fontFamily: "Playpen Sans, cursive",fontSize: "12px",fontWeight: "500",backgroundColor: "var(--kd-bg-text)",color: "var(--kd-text-black)",},
  {label: "#Pagination",fontFamily: "Plus Jakarta Sans, sans-serif",fontSize: "10px",fontWeight: "600",backgroundColor: "var(--kd-bg-text)",color: "var(--kd-text-black)",},
];

export default function ToolPanel() {
  return (
    <div className="h-full flex flex-col overflow-hidden kd-toolpanel-borderRight">
      {/* TOP SECTION */}
      <div className="shrink-0 p-3">
        {/* Text */}
        <div className="mb-3">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[var(--kd-text-black)] kd-font-jakarta text-[14px] leading-[100%] font-semibold capitalize tracking-[0.08em]">
              Text
            </span>
          </div>

          <hr className="w-full border-t border-gray-200 mb-2" />

          <span className="text-[var(--kd-text-black)] kd-font-jakarta text-[10px] font-semibold capitalize tracking-[0.1em]">
            Default Text Styles
          </span>

          
            <div className="flex flex-col gap-2 w-full mt-2">
            {TEXT_STYLES.map((item, index) => (
              <button
                key={index}
                className="w-full flex items-center justify-center rounded-[8px] border px-5 leading-none transition-all duration-200"
                style={{
                  fontFamily: item.fontFamily,
                  fontSize: item.fontSize,
                  fontWeight: item.fontWeight,
                  backgroundColor: item.backgroundColor,
                  color: item.color,
                  borderColor: "transparent",

                  // height font-size ke according
                  paddingTop:
                    item.fontSize === "21px" ? "18px" : "12px",
                  paddingBottom:
                    item.fontSize === "21px" ? "18px" : "12px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--kd-hover-bg)";
                  e.currentTarget.style.borderColor =
                    "var(--kd-hover-border)";
                  e.currentTarget.style.color =
                    "var(--kd-text-tertiary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    item.backgroundColor;
                  e.currentTarget.style.borderColor =
                    "transparent";
                  e.currentTarget.style.color =
                    item.color;
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
          <hr className="w-full border-t border-gray-200 mt-4" />
        </div>
      </div>

      {/* BOTTOM - SCROLLABLE SECTION */}
      <div className="flex-1 min-h-0 overflow-auto kd-scrollbody-pd_xy">
        <div className="grid grid-cols-2 gap-4">
          {IMAGES.map((image, index) => (
            <button
              key={index}
              className="flex items-center justify-center bg-[var(--kd-bg-placeholderbg)] border border-[#aaa6a60e] shadow-[0px_0px_1px_0px_#f7f7f7] rounded-[5px] p-2 overflow-hidden w-full aspect-square"
            >
              <img
                src={image}
                alt={`template-${index}`}
                className="max-w-full max-h-full object-contain rounded-[5px]"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}