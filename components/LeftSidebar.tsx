// "use client";
// import React, { useState } from "react";
// const active =
//   "bg-[#8051E0] text-white";
// const inactive =
//   "bg-white text-gray-400 hover:bg-[#8051E0] hover:text-white";
// const NAV = [
 
//   {
//     id: "Elements",
//     icon: (
//       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
//         <circle cx="7" cy="7" r="4" />
//         <rect x="13" y="13" width="8" height="8" rx="1" />
//         <path d="M13 3l1.5 3.5H18L15.5 9l1.5 3.5L13 10.5l-4 2 1.5-3.5L8 6h3.5z" strokeLinejoin="round" />
//       </svg>
//     ),
//   },
//   {
//     id: "Text",
//     icon: (
//       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
//         <polyline points="4 7 4 4 20 4 20 7" />
//         <line x1="9" y1="20" x2="15" y2="20" />
//         <line x1="12" y1="4" x2="12" y2="20" />
//       </svg>
//     ),
//   },

//   {
//     id: "Photos",
//     icon: (
//       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
//         <rect x="3" y="3" width="18" height="18" rx="2" />
//         <circle cx="8.5" cy="8.5" r="1.5" />
//         <polyline points="21 15 16 10 5 21" />
//       </svg>
//     ),
//   },
//   {
//     id: "Videos",
//     icon: (
//       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
//         <polygon points="23 7 16 12 23 17 23 7" />
//         <rect x="1" y="5" width="15" height="14" rx="2" />
//       </svg>
//     ),
//   },
// ];

// export default function LeftSidebar() {
//   const [active, setActive] = useState("Elements");

//   return (
//     <div className="w-full h-full flex flex-col items-center overflow-y-auto mt-[10px] kd-LeftSidebar-outerpanel">
      
      
//       {/* Template */}
//       <div className="flex flex-col items-center p-[3px] mb-[5px] cursor-pointer group">  
//         <div className="w-[22px] h-[22px] rounded-[5.58px] bg-[#f2f2f2] flex items-center justify-center transition-colors group-hover:bg-[#8051E0] border border-black/15 group-hover:border-transparent">
//           <svg width="22" height="22" viewBox="0 0 30 30" fill="none"xmlns="http://www.w3.org/2000/svg">
//             <path
//               d="M13.0376 7.21986V22.1824C13.0376 23.5596 11.9211 24.6761 10.5438 24.6761H7.21881C5.84155 24.6761 4.72506 23.5596 4.72506 22.1824V7.21986C4.72506 5.8426 5.84155 4.72611 7.21881 4.72611H10.5438C11.9211 4.72611 13.0376 5.8426 13.0376 7.21986ZM22.1813 17.7767H17.1938C15.8165 17.7767 14.7001 18.8932 14.7001 20.2705V22.1824C14.7001 23.5596 15.8165 24.6761 17.1938 24.6761H22.1813C23.5586 24.6761 24.6751 23.5596 24.6751 22.1824V20.2705C24.6751 18.8932 23.5586 17.7767 22.1813 17.7767ZM22.1813 4.72611H17.1938C15.8165 4.72611 14.7001 5.8426 14.7001 7.21986V13.6205C14.7001 14.9977 15.8165 16.1142 17.1938 16.1142H22.1813C23.5586 16.1142 24.6751 14.9977 24.6751 13.6205V7.21986C24.6751 5.8426 23.5586 4.72611 22.1813 4.72611Z"
//               className="fill-gray-400 transition-colors group-hover:fill-white"
//             />
//           </svg>
//         </div>
//         <p className="text-[9px] kd-font-jakarta font-medium text-black/80 mt-1 transition-colors group-hover:text-[#8051E0]">
//           Template
//         </p>
//       </div>
         
