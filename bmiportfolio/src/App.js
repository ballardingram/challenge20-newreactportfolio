import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

export default function App() {
    return(
        <main className="text-grey-400-bg-gray-900 body-font">
            <Navbar/>
            <Projects />
            <Skills />
            <Resume />
            <Contact />
            <About />
            <Footer />
        </main>
    );
}