import React from "react";
import About from "./components/About";
import Open from "./components/Open";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Games from "./components/Games";

export default function App() {
  return (
    <main className="text-green-800 bg-purple-400 body-font">
      <Navbar />
      <Open />
      <About />
      <Skills />
      <Projects />
      <Games />
      <Contact />
    </main>
  );
}