//       {/* Text */}
//       <div className="flex flex-col items-center p-[3px] mb-[5px] cursor-pointer group">  
//         <div className="w-[23px] h-[23px] rounded-[5.58px] bg-[#f2f2f2] flex items-center justify-center transition-colors group-hover:bg-[#8051E0] border border-black/15 group-hover:border-transparent">
//           <svg width="22" height="22" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">            
//             {/* Icon */}
//             <path d="M21.4128 12.0502V8.16482C21.4128 7.97205 21.2566 7.81578 21.0634 7.81578H14.7002H8.33704C8.14386 7.81578 7.98759 7.97205 7.98759 8.16482V12.0502C7.98759 12.2434 8.14386 12.3997 8.33704 12.3997H10.1926C10.3854 12.3997 10.5416 12.2434 10.5416 12.0502V10.7193C10.5416 10.5261 10.6983 10.3698 10.8911 10.3698H13.0735C13.2667 10.3698 13.423 10.5261 13.423 10.7193V20.3227C13.423 20.5159 13.2667 20.6721 13.0735 20.6721H12.1191C11.9259 20.6721 11.7696 20.8284 11.7696 21.0216V22.8771C11.7696 23.0699 11.9259 23.2262 12.1191 23.2262H14.7002H17.2813C17.4745 23.2262 17.6308 23.0699 17.6308 22.8771V21.0216C17.6308 20.8284 17.4745 20.6721 17.2813 20.6721H16.3269C16.1337 20.5159 15.9774 20.5159 15.9774 20.3227V10.7193C15.9774 10.5261 16.1337 10.3698 16.3269 10.3698H18.5093C18.7021 10.3698 18.8588 10.5261 18.8588 10.7193V12.0502C18.8588 12.2434 19.0151 12.3997 19.2078 12.3997H21.0634C21.2566 12.3997 21.4128 12.2434 21.4128 12.0502Z"
//               className="fill-gray-400 transition-colors group-hover:fill-white" />
//           </svg>
//         </div>
//         <p className="text-[9px] kd-font-jakarta font-medium text-black/80 mt-1 transition-colors group-hover:text-[#8051E0]">
//           Text
//         </p>
//       </div>
//       {/* Images */}
//       <div className="flex flex-col items-center p-[3px] mt-[5px] mb-[5px] cursor-pointer group">  
//         <div className="w-[23px] h-[23px] rounded-[5.58px] bg-[#f2f2f2] flex items-center justify-center transition-colors group-hover:bg-[#8051E0] border border-black/15 group-hover:border-transparent">
//           <svg width="22" height="22" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">            
//             {/* Icon Paths */}
//             <path d="M6.45679 20.8347L6.43929 20.8522C6.20304 20.3359 6.05429 19.7497 5.99304 19.1022C6.05429 19.7409 6.22054 20.3184 6.45679 20.8347Z"
//               className="fill-gray-400 transition-colors group-hover:fill-white"/>
//               <path d="M12.0749 13.2833C13.225 13.2833 14.1573 12.3509 14.1573 11.2008C14.1573 10.0506 13.225 9.11827 12.0749 9.11827C10.9247 9.11827 9.99235 10.0506 9.99235 11.2008C9.99235 12.3509 10.9247 13.2833 12.0749 13.2833Z"
//               className="fill-gray-400 transition-colors group-hover:fill-white"/>
//             <path d="M18.3661 5.95033H11.0336C7.84863 5.95033 5.94988 7.84908 5.94988 11.0341V18.3666C5.94988 19.3203 6.11613 20.1516 6.43988 20.8516C7.19238 22.5141 8.80238 23.4503 11.0336 23.4503H18.3661C21.5511 23.4503 23.4499 21.5516 23.4499 18.3666V16.3628V11.0341C23.4499 7.84908 21.5511 5.95033 18.3661 5.95033ZM22.0236 15.1378C21.3411 14.5516 20.2386 14.5516 19.5561 15.1378L15.9161 18.2616C15.2336 18.8478 14.1311 18.8478 13.4486 18.2616L13.1511 18.0166C12.5299 17.4741 11.5411 17.4216 10.8411 17.8941L7.56863 20.0903C7.37613 19.6003 7.26238 19.0316 7.26238 18.3666V11.0341C7.26238 8.56658 8.56613 7.26283 11.0336 7.26283H18.3661C20.8336 7.26283 22.1374 8.56658 22.1374 11.0341V15.2341L22.0236 15.1378Z"
//               className="fill-gray-400 transition-colors group-hover:fill-white"/>
//           </svg>
//         </div>
//         <p className="text-[9px] kd-font-jakarta font-medium text-black/80 mt-1 transition-colors group-hover:text-[#8051E0]">
//           Images
//         </p>
//       </div>      

