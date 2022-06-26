import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { jobs } from "../data";

export default function Resume() {
    return(
        <section id="jobs">
            <div className="container px-5 py-10 mx-auto text-center">
                <UsersIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                    Professional Experience
                    </h1>
                    <div className="flex flex-wrap m-4">
                        {jobs.map((job) => (
                            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                                <TerminalIcon class="block w-8 text-gray-500 mb-5"/>
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