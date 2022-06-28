// REQUIRED > FUNCTIONALITY
import React from "react";


export default function Contact() {
    return (
        <section id= "contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md: w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                    width="100%"
                    height="100%"
                    title="map"
                    className="absolute inset-0"
                    frameBorder={0}
                    marginHeight={0}
                    marginWidth={0}
                    style={{ filter: "opacity(0.7)" }}
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Austin,%20TX+(Ballard%20Ingram)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"/>
                </div>
                <form name="contact" className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="=text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Contact Me!
                    </h2>
                    <p className="leading-relaxed mb-5">
                        Contact me blurb! Revisit later.
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                            Name
                        </label>
                        <input type="text" name="name" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <div className="realtive mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                            Email
                        </label>
                        <input type="email" id="email" name="email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <div className="relative mb-4">
                        <label htmlfor="message" className="leading-7 text-sm text-gray-400">
                            Message
                        </label>
                        <textarea id="message" name="message" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Send!
                    </button>
                </form>
            </div>
        </section>
    );
}