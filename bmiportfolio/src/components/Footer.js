// REQUIRED > FUNCTIONALITY
import React from "react";
export default function Footer() {
    return(
        <footer className="text-zinc-900 bg-slate-200 top-0 pt-10 drop-shadow-xl border-spacing-4 border-2 border-t-amber-600 m-5 border-x-slate-100 border-b-slate-100">
            <div className="text-center text-2xl tracking-widest" id="sectionfont">
            Connect with Me!    
            </div>
            <div className="flex justify-center items-center py-10">
                <a href="https://www.linkedin.com/in/ballardingram" className="pr-2.5">
                    <img src="linkedin.png" alt="linkedin"></img>
                </a>
                <a href="https://github.com/ballardingram" className="p-2.5">
                    <img src="github.png" alt="github"></img>
                </a>
<<<<<<< HEAD:bmiportfolio/src/components/Footer.js
                <a href="https://stackoverflow.com/users/18042527/ballard-ingram" className="pl-2.5">
                    <img src="stackoverflow.png" alt="stackflow"></img>
=======
                <a href="https://stackoverflow.com/users/18042527/ballard-ingram?tab=profile" className="pl-2.5">
                    <img src="stackoverflow.png" alt="stackoverflow
                    "></img>
>>>>>>> c7a4e8616e3cf8db5b8baa56ffcbdc8bfc914fc5:src/components/Footer.js
                </a>
            </div>
        </footer>
    );
}