import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";

export default function App() {
    return(
        <main className="text-grey-400-bg-gray-900 body-font">
            <Navbar/>
            <Projects />
            <About />
            <Resume />
            <Skills />
            <Contact />
        </main>
    );
}