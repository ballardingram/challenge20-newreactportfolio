// REQUIRED > FUNCTIONALITY
import React from "react";
import { skills } from "../data";

export default function Skills() {
    return (
        <section id="skills">
        <div className="container px-5 py-10 mx-auto">
            <div className="text-center mb-20">
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-zinc-900 tracking-widest mb-4" id="sectionfont">
                    Skills &amp; Technologies
                </h1>
                <p className="leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-2xl" id="sectionblurb">
                I have picked up many skills along the way and I'm always looking to expand my knowledge even further. What I have come to love about coding is the amount of tips, tricks, best practices, and collaboration you can find online.
                </p>
            </div>
            <div className="flex flex-wrap lg:w-2/5 sm:mx-auto sm:mb-2 mx-2">
                {skills.map((skill) => (
                    <div key={skill} className="p-2 sm:w-1/2 w-full">
                        <div className="bg-slate-200 rounded flex p-4 h-full items-center border-b-amber-600 border-x-slate-100 border-t-slate-100">
                            <img src={skill.image} alt="skill icon"></img>
                            <span className="font-medium text-zinc-900 text-center pl-5" id="navfont">
                                {skill.name}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
}