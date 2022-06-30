// REQUIRED > FUNCTIONALITY
import React from "react";
export default function Footer() {
    return(
        <footer className = "bg-slate-200 md:sticky top-0 z-10 drop-shadow-xl h-50 border-spacing-4 border-2 border-t-amber-600 m-5 border-x-slate-100 border-b-slate-100 p-10">
            <section id="footer" className="text-zinc-900 bg-white-100 body-font"></section>
                <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center mb-10">
                    <h1 className="text-3xl text-zinc-900 tracking-widest text-center" id="sectionfont">
                        Connect with Me
                    </h1>
                </div>
                <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">  
                    <a href="https://www.linkedin.com/in/ballardingram" className="text-stone-700 hover:text-amber-600 pr-15 m-5" id="navfont">
                        <img alt="linkedIn" src="linkedin.png"></img>
                    </a>
                    <a href="https://github.com/ballardingram" className="text-stone-700 hover:text-amber-600" id="navfont">
                        <img alt="github" src="github.png"></img>
                    </a>
                </div>
        </footer>
    );
}