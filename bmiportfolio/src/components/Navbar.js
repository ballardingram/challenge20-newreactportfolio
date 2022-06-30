// REQUIRED > FUNCTIONALITY
import React from "react";

export default function Navbar() {
    return (
        <header className = "bg-slate-200 md:sticky top-0 z-10 drop-shadow-xl h-50 border-spacing-4 border-2 border-b-amber-600 m-5 border-x-slate-100 border-t-slate-100">
            <section id="about" className="text-zinc-900 bg-white-100 body-font"></section>
            <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    <a href="#about" className="flex object-left">
                        <img src="profilepicture.png" alt="Ballard Ingram" class="overflow-hidden h-48 w-96"/>
                    </a>
                    <a href="#about" className="md:mr-auto text-7xl text-stone-600 hover:text-amber-600 text-center" id="namefont">
                       Ballard M. Ingram 
                    </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-1 md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <a href="#projects" className="mr-5 text-stone-700 hover:text-amber-600" id="navfont">
                        Projects
                    </a>
                    <a href="#skills" className="mr-5 text-stone-700 hover:text-amber-600" id="navfont">
                        Skills
                    </a>
                    <a href="#jobs" className="mr-5 text-stone-700 hover:text-amber-600" id="navfont">
                        Professional Career
                    </a>
                    <a href="#contact" className="mr-5 text-stone-700 hover:text-amber-600" id="navfont">
                        Hire Me
                    </a>
                </nav>
            </div>
        </header>
    );
}