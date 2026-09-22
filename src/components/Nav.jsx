import { useState, useEffect, useRef } from "react";
import nithya from "../assets/nithya13.jpeg";
import Contact from "./Contact";
import './nav.css'

export default function Nav() {
    const sections = useRef([]);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible");
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  sections.current.forEach((section) => {
    if (section) {
      observer.observe(section);
    }
  });

  return () => {
    sections.current.forEach((section) => {
      if (section) {
        observer.unobserve(section);
      }
    });
  };
}, []);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080d21] text-white overflow-hidden">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#080d21]/80 backdrop-blur-md border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            className="windsong-regular text-5xl  tracking-wide  text-[#907DCD] hover:text-white transition"
          >
            Nithya Tk
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            <a
              href="#home"
              className="text-[#907DCD] hover:text-white transition"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-[#907DCD] hover:text-white transition"
            >
              About
            </a>

           

            <a
              href="#projects"
              className="text-[#907DCD] hover:text-white transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-[#907DCD] hover:text-white transition"
            >
              Contact
            </a>

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-[#907DCD] hover:text-white"
          >
            ☰
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-6 space-y-4 bg-[#080d21]">

            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="block text-[#907DCD] hover:text-white"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="block text-[#907DCD] hover:text-white"
            >
              About
            </a>

           

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="block text-[#907DCD] hover:text-white"
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block text-[#907DCD] hover:text-white"
            >
              Contact
            </a>

          </div>
        )}

      </nav>


      {/* ================= HERO ================= */}
      <section
  ref={(el) => (sections.current[0] = el)}
  id="home"
  className="scroll-section scroll-fade-up min-h-[90vh] flex items-center"
>
        {/* Background Glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96  rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 py-20 w-full">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Hero Content */}
            <div className="animate-[fadeIn_1s_ease-out]">

              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight pt-20">

                
                <span className="block">
                  Full Stack Developer
                </span>

              </h1>

              <p className="mt-6 text-lg text-gray-400 max-w-xl leading-relaxed">
                I build modern, responsive and user-friendly web applications
                using Python, React and modern web technologies.
              </p>


              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">

                <a
                  href="#projects"
                  className="px-6 py-3 rounded-full bg-[#907DCD] text-[#080d21] font-semibold
                             hover:scale-105 hover:shadow-[0_0_25px_rgba(234,255,106,0.3)]
                             transition duration-300"
                >
                  View My Projects →
                </a>

                <a
                  href="/Nithya-CV.pdf"
                  download
                  className="px-6 py-3 rounded-full border border-white/30
                             hover:bg-white/10 hover:border-[#7C3AED]
                             transition duration-300"
                >
                  Download CV ↓
                </a>

              </div>

            </div>

{/* Photo Area */}
<div className="relative flex justify-center pt-20 pl-20">

 

  {/* Main Card */}
  

    {/* Small Photo Component */}
    <div className=" w-64 h-80 rounded-2xl overflow-hidden border-2 border-[#f5f5f0]/40
                bg-white/5
                ">
      <img
        src={nithya}
        alt="Nithya"
        className="w-full h-full object-cover"
      />
    </div>

  </div>

</div>

          </div>

        

      </section>


      {/* ================= ABOUT ================= */}
     <section
  ref={(el) => (sections.current[1] = el)}
  id="about"
  className="scroll-section scroll-left py-24 bg-gray-900"
>
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center">
            WHO AM I <span className="text-[#7C3AED]">?</span>
          </h2>

          <div className="max-w-3xl mx-auto mt-10 text-center">

            <p className="text-gray-400 text-lg leading-relaxed">
              I am a passionate developer interested in building modern
              websites and full-stack applications. I enjoy creating
              responsive interfaces and solving real-world problems through
              technology.
            </p>

            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              My main interests are frontend development, UI/UX,
              Python development and full-stack web development.
            </p>

          </div>


          {/* About Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-14">

            <div className="p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-[#7C3AED]/50 hover:-translate-y-2 transition duration-300">

              <div className="text-4xl">
                🐍
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                Python Developer
              </h3>

              <p className="mt-3 text-gray-400">
                Building applications and APIs using Python.
              </p>

            </div>


            <div className="p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-[#7C3AED]/50 hover:-translate-y-2 transition duration-300">

              <div className="text-4xl">
                ⚛️
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                Frontend Developer
              </h3>

              <p className="mt-3 text-gray-400">
                Creating responsive interfaces using React.
              </p>

            </div>


            <div className="p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-[#7C3AED]/50 hover:-translate-y-2 transition duration-300">

              <div className="text-4xl">
                🎨
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                UI / UX
              </h3>

              <p className="mt-3 text-gray-400">
                Designing clean and engaging user experiences.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}
    <section
  ref={(el) => (sections.current[2] = el)}
  id="skills"
  className="scroll-section scroll-zoom py-24"
>

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center">
            MY <span className="text-[#7C3AED]">SKILLS</span>
          </h2>
        

<div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">

  {[
    ["devicon-python-plain", "Python"],
    ["devicon-react-original", "React"],
    ["devicon-javascript-plain", "JavaScript"],
    ["devicon-html5-plain", "HTML"],
    ["devicon-css3-plain", "CSS"],
    ["devicon-nodejs-plain", "Node.js"],
    ["devicon-mongodb-plain", "MongoDB"],
    ["devicon-git-plain", "Git"],
  ].map(([icon, skill]) => (

    <div
      key={skill}
      className="h-40 rounded-2xl
                 bg-[#11182f]
                 border border-white/10
                 flex flex-col items-center justify-center
                 hover:scale-110
                 hover:z-[99]
                 hover:shadow-[0_10px_40px_rgba(234,255,106,0.08)]
                 transition duration-300
                 transition-transform
                 duration-300
                 ease-[cubic-bezier(0.25,1,0.5,1)]"
                 
    >

      <div className="text-5xl text-[#7C3AED]">
        <i className={`${icon} colored`}></i>
      </div>

      <p className="mt-4 text-gray-300">
        {skill}
      </p>

    </div>

  ))}

</div>

          {/* Experience Number */}
          <div className="mt-10 p-10 rounded-2xl bg-[#11182f] border border-white/10 text-center">

            <p className="text-6xl font-bold text-[#7C3AED]">
              1+
            </p>

            <p className="mt-3 text-2xl font-semibold">
              Years Learning & Experience
            </p>

            <a
              href="/Nithya-CV.pdf"
              download
              className="inline-block mt-6 px-7 py-3 rounded-full
                         bg-[#7C3AED] text-[#080d21]
                         font-semibold hover:scale-105 transition"
            >
              DOWNLOAD MY CV
            </a>

          </div>

        </div>

      </section>

{/* ================= EXPERIENCE ================= */}
<section
  ref={(el) => (sections.current[3] = el)}
  id="experience"
  className="scroll-section scroll-right bg-gray-900 py-24"
>
  <div className="mx-auto max-w-6xl px-6">

    {/* ================= HEADING ================= */}
    <div className="mb-16 text-center">
      <h2 className="text-5xl font-bold text-gray-900 md:text-6xl">
        MY{" "}
        <span className="text-[#7C3AED]">
          EXPERIENCE
        </span>
      </h2>
    </div>

    {/* ================= EXPERIENCE CARD ================= */}
    <div className="mx-auto max-w-5xl">

      <div
        className="
          rounded-[28px]
          border border-white/60
          bg-[#e5e5e5]
          px-8 py-10
          backdrop-blur-xl
          transition duration-300
          md:px-10 md:py-12
        "
      >

        {/* ================= TOP ROW ================= */}
        <div
          className="
            flex flex-col gap-3
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          {/* Job Role */}
          <p className="text-lg font-medium text-[#7C3AED]">
            Software Developer Intern
          </p>

          {/* Job Type */}
          <span className="text-base text-gray-500">
            Internship
          </span>
        </div>

        {/* ================= COMPANY ================= */}
        <h3 className="mt-4 text-3xl font-bold text-gray-900">
          Lerny Technology
        </h3>

        {/* ================= DESCRIPTION ================= */}
        <p
          className="
            mt-8
            max-w-4xl
            text-lg
            leading-8
            text-gray-600
          "
        >
          Worked on web development projects and gained practical
          experience in frontend and full-stack development.
        </p>

      </div>

    </div>

  </div>
</section>

      {/* ================= PROJECTS ================= */}
     <section
  ref={(el) => (sections.current[4] = el)}
  id="projects"
  className="scroll-section scroll-up py-24"
>

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center">
            MY <span className="text-[#7C3AED]">PROJECTS</span>
          </h2>


          <div className="grid md:grid-cols-2 gap-7 mt-14">


            {/* Project 1 */}
            <div
              className="group p-8 rounded-2xl
                         bg-[#e5e5e5]
                         border border-white/10
                         hover:-translate-y-2
                         transition duration-500"
            >

              <div className="flex justify-between">

                <span className="text-[#7C3AED] text-3xl font-bold">
                  01
                </span>

                 <span className="text-gray-500 group-hover:text-[#907DCD] transition text-xl">
  <i className="ri-eye-line"></i>
</span>

              </div>


              <h3 className="mt-8 text-2xl font-semibold">
                AI Text Converter
              </h3>

              <p className="mt-4 text-gray-400 leading-relaxed">
                A web application that uses AI to transform and process
                text based on different requirements.
              </p>


              <div className="mt-6 flex flex-wrap gap-2">

                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                  Python
                </span>

                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                  React
                </span>

                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                  AI
                </span>

              </div>


              <a
                href="#"
                className="inline-block mt-7 text-[#907DCD] hover:underline"
              >
                GitHub 
              </a>

            </div>


            {/* Project 2 */}
            <div
              className="group p-8 rounded-2xl
                         bg-[#e5e5e5]
                         border border-white/10
                         hover:-translate-y-2
                         transition duration-500"
            >

              <div className="flex justify-between">

                <span className="text-[#7C3AED] text-3xl font-bold">
                  02
                </span>

                <span className="text-gray-500 group-hover:text-[#7C3AED] transition text-xl">
  <i className="ri-eye-line"></i>
</span>

              </div>


              <h3 className="mt-8 text-2xl font-semibold">
                Result Publishing System
              </h3>

              <p className="mt-4 text-gray-400 leading-relaxed">
                A web application designed to manage and publish student
                examination results efficiently.
              </p>


              <div className="mt-6 flex flex-wrap gap-2">

                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                  Python
                </span>

                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                  SQL
                </span>

                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                  JavaScript
                </span>

              </div>


              <a
                href="#"
                className="inline-block mt-7 text-[#7C3AED] hover:underline"
              >
                GitHub 
              </a>

            </div>

          </div>

        </div>

      </section>


<Contact/>
      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 py-6 bg-[#060a19]">

        <p className="text-center text-gray-500 text-sm">
          © 2026 Nithya TK. All rights reserved.
        </p>

      </footer>

    </div>
  );
}