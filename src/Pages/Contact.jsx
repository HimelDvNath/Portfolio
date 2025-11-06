import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_208gezp",    // Your EmailJS service ID
        "template_khy30pb",   // Your EmailJS template ID
        form.current,
        "tWwDT1bVoenrBV0Rl"  // Your EmailJS public key
      )
      .then(
        () => {
          setIsLoading(false);
          form.current.reset();

          // Show success popup
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your message has been sent successfully!",
            showConfirmButton: false,
            timer: 1500
          });
        },
        (error) => {
          console.error(error.text);
          setIsLoading(false);

          // Show error popup
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong. Please try again!"
          });
        }
      );
  };

  return (
    <section id="contact" className="bg-gray-50 py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10">
        <h2 className="text-4xl font-bold text-orange-600 mb-6 text-center">
          Get in Touch
        </h2>
        <p className="text-gray-600 text-center mb-10">
          Have a question or want to work together? Send me a message below 👇
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-gray-800 font-medium mb-2">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full px-4 py-3 border text-black border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-medium mb-2">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full px-4 text-black py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-medium mb-2">Message</label>
            <textarea
              name="message"
              required
              rows="5"
              className="w-full px-4 text-black py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isLoading}
              className={`px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 shadow-md ${
                isLoading
                  ? "bg-orange-300 cursor-not-allowed"
                  : "bg-orange-500 hover:bg-orange-600"
              }`}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;