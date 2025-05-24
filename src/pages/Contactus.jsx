import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // from EmailJS
        "YOUR_TEMPLATE_ID", // from EmailJS
        form.current,
        "YOUR_PUBLIC_KEY" // from EmailJS
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Something went wrong. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="/cus.png" // Replace with your actual image path
            alt="Contact Us Illustration"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-center md:text-left">Contact Us</h2>
          <p className="mb-10 text-center md:text-left">Have a question or want to work together?</p>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF914C]"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF914C]"
              />
            </div>
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF914C]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#FF914C] text-white px-6 py-3 rounded-lg hover:bg-[#e57d39] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