//       {/* Subtitle */}
//       <div className="flex flex-col items-center p-[3px] mt-[5px] mb-[5px] cursor-pointer group">  
//         <div className="w-[23px] h-[23px] rounded-[5.58px] bg-[#f2f2f2] flex items-center justify-center transition-colors group-hover:bg-[#8051E0] border border-black/15 group-hover:border-transparent">
//           <svg width="22" height="22" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
//             {/* Icon */}
//             <path d="M19.95 7.70072H9.45002C9.09346 7.64985 8.72994 7.68268 8.38826 7.79661C8.04657 7.91053 7.7361 8.10243 7.48142 8.35712C7.22673 8.6118 7.03483 8.92228 6.9209 9.26396C6.80697 9.60564 6.77415 9.96916 6.82502 10.3257V19.0757C6.77415 19.4323 6.80697 19.7958 6.9209 20.1375C7.03483 20.4792 7.22673 20.7896 7.48142 21.0443C7.7361 21.299 8.04657 21.4909 8.38826 21.6048C8.72994 21.7188 9.09346 21.7516 9.45002 21.7007H19.95C20.3066 21.7516 20.6701 21.7188 21.0118 21.6048C21.3535 21.4909 21.6639 21.299 21.9186 21.0443C22.1733 20.7896 22.3652 20.4792 22.4791 20.1375C22.5931 19.7958 22.6259 19.4323 22.575 19.0757V10.3257C22.6259 9.96916 22.5931 9.60564 22.4791 9.26396C22.3652 8.92228 22.1733 8.6118 21.9186 8.35712C21.6639 8.10243 21.3535 7.91053 21.0118 7.79661C20.6701 7.68268 20.3066 7.64985 19.95 7.70072ZM11.8563 16.232C12.0883 16.232 12.3109 16.1398 12.475 15.9757C12.6391 15.8116 12.7313 15.589 12.7313 15.357H14.0438C14.0438 15.9371 13.8133 16.4935 13.4031 16.9038C12.9928 17.314 12.4364 17.5445 11.8563 17.5445C11.2761 17.5445 10.7197 17.314 10.3095 16.9038C9.89924 16.4935 9.66877 15.9371 9.66877 15.357V14.0445C9.66877 13.4643 9.89924 12.9079 10.3095 12.4977C10.7197 12.0874 11.2761 11.857 11.8563 11.857C12.4364 11.857 12.9928 12.0874 13.4031 12.4977C13.8133 12.9079 14.0438 13.4643 14.0438 14.0445H12.7313C12.7313 13.8124 12.6391 13.5899 12.475 13.4258C12.3109 13.2617 12.0883 13.1695 11.8563 13.1695C11.6242 13.1695 11.4016 13.2617 11.2376 13.4258C11.0735 13.5899 10.9813 13.8124 10.9813 14.0445V15.357C10.9813 15.589 11.0735 15.8116 11.2376 15.9757C11.4016 16.1398 11.6242 16.232 11.8563 16.232ZM17.5438 16.232C17.7758 16.232 17.9984 16.1398 18.1625 15.9757C18.3266 15.8116 18.4188 15.589 18.4188 15.357H19.7313C19.7313 15.9371 19.5008 16.4935 19.0906 16.9038C18.6803 17.314 18.1239 17.5445 17.5438 17.5445C16.9636 17.5445 16.4072 17.314 15.997 16.9038C15.5867 16.4935 15.3563 15.9371 15.3563 15.357V14.0445C15.3563 13.4643 15.5867 12.9079 15.997 12.4977C16.4072 12.0874 16.9636 11.857 17.5438 11.857C18.1239 11.857 18.6803 12.0874 19.0906 12.4977C19.5008 12.9079 19.7313 13.4643 19.7313 14.0445H18.4188C18.4188 13.8124 18.3266 13.5899 18.1625 13.4258C17.9984 13.2617 17.7758 13.1695 17.5438 13.1695C17.3117 13.1695 17.0891 13.2617 16.9251 13.4258C16.761 13.5899 16.6688 13.8124 16.6688 14.0445V15.357C16.6688 15.589 16.761 15.8116 16.9251 15.9757C17.0891 16.1398 17.3117 16.232 17.5438 16.232Z"
//               className="fill-gray-400 transition-colors group-hover:fill-white"/>
//           </svg>
//         </div>
//         <p className="text-[9px] kd-font-jakarta font-medium text-black/80 mt-1 transition-colors group-hover:text-[#8051E0]">
//           Subtitle
//         </p>
//       </div>     

