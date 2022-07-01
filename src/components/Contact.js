// REQUIRED > FUNCTIONALITY
import React from "react";

export default function Contact() {
    return (
        <section id= "contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md: w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                    width="100%"
                    height="100%"
                    title="map"
                    className="absolute inset-0"
                    frameBorder={0}
                    marginHeight={0}
                    marginWidth={0}
                    style={{ filter: "opacity(1.0)" }}
                    src="https://maps.google.com/maps?width=1000&amp;height=560&amp;hl=en&amp;q=Austin,%20TX+(Ballard%20Ingram)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"/>
                </div>
                <form action="mailto:ballardingram@outlook.com?Subject={message}" target="_blank" name="contact" className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="sm:text-4xl text-3xl mb-1 font-medium title-font text-zinc-900 tracking-widest" id="sectionfont">
                        Contact Me!
                    </h2>
                    <p className="leading-relaxed mb-5 text-xl" id="navfont">
                        I am always looking to collaborate and provide feedback on any professional concepts and projects. Let's improve our world together.
                    </p>
                    <div className="realtive mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-zinc-900" id="navfont">
                            Name
                        </label>
                        <input type="name" id="name" name="name" className="w-full bg-slate-200 rounded"/>
                    </div>
                    <div className="realtive mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-zinc-900" id="navfont">
                            Email
                        </label>
                        <input type="email" id="email" name="email" className="w-full bg-slate-200 rounded"/>
                    </div>
                    <div className="realtive mb-4">
                        <label htmlFor="subject" className="leading-7 text-sm text-zinc-900" id="navfont">
                           Subject
                        </label>
                        <input type="text" id="subject" name="subject" className="w-full bg-slate-200 rounded"/>
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-zinc-9000" id="navfont">
                            Message
                        </label>
                        <textarea id="message" name="message" className="w-full bg-slate-200 rounded"/>
                    </div>
                    <button type="submit" className="text-white bg-amber-600 border-0 py-2 px-6 focus:outline-none hover:bg-zinc-900 rounded text-lg">
                        Send!
                    </button>
                </form>
            </div>
        </section>
    );
}