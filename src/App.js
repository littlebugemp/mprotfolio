import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";
// import Projects from "./components/Projects";
import Skills from "./components/Skills";
// import Testimonials from "./components/Testimonials";
import Hobbies from "./components/Hobbies";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar/>
      <About/>
      <Resume/>
      {/* <Projects/> */}
      <Skills/>
      <Hobbies/>
      {/* <Testimonials/> */}
      <Contact/>
    </main>
  );
}