//       {/* Buttons */}
//       <div className="flex flex-col items-center p-[3px] mt-[5px] mb-[5px] cursor-pointer group">  
//         <div className="w-[23px] h-[23px] rounded-[5.58px] bg-[#f2f2f2] flex items-center justify-center transition-colors group-hover:bg-[#8051E0] border border-black/15 group-hover:border-transparent">
//           <svg width="22" height="22" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">            
//             {/* Icon */}
//             <path d="M15.183 11.9286V11.7816C15.183 11.2356 14.784 10.7946 14.301 10.7946H12.138V12.9366H14.301C14.784 12.9366 15.183 12.4746 15.183 11.9286Z"
//               className="fill-gray-400 transition-colors group-hover:fill-white"/>
//             <path d="M15.309 15.5604V15.4554C15.309 14.9094 14.91 14.4684 14.406 14.4684H12.138V16.5684H14.406C14.889 16.5684 15.309 16.1274 15.309 15.5604Z"
//               className="fill-gray-400 transition-colors group-hover:fill-white"/>
//             <path d="M19.9924 5.29203C19.8454 5.27103 19.6774 5.25003 19.5094 5.25003H19.4674H17.3044H7.93836C6.46836 5.25003 5.27136 6.44703 5.27136 7.91703V17.325V19.488C5.27136 19.656 5.29236 19.824 5.31336 19.992C5.31336 21.462 8.46336 24.171 9.93336 24.171H21.4624C22.9324 24.171 24.1294 22.974 24.1294 21.504V9.91203C24.1294 8.46303 21.4834 5.35503 19.9924 5.29203ZM10.5424 9.13503H14.5744C15.8764 9.13503 16.7584 10.038 16.7584 11.361V12.096C16.7584 12.684 16.5064 13.272 16.1074 13.692H16.1284C16.6534 14.07 16.8844 14.679 16.8844 15.288V15.855C16.8844 17.388 15.9814 18.27 14.7004 18.27H10.5424V9.13503ZM23.7094 21.483C23.7094 22.722 22.7014 23.709 21.4834 23.709H9.93336C9.36636 23.709 8.31636 23.121 7.35036 22.281C7.24536 22.176 7.11936 22.071 7.01436 21.966C7.28736 22.071 7.60236 22.113 7.91736 22.113H19.4464H19.4884C20.9584 22.113 22.1554 20.916 22.1554 19.446V7.91703C22.1554 7.62303 22.1134 7.35003 22.0294 7.07703C22.1134 7.16103 22.1974 7.24503 22.2814 7.35003C23.1214 8.29503 23.7094 9.36603 23.7094 9.93303V21.483Z"
//               className="fill-gray-400 transition-colors group-hover:fill-white"/>
//           </svg>
//         </div>
//         <p className="text-[9px] kd-font-jakarta font-medium text-black/80 mt-1 transition-colors group-hover:text-[#8051E0]">
//           Buttons
//         </p>
//       </div>    

