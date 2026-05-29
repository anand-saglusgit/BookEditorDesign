"use client";
import React, { useRef } from "react";
import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import ToolPanel from "@/components/ToolPanel";
import CanvasHeaderBar from "@/components/CanvasHeaderBar";
import MainCanvas from "@/components/main";
import EditorFooter from "@/components/EditorFooter";
import Preview from "@/components/Preview";
import ImageHeaderBar from "@/components/ImageHeaderBar";

export default function Home() {
    const containerRef = useRef<HTMLDivElement | null>(null);

    return (
        <div className="w-full h-screen overflow-hidden flex flex-col">

            <div className="w-full h-[41px] shrink-0">
                <Header />
            </div>

            <div className="flex flex-1 min-h-0 overflow-hidden">

                <div className="w-[4.25%] shrink-0 h-full">
                    <LeftSidebar />
                </div>

                <div className="w-[21.75%] transition-all duration-300 h-full shrink-0 ">
                    <ToolPanel />
                </div>

                <div className="w-[61.50%] flex flex-col flex-1 min-w-0 min-h-0 transition-all duration-300">

                    <div className="flex flex-1 min-h-0 overflow-hidden">
                        <div className="flex flex-col flex-1 min-w-0 min-h-0">
                            <div className="h-[8%] shrink-0 flex items-center justify-center">                                
                                 {/* <CanvasHeaderBar />*/}
                               <ImageHeaderBar /> 
                            </div>
                            <div className="flex-1 min-h-0 min-w-0 overflow-hidden flex items-center justify-center">
                                <MainCanvas  />
                            </div>
                        </div>
                        <div className="w-[12.50%] shrink-0 h-full overflow-hidden">
                            <Preview />
                        </div>
                    </div>

                    <div className="h-[35px] shrink-0">
                        <EditorFooter />
                    </div>
                    
                </div>
            </div>

        </div>
    );
}




