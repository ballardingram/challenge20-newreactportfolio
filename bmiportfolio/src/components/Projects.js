// REQUIRED > FUNCTIONALITY
import React from "react";
import { projects } from "../data";

export default function Projects() {
    return (
        <section id="projects" className="text-zinc-900 bg-white-100 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flext flex-col w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-zinc-900 tracking-widest" id="sectionfont">
                        Completed Projects
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl" id="sectionblurb">
                        Over the last six months I've embarked on a new journey to expand my skills and join the coding community. Below are a few projects that I'm proud to have completed and learned from.
                    </p>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl" id="sectionblurb">
                        <strong>Click on the projects to see them in action!</strong>
                    </p>
                </div>
                <div className="flex flex-wrap m-4">
                    {projects.map((project) => (
                        <a
                        href={project.link}
                        key={project.image}
                        className="sm:w-1/2 w-100 p-5">
                            <div className="flex relative">
                                <img
                                alt="project-gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center transition-shadow ease-in-out duration-300 shadow-none hover:shadow-2xl shadow-amber-600 rounded-full border-amber-600"
                                src={project.image}
                                />
                                <div className="px-8 py-10 relative z-10 w-full rounded-full border-4 border-amber-600 bg-slate-100 opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-xl title-font font-medium text-stone-700 mb-1">
                                        {project.title}
                                        </h2>
                                        <h1 className="title-font text-sm font-medium text-amber-600 mb-1">
                                          {project.subtitle}  
                                        </h1>
                                        <p className="leading-relaxed text-stone-600">{project.description}</p>
                                    </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}