//       {/* Elements */}
//       <div className="flex flex-col items-center p-[3px] mt-[5px] mb-[5px] cursor-pointer group">  
//         <div className="w-[23px] h-[23px] rounded-[5.58px] bg-[#f2f2f2] flex items-center justify-center transition-colors group-hover:bg-[#8051E0] border border-black/15 group-hover:border-transparent">
//           <svg width="22" height="22" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">            
//             {/* Icon */}
//             <path d="M23.5197 15.1194H15.1197V24.3594H23.5197V15.1194Z" className="fill-gray-400 transition-colors group-hover:fill-white" />
//             <path d="M23.8671 7.58645C23.106 6.07764 21.5418 5.04041 19.7396 5.04041C17.1921 5.04041 15.1197 7.11296 15.1197 9.66048C15.1197 12.208 17.1921 14.2804 19.7396 14.2804C21.5418 14.2804 23.106 13.2432 23.8671 11.7344C24.1819 11.1103 24.3597 10.4058 24.3597 9.66033C24.3597 8.91502 24.1819 8.21047 23.8671 7.58645Z" className="fill-gray-400 transition-colors group-hover:fill-white" />
//             <path d="M9.65986 5.04041L5.03979 14.2804H14.2798L9.65986 5.04041Z" className="fill-gray-400 transition-colors group-hover:fill-white" />
//             <path d="M5.03979 20.1592L7.3498 24.3591H11.9698L14.2798 20.1592L11.9698 15.9591H7.3498L5.03979 20.1592Z" className="fill-gray-400 transition-colors group-hover:fill-white"/>
//           </svg>
//         </div>
//         <p className="text-[9px] kd-font-jakarta font-medium text-black/80 mt-1 transition-colors group-hover:text-[#8051E0]">
//           Elements
//         </p>
//       </div>       
//       {/* Videos */}
//        <div className="flex flex-col items-center p-[3px] mt-[5px] mb-[5px] cursor-pointer group">  
//         <div className="w-[23px] h-[23px] rounded-[5.58px] bg-[#f2f2f2] flex items-center justify-center transition-colors group-hover:bg-[#8051E0] border border-black/15 group-hover:border-transparent">
//           <svg width="22" height="22" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">            
//             {/* Video Icon */}
//             <path d="M7.90267 5.62928L11.7052 9.4318H5.11883C5.25323 8.62446 5.5751 7.85989 6.05857 7.1995C6.54204 6.53911 7.17365 6.0013 7.90267 5.62928ZM13.0137 5.04089H10.3089C10.142 5.04089 9.97518 5.04968 9.80832 5.05846L14.1817 9.4318H17.4046L13.0137 5.04089ZM19.0907 5.04089H15.5077L19.8986 9.4318H24.2808C24.075 8.20417 23.4406 7.08926 22.4903 6.2853C21.5401 5.48133 20.3355 5.0404 19.0907 5.04089ZM13.3666 19.6415L17.7575 17.2265C17.8954 17.1509 18.0104 17.0396 18.0905 16.9042C18.1707 16.7689 18.2129 16.6145 18.2129 16.4573C18.2129 16.3 18.1707 16.1456 18.0905 16.0103C18.0104 15.8749 17.8954 15.7636 17.7575 15.688L13.3666 13.273C13.2329 13.1994 13.0824 13.162 12.9298 13.1644C12.7772 13.1668 12.6279 13.2088 12.4966 13.2865C12.3652 13.3641 12.2563 13.4747 12.1807 13.6072C12.1051 13.7397 12.0653 13.8897 12.0653 14.0423V18.8723C12.0653 19.0248 12.1051 19.1748 12.1807 19.3073C12.2563 19.4399 12.3652 19.5504 12.4966 19.628C12.6279 19.7057 12.7772 19.7478 12.9298 19.7501C13.0824 19.7525 13.2329 19.7151 13.3666 19.6415ZM24.3598 11.1882V19.0918C24.3587 20.4889 23.8032 21.8285 22.8153 22.8164C21.8274 23.8043 20.4878 24.3598 19.0907 24.3609H10.3089C8.91178 24.3598 7.57221 23.8043 6.58431 22.8164C5.5964 21.8285 5.04091 20.4889 5.03979 19.0918V11.1882H24.3598Z"
//               className="fill-gray-400 transition-colors group-hover:fill-white"/>
//           </svg>
//         </div>
//         <p className="text-[9px] kd-font-jakarta font-medium text-black/80 mt-1 transition-colors group-hover:text-[#8051E0]">
//           Videos
//         </p>
//       </div>       
//     </div>
//   );
// }


import React, { useState } from "react";
// import useEditorStore from "@/app/Store/editorStore";
// import useEditorUIStore from "@/app/Store/useEditorUIStore";
import { ButtonIcon, ElementsIcon, ImageIcon, TemplateIcon, TextIcon, VideoIcon } from "@/lib/icon/icons";
 
const NAV_ITEMS = [
    { panel: "TemplateAddPanel", icon: <TemplateIcon/>, label: "Template" },
    { panel: "text", icon: <TextIcon/>, label: "Text" },
    { panel: "image", icon: <ImageIcon/>, label: "Images" },
    { panel: "AddButtonPanel", icon: <ButtonIcon/>, label: "Buttons" },
    { panel: "AddElementPanel", icon: <ElementsIcon />, label: "Elements" },
    { panel: "AddVideoPanel", icon: <VideoIcon />, label: "Videos" },
];
 
const Navbar: React.FC = () => {
    const [active, setActive]=useState("")

    return (
        <aside className="flex flex-col items-center w-full h-full border-r border-[#e5e7eb]">
            <div className="flex flex-col h-full p-1 gap-0.5">
                {NAV_ITEMS.map(({ panel, icon, label }) => {
                    const isActive = active === panel;
                    return (
                        <div
                            key={panel}
                            className={`kd-nav-btn-wrapper ${isActive ? "kd-nav-btn-wrapper-active" : ""}`} >
                            <button className={`kd-nav-btn ${isActive ? "kd-nav-btn-active" : ""}`}>
                                {icon}
                            </button>
                            <span className="kd-nav-btn-label">{label}</span>
                        </div>
                    );
                })}
            </div>
        </aside>
    );
};
 
export default Navbar;