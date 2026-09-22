import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wlez2mt",
        "template_p7snakg",
        form.current,
        "aA2tI8ZfaPW3JE6xp"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="scroll-section scroll-left py-24 bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT SIDE ================= */}
          <div>

            <p className="text-[#7C3AED] text-sm tracking-widest">
              HAVE A PROJECT?
            </p>

            <h2 className="mt-4 text-5xl md:text-6xl font-bold text-white">
              Let's Connect
            </h2>

            <p className="mt-6 text-gray-400 text-lg leading-8 max-w-md">
              I'm always interested in connecting with developers,
              discussing projects and exploring new opportunities.
            </p>

            {/* Social Links */}
            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#"
                className="px-6 py-3 rounded-full
                           border border-white/20
                           text-gray-300
                           hover:border-[#7C3AED]
                           hover:text-[#7C3AED]
                           transition"
              >
                GitHub
              </a>

              <a
                href="#"
                className="px-6 py-3 rounded-full
                           border border-white/20
                           text-gray-300
                           hover:border-[#7C3AED]
                           hover:text-[#7C3AED]
                           transition"
              >
                LinkedIn
              </a>

              <a
                href="mailto:example@gmail.com"
                className="px-6 py-3 rounded-full
                           border border-white/20
                           text-gray-300
                           hover:border-[#7C3AED]
                           hover:text-[#7C3AED]
                           transition"
              >
                Email
              </a>

            </div>

          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div
            className="
              bg-[#f8f8f5]
              rounded-[30px]
              p-8 md:p-10
              shadow-[0_0_30px_rgba(255,255,255,0.12)]
            "
          >

            <h3 className="text-3xl font-bold text-[#080d21] mb-8">
              LET'S HAVE A CHAT
            </h3>

            <form ref={form} onSubmit={sendEmail}>

              {/* Name */}
              <input
                type="text"
                name="name"
                placeholder="YOUR NAME"
                required
                className="
                  w-full h-16
                  rounded-2xl
                  bg-[#e5e5e5]
                  px-6
                  text-[#080d21]
                  placeholder:text-gray-500
                  outline-none
                  border-2 border-transparent
                  focus:border-[#080d21]
                  transition duration-300
                "
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="EMAIL ADDRESS"
                required
                className="
                  w-full h-16 mt-5
                  rounded-2xl
                  bg-[#e5e5e5]
                  px-6
                  text-[#080d21]
                  placeholder:text-gray-500
                  outline-none
                  border-2 border-transparent
                  focus:border-[#080d21]
                  transition duration-300
                "
              />

              {/* Message */}
              <textarea
                name="message"
                rows="5"
                placeholder="CHAT HERE"
                required
                className="
                  w-full mt-5
                  rounded-2xl
                  bg-[#e5e5e5]
                  px-6 py-5
                  text-[#080d21]
                  placeholder:text-gray-500
                  outline-none
                  resize-none
                  border-2 border-transparent
                  focus:border-[#080d21]
                  transition duration-300
                "
              ></textarea>

              {/* Submit */}
              <button
                type="submit"
                className="
                  mt-6
                  px-8 py-3
                  rounded-full
                  bg-[#080d21]
                  text-white
                  font-semibold
                  hover:bg-[#7C3AED]
                  hover:text-[#080d21]
                  hover:scale-105
                  transition-all duration-300
                "
              >
                SEND MESSAGE
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}