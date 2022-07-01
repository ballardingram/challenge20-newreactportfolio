// REQUIRED > FUNCTIONALITY
import React from "react";
export default function About() {
    return(
        <section id="about" className="text-zinc-900 bg-white-100 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-20">
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-zinc-900 tracking-widest" id="sectionfont">
                   About Me
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-xl" id="navfont">
                    Howdy! I'm a full-stack web developer located in Austin, Texas! Surprisingly enough, I'm actually from Chicago, IL. I still haven't caught on to the 'ya'll' thing yet. If you bring me on to your team be ready for me to say, 'did yous guys fix that bug over'der?' Yeah, I know, can't take the city out of the Man. I have been living in Texas off and on since 2005. I tied the knot, adopted a few boys, and settled my roots in Texas. This is going to be home for a while. What's not to love?Like the city of Chicago my goal with learning code is to create something magnificent. Strong layouts, responsive design, and a polished UX.
                </p>
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 mt-4 text-zinc-900 tracking-widest" id="sectionfont">
                   My Vision
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-xl" id="navfont">
                    Like the city of Chicago my goal with learning code is to create something magnificent with strong layouts, responsive design, and a polished UX. My perspective is 'if you can dream it, then make it a reality.' In my years of professional experience I've seen opportunities present themselves to me that I could not take advantage of because I didn't have the tools to make them a reality. In 2022 - that all changed.
                </p>
            </div>
        </div>
        </section>
    );
}
