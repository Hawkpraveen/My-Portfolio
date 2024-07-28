import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card } from "flowbite-react";

function Contact() {
  // Initialize AOS for animation
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_yuoq82m",
        "template_4nogllr",
        formData,
        "R5usoxBDGBm_ExYMl"
      )
      .then((response) => {
        //console.log("Email successfully sent!", response.status, response.text);
        // Reset form
        setFormData({ name: "", email: "", subject: "", message: "" });
        toast.success("Email successfully sent!");
      })
      .catch((err) => {
        console.error("There was an error sending the email", err);
        toast.error("Failed to send email. Please try again later.");
      });
  };

  return (
    <div
      id="Contact"
      className="bg-white text-black dark:bg-slate-900 dark:text-white md:px-10 md:py-32 px-3 py-2 flex flex-col items-center min-h-screen pb-1 w-full"
    >
      <h1
        data-aos="fade-down"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="text-4xl md:text-5xl font-semibold mb-4 leading-normal uppercase text-fuchsia-500"
      >
        Contact Me
      </h1>
      <Card
        className="md:w-1/2 w-full "
        data-aos="fade-up"
        data-aos-offset="150"
        data-aos-easing="ease-in-sine"
      >
        <form onSubmit={handleSubmit} className="flex flex-wrap  w-full">
          <div className="dark:text-slate-300 w-full">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full h-14 mb-4 rounded-lg p-4 border-2 border-fuchsia-800 border-glow  bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              placeholder="Enter Your Full Name"
              required
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-14 mb-4 rounded-lg p-4 border-2 border-fuchsia-800 border-glow  bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              placeholder="Enter Your Email"
              required
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full h-14 mb-4 rounded-lg p-4 border-2 border-fuchsia-800 border-glow  bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              placeholder="Enter Subject"
              required
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full  mb-4 rounded-lg bg-white dark:bg-slate-800 p-4 border-2 border-fuchsia-800 border-glow  focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              placeholder="Enter Your Message..."
              cols="20"
              rows="5"
              required
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            ></textarea>
          </div>

          <div
            className="flex mx-auto"
            data-aos="fade-down"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
          >
            <button
              className="nano-button shadow-xl hover:shadow-fuchsia-800/50 text-black dark:text-zinc-200 border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg px-8 py-3 uppercase hover:scale-110 transition-transform   border-glow focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </Card>

      <ToastContainer />
    </div>
  );
}

export default Contact;
