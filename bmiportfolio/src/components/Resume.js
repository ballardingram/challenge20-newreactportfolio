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
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl" id="sectionblurb">
                       My new coding skills are backed by years of Leadership and Operational Management. I enjoy working with diverse, collaborative, and engaging teams of all sizes.
                    </p>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl" id="sectionblurb">
                       <strong>Download my Resume!</strong>
                    </p>
                    <div className="flex flex-wrap m-4">
                        {jobs.map((job) => (
                            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">{job.title}</h2>
                                <p className="leading-relaxed mb-6">{job.details}</p>
                                <div className="inline-flex items-center">
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium text-white">
                                            {job.dates}
                                        </span>
                                        <span className="text-gray-500 text-sm uppercase">
                                            {job.company}
                                        </span>
                                    </span>
                                </div>
                            </div>
                    ))}
                </div>
            </div>
        </section>
    );
}