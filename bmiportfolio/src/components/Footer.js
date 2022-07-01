// REQUIRED > FUNCTIONALITY
import React from "react";
export default function Footer() {
    return(
        <footer className="text-zinc-900 bg-slate-200 top-0 pt-10 drop-shadow-xl border-spacing-4 border-2 border-t-amber-600 m-5 border-x-slate-100 border-b-slate-100">
            <div className="text-center text-2xl tracking-widest" id="sectionfont">
            Connect with Me!    
            </div>
            <div className="flex justify-center items-center pb-10">
                <a href="https://www.linkedin.com/in/ballardingram" className="pr-2.5">
                    <img src="linkedin.png" alt="linkedin"></img>
                </a>
                <a href="https://github.com/ballardingram" className="pl-2.5">
                    <img src="github.png" alt="github"></img>
                </a>
            </div>
        </footer>
    );
}