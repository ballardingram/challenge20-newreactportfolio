// REQUIRED > FUNCTIONALITY
import React from "react";
import { jobs } from "../data";


export default function Resume() {
    return(
        <section id="jobs" className="text-zinc-900 bg-white-100 body-font">
            <div className="container px-5 py-10 mx-auto text-center">
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-zinc-900 tracking-widest mb-4" id="sectionfont">
                    Professional Experience
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-xl" id="navfont">
                       My new coding skills are backed by years of Leadership and Operational Management. I enjoy working with diverse, collaborative, and engaging teams of all sizes.
                    </p>
                    <a
                    href="https://github.com/ballardingram/challenge20-newreactportfolio/raw/main/bmiportfolio/public/Resume.pdf"
                    download
                    className="lg:w-2/3 mx-auto leading-relaxed text-xl" id="navfont">
                       <strong>Click here to download my resume!</strong>
                    </a>
                    <div className="flex flex-wrap m-4">
                    {jobs.map((job) => (
                        <a
                        href={job.link}
                        key={job.image}
                        className="sm:w-1/2 w-100 p-5">
                            <div className="flex relative">
                                <img
                                alt="project-gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center transition-shadow ease-in-out duration-300 shadow-none hover:shadow-2xl shadow-amber-600 rounded-full border-amber-600"
                                src={job.image}
                                />
                                <div className="px-8 py-10 relative z-10 w-full rounded-full border-4 border-amber-600 bg-slate-100 opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-xl title-font font-medium text-stone-700 mb-1">
                                        {job.title}
                                        </h2>
                                        <h1 className="title-font text-sm font-medium text-amber-600 mb-1">
                                          {job.company}  
                                        </h1>
                                        <p className="leading-relaxed text-stone-600">{job.dates}</p>
                                        <p className="leading-relaxed text-stone-600">{job.details}</p>
                                    </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}