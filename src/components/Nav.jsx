import { useState, useEffect, useRef } from "react";
import nithya from "../assets/protfolio-profile.jpeg";
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

            <h1
  className="
    text-7xl
    font-bold
    bg-gradient-to-r
    from-[#756BFF]
    via-[#C58BFF]
    to-[#FFB52E]
    bg-[length:200%_100%]
    bg-clip-text
    text-transparent
    animate-gradient
  "
>
  Full Stack Developer
</h1>

              <p className="mt-6 text-lg text-gray-400 max-w-xl leading-relaxed">
                I build modern, responsive and user-friendly web applications
                using Python, React and modern web technologies.
              </p>


              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">

               <a
  href="#projects"
  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#756BFF] via-[#C58BFF] to-[#FFB52E] bg-[length:200%_100%] animate-gradient text-white font-semibold
             hover:scale-105 hover:shadow-[0_0_25px_rgba(234,255,106,0.3)]
             transition duration-300"
>
  View My Projects
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
<div className="relative flex justify-center  pl-10">

 

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
  className="scroll-section scroll-left bg-[#111827] py-24"
>
  <div className="max-w-[1600px] mx-auto px-6">

    {/* ================= HEADING ================= */}
    <div className="text-center">

      <h2 className="text-5xl text-[#8B7CFF] md:text-5xl font-bold ">
        About Me
      </h2>

      <p className="
        max-w-4xl
        mx-auto
        mt-5
        text-lg
        leading-relaxed
        text-gray-300
      ">
        I am a passionate developer interested in building modern
        websites and full-stack applications. I enjoy creating
        responsive interfaces and solving real-world problems through
        technology.
      </p>

    </div>


   
   {/* ================= ABOUT CARDS ================= */}
<div className="

  flex
  flex-wrap
  justify-center
  gap-6
  mt-16

">

  {/* Card 1 */}
  <div className="
    w-[290px]
    h-[216px]
    rounded-2xl
    bg-[#172033]
    border border-[#29364d]
    p-6
    transition duration-300
    hover:border-[#7C3AED]
  ">

    <div className="
      w-12
      h-12
      rounded-xl
      bg-[#29275f]
      flex
      items-center
      justify-center
      text-[#8B7CFF]
      text-2xl
    ">
      <i className="ri-code-s-slash-line"></i>
    </div>

    <h3 className="
      mt-5
      text-xl
      font-semibold
      text-white
    ">
      Clean Code
    </h3>

    <p className="
      mt-2
      text-sm
      leading-6
      text-gray-400
    ">
      Writing maintainable, scalable, and well-documented code.
    </p>

  </div>


  {/* Card 2 */}
  <div className="
    w-[290px]
    h-[216px]
    rounded-2xl
    bg-[#172033]
    border border-[#29364d]
    p-6
    transition duration-300
    hover:border-[#7C3AED]
  ">

    <div className="
      w-12
      h-12
      rounded-xl
      bg-[#29275f]
      flex
      items-center
      justify-center
      text-[#8B7CFF]
      text-2xl
    ">
      <i className="ri-flashlight-line"></i>
    </div>

    <h3 className="
      mt-5
      text-xl
      font-semibold
      text-white
    ">
      Performance
    </h3>

    <p className="
      mt-2
      text-sm
      leading-6
      text-gray-400
    ">
      Optimizing applications for speed and efficiency.
    </p>

  </div>


  {/* Card 3 */}
  <div className="
    w-[290px]
    h-[216px]
    rounded-2xl
    bg-[#172033]
    border border-[#29364d]
    p-6
    transition duration-300
    hover:border-[#7C3AED]
  ">

    <div className="
      w-12
      h-12
      rounded-xl
      bg-[#29275f]
      flex
      items-center
      justify-center
      text-[#8B7CFF]
      text-2xl
    ">
      <i className="ri-group-line"></i>
    </div>

    <h3 className="
      mt-5
      text-xl
      font-semibold
      text-white
    ">
      User-Centric
    </h3>

    <p className="
      mt-2
      text-sm
      leading-6
      text-gray-400
    ">
      Building intuitive experiences that solve real problems.
    </p>

  </div>


  {/* Card 4 */}
  <div className="
    w-[290px]
    h-[216px]
    rounded-2xl
    bg-[#172033]
    border border-[#29364d]
    p-6
    transition duration-300
    hover:border-[#7C3AED]
  ">

    <div className="
      w-12
      h-12
      rounded-xl
      bg-[#29275f]
      flex
      items-center
      justify-center
      text-[#8B7CFF]
      text-2xl
    ">
      <i className="ri-rocket-line"></i>
    </div>

    <h3 className="
      mt-5
      text-xl
      font-semibold
      text-white
    ">
      Innovation
    </h3>

    <p className="
      mt-2
      text-sm
      leading-6
      text-gray-400
    ">
      Exploring modern technologies and development practices.
    </p>

  </div>

</div>

  </div>
</section>
    
   {/* ================= SKILLS ================= */}
<section
  ref={(el) => (sections.current[2] = el)}
  id="skills"
  className="scroll-section scroll-zoom bg-gray-900 py-24"
>
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center">

      <h2 className="text-5xl md:text-5xl font-bold text-[#9B8AFB]">
        Technical Skills
      </h2>

      <p className="mt-3 text-lg text-gray-300">
        Technologies and tools I use to build modern web applications
      </p>

    </div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-15">
  {/* Frontend */}
  <div className="bg-[#172033] border border-[#29364d] rounded-2xl p-8">
    <h3 className="text-2xl font-semibold text-white">
      Frontend
    </h3>

    <p className="mt-2 text-gray-400 text-sm">
      Building responsive and user-friendly interfaces.
    </p>

    <div className="mt-7 flex flex-wrap gap-4">
      {[
        ["devicon-html5-plain colored", "HTML"],
        ["devicon-css3-plain colored", "CSS"],
        ["devicon-javascript-plain colored", "JavaScript"],
        ["devicon-react-original colored", "React"],
        ["devicon-bootstrap-plain colored", "Bootstrap"],
        ["devicon-tailwindcss-original colored", "Tailwind CSS"],
      ].map(([icon, skill]) => (
        <div
          key={skill}
          title={skill}
          className="
            w-12 h-12
            flex items-center justify-center
            bg-[#111827]
            border border-[#29364d]
            rounded-full
            shadow-lg
            transition-transform hover:scale-110
          "
        >
          <i className={`${icon} text-2xl`}></i>
        </div>
      ))}
    </div>
  </div>

  {/* Backend */}
  <div className="bg-[#172033] border border-[#29364d] rounded-2xl p-8">
    <h3 className="text-2xl font-semibold text-white">
      Backend
    </h3>

    <p className="mt-2 text-gray-400 text-sm">
      Developing APIs and server-side applications.
    </p>

    <div className="mt-7 flex flex-wrap gap-4">
      {[
        ["devicon-nodejs-plain colored", "Node.js"],
        ["devicon-express-original", "Express.js"],
        ["devicon-python-plain colored", "Python"],
        ["devicon-flask-original", "Flask"],
      ].map(([icon, skill]) => (
        <div
          key={skill}
          title={skill}
          className="
            w-12 h-12
            flex items-center justify-center
            bg-[#111827]
            border border-[#29364d]
            rounded-full
            shadow-lg
            transition-transform hover:scale-110
          "
        >
          <i className={`${icon} text-2xl`}></i>
        </div>
      ))}
    </div>
  </div>

  {/* Database & Tools */}
  <div className="bg-[#172033] border border-[#29364d] rounded-2xl p-8">
    <h3 className="text-2xl font-semibold text-white">
      Database & Tools
    </h3>

    <p className="mt-2 text-gray-400 text-sm">
      Managing data and development workflows.
    </p>

    <div className="mt-7 flex flex-wrap gap-4">
      {[
        ["devicon-mongodb-plain colored", "MongoDB"],
        ["devicon-mysql-plain colored", "SQL"],
        ["devicon-git-plain colored", "Git"],
        ["devicon-github-original", "GitHub"],
        ["devicon-vscode-plain colored", "VS Code"],
      ].map(([icon, skill]) => (
        <div
          key={skill}
          title={skill}
          className="
            w-12 h-12
            flex items-center justify-center
            bg-[#111827]
            border border-[#29364d]
            rounded-full
            shadow-lg
            transition-transform hover:scale-110
          "
        >
          <i className={`${icon} text-2xl`}></i>
        </div>
      ))}
    </div>
  </div>
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
      <h2 className="text-5xl font-bold text-5xl text-[#8B7CFF]">
    
        MY EXPERIENCE
       
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

   
<div className="max-w-5xl mx-auto ">

  {/* Projects Heading */}
  <h2 className="text-5xl font-bold text-center text-5xl text-[#8B7CFF]">
    Featured Projects
  </h2>


  {/* Projects */}
  <div className="grid md:grid-cols-2 gap-8 mt-14">


    {/* ================= PROJECT 1 ================= */}
    <div
      className="
        group
        p-8
        rounded-3xl
        bg-[#172033]
        border border-[#29364d]
        hover:-translate-y-2
        transition-all duration-300
       
      "
    >

      {/* Top */}
      
      {/* Title */}
      <h3 className="
        mt-6
        text-3xl
        font-bold
        text-white
        pl-6
      ">
        AI Text Converter
      </h3>


      {/* Description */}
      <p className="
        mt-5
        text-gray-400
        text-base
        pl-6
        leading-relaxed
      ">
        A web application that uses AI to transform and process
        text based on different requirements. It provides users
        with an efficient way to modify and generate text using
        AI-powered features.
      </p>


      {/* Code + Demo */}
      <div className="flex pl-6 gap-3 mt-7">

        {/* Code */}
        <a
          href="#"
          className="
            w-1/2
            h-10
            flex
            items-center
            justify-center
            gap-2
            rounded-lg
            bg-white
            text-[#6366F1]
            text-sm
            hover:bg-gray-100
            transition-all
          "
        >
          <i className="ri-github-line text-lg "></i>
          Code
        </a>


        {/* Demo */}
        <a
          href="#"
          className="
            w-1/2
            h-10
            flex
            items-center
            justify-center
            gap-2
            rounded-lg
            bg-gradient-to-r
            from-[#4F46E5]
            to-[#7C3AED]
            text-white
            text-sm
            hover:opacity-90
            transition-all
          "
        >
          <i className="ri-external-link-line text-lg"></i>
          Demo
        </a>

      </div>

    </div>



    {/* ================= PROJECT 2 ================= */}
    <div
      className="
        group
        p-8
        rounded-3xl
        bg-[#172033]
        border border-[#29364d]
        hover:-translate-y-2
        transition-all duration-300
       
      "
    >

      {/* Top */}
     


      {/* Title */}
      <h3 className="
        mt-6
        text-3xl
        font-bold
        text-white
        text-center
      ">
        Result Publishing System
      </h3>


      {/* Description */}
      <p className="
        mt-5
        text-gray-400
        text-base
        leading-relaxed
        pl-6
      ">
        A web application designed to manage and publish student
        examination results efficiently. It helps organize student
        data and makes result publishing faster and easier.
      </p>


      {/* Code + Demo */}
      <div className="flex gap-3 mt-7 pl-6">

        {/* Code */}
        <a
          href="#"
          className="
            w-1/2 
            h-10
            flex
            items-center
            justify-center
            gap-2
            rounded-lg
            bg-white
            text-[#6366F1]
            text-sm
           
            hover:bg-gray-100
            transition-all
          "
        >
          <i className="ri-github-line text-lg"></i>
          Code
        </a>


        {/* Demo */}
        <a
          href="#"
          className="
            w-1/2
            h-10
            flex
            items-center
            justify-center
            gap-2
            rounded-lg
            bg-gradient-to-r
            from-[#4F46E5]
            to-[#7C3AED]
            text-white
            text-sm
            hover:opacity-90
            transition-all
          "
        >
          <i className="ri-external-link-line text-lg"></i>
          Demo
        </a>

      </div>

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